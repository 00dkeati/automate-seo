import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  business: string;
  town: string;
  quote: string;
  rating: number;
}

export function Testimonial({ name, business, town, quote, rating }: TestimonialProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <CardTitle className="text-lg">{quote}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{business}</div>
          <Badge variant="secondary" className="text-xs">
            {town}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

