import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { trackLeadEvent } from "@/lib/facebook-conversions-api";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  business: z.string().min(1, "Business name is required"),
  niche: z.string().min(1, "Service category is required"),
  town: z.string().min(1, "Town/city is required"),
  website: z.string().url().optional().or(z.literal("")),
  source: z.string().default("lead-form"),
  utm: z.object({
    utm_source: z.string().nullable(),
    utm_medium: z.string().nullable(),
    utm_campaign: z.string().nullable(),
    utm_term: z.string().nullable(),
    utm_content: z.string().nullable(),
  }).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Prepare email content
    const emailContent = `
New Lead from AutomateSEO.co

Contact Information:
- Name: ${validatedData.name}
- Email: ${validatedData.email}
- Phone: ${validatedData.phone}
- Business: ${validatedData.business}
- Service Category: ${validatedData.niche}
- Town/City: ${validatedData.town}
- Website: ${validatedData.website || "Not provided"}

Source: ${validatedData.source}

UTM Parameters:
- Source: ${validatedData.utm?.utm_source || "N/A"}
- Medium: ${validatedData.utm?.utm_medium || "N/A"}
- Campaign: ${validatedData.utm?.utm_campaign || "N/A"}
- Term: ${validatedData.utm?.utm_term || "N/A"}
- Content: ${validatedData.utm?.utm_content || "N/A"}

Timestamp: ${new Date().toISOString()}
    `.trim();

    // Try Resend first
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: "AutomateSEO.co <noreply@automateseo.co>",
          to: ["sales@automateseo.co"],
          subject: `New Lead: ${validatedData.business} - ${validatedData.town}`,
          text: emailContent,
        });
        
        // Track lead event in Facebook Conversions API
        const userAgent = request.headers.get('user-agent') || undefined;
        
        await trackLeadEvent(
          request.url,
          userAgent,
          validatedData.email,
          validatedData.phone,
          1000 // £1,000 service value
        );
        
        console.log("Lead sent via Resend:", validatedData.email);
        return NextResponse.json({ ok: true, method: "resend" });
      } catch (resendError) {
        console.error("Resend failed:", resendError);
        // Fall through to web3forms
      }
    }

    // Fallback to web3forms
    if (process.env.WEB3FORMS_KEY) {
      try {
        const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_KEY,
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            business: validatedData.business,
            niche: validatedData.niche,
            town: validatedData.town,
            website: validatedData.website || "",
            source: validatedData.source,
            utm_source: validatedData.utm?.utm_source || "",
            utm_medium: validatedData.utm?.utm_medium || "",
            utm_campaign: validatedData.utm?.utm_campaign || "",
            utm_term: validatedData.utm?.utm_term || "",
            utm_content: validatedData.utm?.utm_content || "",
            message: `New lead from AutomateSEO.co availability check form`,
          }),
        });

        if (web3formsResponse.ok) {
          console.log("Lead sent via web3forms:", validatedData.email);
          return NextResponse.json({ ok: true, method: "web3forms" });
        }
      } catch (web3formsError) {
        console.error("Web3forms failed:", web3formsError);
      }
    }

    // If both fail, log the lead and return success (don't break user experience)
    console.log("Lead received but email failed:", validatedData);
    return NextResponse.json({ ok: true, method: "logged" });

  } catch (error) {
    console.error("Lead submission error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          ok: false, 
          error: "Validation failed", 
          details: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}