"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface SerpMockProps {
  className?: string;
}

export function SerpMock({ className }: SerpMockProps) {
  const mockResults = [
    {
      title: "Plumber Waterlooville - Emergency Plumbing Services",
      url: "waterlooville-plumber.co.uk",
      description: "24/7 emergency plumbing services in Waterlooville. Same-day repairs, boiler fixes, and drain cleaning. Call now for immediate assistance.",
      isHighlighted: true,
    },
    {
      title: "Waterlooville Plumbing Services | Local Plumbers",
      url: "local-plumbers-waterlooville.co.uk", 
      description: "Professional plumbing services in Waterlooville. Trusted local plumbers for all your plumbing needs. Free quotes available.",
      isHighlighted: false,
    },
    {
      title: "Best Plumbers in Waterlooville | Reviews & Quotes",
      url: "find-plumber-waterlooville.co.uk",
      description: "Find the best plumbers in Waterlooville. Read reviews, compare quotes, and book trusted local plumbing professionals.",
      isHighlighted: false,
    },
  ];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">
          Google Search Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockResults.map((result, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border ${
              result.isHighlighted 
                ? "bg-primary/5 border-primary/20" 
                : "bg-muted/30 border-border"
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <h3 className={`text-sm font-medium mb-1 ${
                  result.isHighlighted ? "text-primary" : "text-foreground"
                }`}>
                  {result.title}
                </h3>
                <p className="text-xs text-green-600 mb-1">{result.url}</p>
                <p className="text-xs text-muted-foreground">{result.description}</p>
              </div>
              {result.isHighlighted && (
                <Badge variant="default" className="text-xs">
                  Your Site
                </Badge>
              )}
            </div>
          </div>
        ))}
        <div className="text-center">
          <Badge variant="outline" className="text-xs">
            <ExternalLink className="h-3 w-3 mr-1" />
            Your site appears here
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
