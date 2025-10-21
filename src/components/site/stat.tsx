import { Card, CardContent } from "@/components/ui/card";

interface StatProps {
  value: string;
  label: string;
  description?: string;
}

export function Stat({ value, label, description }: StatProps) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-primary mb-2">{value}</div>
        <div className="text-lg font-semibold mb-1">{label}</div>
        {description && (
          <div className="text-sm text-muted-foreground">{description}</div>
        )}
      </CardContent>
    </Card>
  );
}

interface StatRowProps {
  stats: StatProps[];
}

export function StatRow({ stats }: StatRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Stat key={index} {...stat} />
      ))}
    </div>
  );
}
