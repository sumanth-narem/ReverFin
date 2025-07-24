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
          content: "Insights in real time",
        }
      ]
    },
    {
      title: "Pricing",
      icon: null
    },
    {
      title: "Company",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "About Rever",
          click: () => window.open("/", "_blank"),
          content: "At Rever, we believe finance should be intelligent, empowering, and intuitive",
        },
        {
          title: "Careers",
          click: () => window.open("/", "_blank"),
          content: "Organizes documents for audits, provides intelligent insights across periods",
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
          content: "Learn, Explore, Stay Informed",
        }
      ]
    },
    {
      title: "Connect",
      icon: <ChevronDown width={15} className="mt-0.5" />,
      subItems: [
        {
          title: "Contact sales",
          click: () => window.open("/", "_blank"),
          content: "Learn, Explore, Stay Informed",
        },
        {
          title: "Support",
          click: () => window.open("/", "_blank"),
          content: "Learn, Explore, Stay Informed",
        },
        {
          title: "Sign up",
          click: () => window.open("https://app.reverfin.ai/", "_blank"),
          content: "Learn, Explore, Stay Informed",
        }
      ]
    }
  ];

  return urls;
}
