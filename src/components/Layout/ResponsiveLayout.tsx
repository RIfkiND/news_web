"use client";
import { ReactNode } from "react";


interface ResponsiveLayoutProps {
  children: ReactNode;
}


export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <>
      {/* Mobile Layout - Show on mobile screens only via CSS */}
      <div className="mobile-only  relative min-h-0">
        {children}
      </div>

      {/* Desktop Layout - Show on desktop screens only via CSS */}
      <div
        className="desktop-only  "

      >
        {children}
      </div>
    </>
  );
}