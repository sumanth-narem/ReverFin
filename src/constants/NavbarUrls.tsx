'use client';

import { URLType } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useNavbarUrls(): URLType[] {
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll after landing on "/" with targetId from sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const targetId = sessionStorage.getItem("scrollToId");
      if (targetId && pathname === "/") {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToId");
      }
    }
  }, [pathname]);

  const scrollOrNavigate = (id: string) => {
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

  const urls: URLType[] = [
    {
      title: "Product",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "Mesh",
          img: "/assets/Navbar/Product/Mesh.svg",
          hoverImg: "/assets/Navbar/Product/MeshHover.svg",
          click: () => scrollOrNavigate("Mesh"),
          content: "Applies controls, validates transactions and prevents leakages.",
        },
        {
          title: "Warp",
          img: "/assets/Navbar/Product/Warp.svg",
          hoverImg: "/assets/Navbar/Product/WarpHover.svg",
          click: () => scrollOrNavigate("Warp"),
          content: "Gathers data and approvals across systems, filling data gaps.",
        },
        {
          title: "IntelliLens",
          img: "/assets/Navbar/Product/Intellilens.svg",
          hoverImg: "/assets/Navbar/Product/IntellilensHover.svg",
          click: () => scrollOrNavigate("IntelliLens"),
          content: "Organizes documents for audits, provides intelligent insights across periods",
        },
        {
          title: "Dashboard",
          img: "/assets/Navbar/Product/Dashboard.svg",
          hoverImg: "/assets/Navbar/Product/DashboardHover.svg",
          click: () => scrollOrNavigate("Dashboard"),
          content: "Provides insights that connect transactions, timelines, and team actions",
        }
      ]
    },
    {
      title: "Pricing",
      icon: null,
      click: () => window.open("/pricing", "_blank"),
    },
    {
      title: "Company",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "About Rever",
          click: () => window.open("/about", "_blank"),
          content: "Powering intelligent finance with automation, control, and insights.",
        },
        {
          title: "Careers",
          click: () => window.open("/careers", "_blank"),
          content: "Join us in reshaping the future of finance  one intelligent workflow at a time.",
        },
        {
          title: "Manifesto",
          click: () => window.open("/manifesto", "_blank"),
          content: "What we believe, why we built Rever, and where we’re headed.",
        },
      ]
    },
    {
      title: "Resources",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "Blogs & Guides",
          click: () => window.open("/blog", "_blank"),
          content: "Insights on finance, automation, and building smarter back offices.",
        },
        {
          title: "Roadmap",
          click: () => scrollOrNavigate("roadmap"),
          content: "See what’s next  from AI-driven controls to finance copilots.",
        }
      ]
    },
    {
      title: "Connect",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "Contact sales",
          click: () => window.open("/contact-sales", "_blank"),
          content: "Contact us to discover how Rever can transform your financial operations.",
        },
        // {
        //   title: "Support",
        //   click: () => window.open("/", "_blank"),
        //   content: "Learn, Explore, Stay Informed",
        // },
        {
          title: "Sign up",
          click: () => window.open("https://app.reverfin.ai/", "_blank"),
          content: "Get started with smarter finance  no clutter, just clarity.",
        }
      ]
    }
  ];

  return urls;
}
