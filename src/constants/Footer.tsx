'use client';

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { FooterDataType } from "@/types/types";

export function useFooterLinks(): FooterDataType {
  const router = useRouter();
  const pathname = usePathname();

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const scrollOrNavigate = (id: string) => {
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

  const footerLinks: FooterDataType = useMemo(() => ({
    Product: [
      {
        title: "Features & Integrations",
        // link: "/features-integrations",
        click: () => scrollOrNavigate("Mesh"),
      },
      {
        title: "Pricing & Plans",
        // link: "/pricing",
        click: () => openLink("/pricing"),
      },
    ],
    Company: [
      {
        title: "About Rever",
        // link: "/about",
        click: () => openLink("/about"),
      },
      {
        title: "Careers",
        // link: "/careers",
        click: () => openLink("/careers"),
      },
    ],
    Resources: [
      {
        title: "Blog & Guides",
        // link: "/blog",
        click: () => openLink("/blog"),
      },
      {
        title: "Roadmap",
        // link: "/roadmap",
        click: () => scrollOrNavigate("roadmap"),
      },
    ],
    Connect: [
      {
        title: "Contact Sales",
        // link: "/contact-sales",
        click: () => openLink("/contact-sales"),
      },
      {
        title: "Signup",
        // link: "https://app.reverfin.ai",
        click: () => openLink("https://app.reverfin.ai"),
      },
    ],
  }), [router]);

  return footerLinks;
}
