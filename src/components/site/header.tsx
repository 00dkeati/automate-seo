"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { trackWhatsAppClick, trackBookingClick } from "@/lib/analytics";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/results", label: "Results" },
    { href: "/pricing", label: "Pricing" },
    { href: "/check-availability", label: "Check Availability" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-xl font-bold text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button asChild variant="outline" size="sm">
            <a 
              href={siteConfig.contact.bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("header")}
            >
              Book Call
            </a>
          </Button>
          <Button asChild size="sm">
            <a 
              href={createWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header")}
            >
              WhatsApp
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline">
                  <a 
                    href={siteConfig.contact.bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackBookingClick("mobile-menu")}
                  >
                    Book Call
                  </a>
                </Button>
                <Button asChild>
                  <a 
                    href={createWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("mobile-menu")}
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
