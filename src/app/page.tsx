"use client";
import DarkVeil from "@/components/bits/DarkVeil";
import CardNav from "@/components/bits/CardNav";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaRegNewspaper } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          ariaLabel: "Featured Projects",
          href: "/projects/featured",
        },
        {
          label: "Case Studies",
          ariaLabel: "Project Case Studies",
          href: "/projects/case-studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:info@example.com",
        },
        {
          label: "Twitter",
          ariaLabel: "Twitter",
          href: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://linkedin.com/",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <DarkVeil />
      </div>

      {/* Foreground: Header and Centered Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{ width: "100%", flex: "0 0 auto" }}>
          <CardNav
            logo={<FaRegNewspaper size={32} />}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>

        {/* Centered Card */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
