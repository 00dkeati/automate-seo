"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <Button
          variant="ghost"
          className="justify-between p-0 h-auto font-semibold text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          <p className="text-muted-foreground">{answer}</p>
        </CardContent>
      )}
    </Card>
  );
}

interface FAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
