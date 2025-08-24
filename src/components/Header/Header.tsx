"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent",
        className
      )}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo / Icon */}
        <Link href="/" className="text-2xl font-bold text-white">
          TechNews
        </Link>
        {/* Navigation */}
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            value="category"
            item={
              <span className="flex items-center gap-1">
                Category <FaChevronDown className="inline-block text-xs" />
              </span>
            }
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            value="products"
            setActive={setActive}
            active={active}
            item={
              <span className="flex items-center gap-1">
                Cool Stuff <FaChevronDown className="inline-block text-xs" />
              </span>
            }
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem
            value="more"
            setActive={setActive}
            active={active}
            item={
              <span className="flex items-center gap-1">
                More <FaChevronDown className="inline-block text-xs" />
              </span>
            }
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        {/* Subscribe Button */}
        <Link
          href="/subscribe"
          className="ml-6 px-5 py-2 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
}
