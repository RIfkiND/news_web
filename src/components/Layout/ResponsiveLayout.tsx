"use client";
import { ReactNode } from "react";


interface ResponsiveLayoutProps {
  children: ReactNode;
}


export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex justify-center items-start">
      <div className="w-full max-w-3xl px-4 py-8">
        {children}
      </div>
    </div>
  );
}