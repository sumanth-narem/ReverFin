import { ResultsDataType, ScrollSectionDataType } from "@/types/types";

export const resultsData: ResultsDataType[] = [
  {
    title: "Transaction Accuracy",
    value: "98",
    symbol: "%",
    image: "/assets/results/Transactions.svg",
    imageHover: "/assets/results/TransactionsHover.svg",
    className: "",
  },
  {
    title: "Hours Saved Weekly",
    value: "15",
    symbol: "+",
    image: "/assets/results/Hours.svg",
    imageHover: "/assets/results/HoursHover.svg",
    className: "",
  },
  {
    title: "Integrations",
    value: "70",
    symbol: "+",
    image: "/assets/results/Integration.svg",
    imageHover: "/assets/results/IntegrationHover.svg",
    className: "",
  },
  {
    title: "Happy Customers",
    value: "100",
    symbol: "+",
    image: "/assets/results/Customers.svg",
    imageHover: "/assets/results/CustomersHover.svg",
    className: "",
  },
]

export const scrollSectionData: ScrollSectionDataType[] = [
  {
    "name": "Mesh",
    "content": {
      "heading": "Mesh - Transaction Validation & Controls",
      "subheading": "Validates every transaction with 20+ critical checks"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Real-time validation",
        "content": "Catch inconsistencies and missing data instantly - before they become issues.",
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Multi-way matching",
        "content": " Automatically match PO, Invoice, GRN, and more to flag anomalies.",
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Risk identification",
        "content": " Identify duplicates, mismatches, and control violations across processes.",
      }
    ],
    "sideContent": {
      "img": "/assets/scrollSection/Mesh.svg",
      "content": "Mesh ensures every transaction is validated at the point of entry. By embedding 20+ layered controls, it minimizes leakages and enforces financial integrity without slowing down operations.",
    }
  },
  {
    "name": "Warp",
    "content": {
      "heading": "Warp - Cross-System Data Sync & Approvals",
      "subheading": "Brings data, documents, and approvals from across your stack into one flow"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "System-wide integration",
        "content": " Pulls in POs, invoices, approvals, and user actions from ERP, email, and external systems.",
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Approval orchestration",
        "content": "Routes requests to the right stakeholders - even across departments or tools.",
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Gap detection",
        "content": "Flags missing GRNs, POs, or fields -and auto - triggers resolution workflows.",
      }
    ],
    "sideContent": {
      "img": "/assets/scrollSection/Warp.svg",
      "content": "Warp connects fragmented systems into a unified engine for finance ops - helping teams track, approve, and resolve items faster than ever.",
    }
  },
  {
    "name": "IntelliLens",
    "content": {
      "heading": "IntelliLens - Audit-Ready Intelligence Layer",
      "subheading": "An always-on system that analyses, tracks, and responds"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Smart document handling",
        "content": "Tracks every edit, comment, and upload for bills, POs, and vendor docs.",
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Conversational interface",
        "content": "Ask questions like 'Show rejected invoices from May' or 'Who approved PO#234?'",
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Insightful analytics",
        "content": "Breakdowns by user, vendor, amount, status - instantly searchable.",
      }
    ],
    "sideContent": {
      "img": "/assets/scrollSection/IntelliLens.svg",
      "content": "IntelliLens acts like your financial memory - always on, always organised, and always ready for audit. Just ask, and it delivers clarity.",
    }
  },
  {
    "name": "Dashboard",
    "content": {
      "heading": "Dashboard - Intelligent Finance Command Center",
      "subheading": "See everything. Act instantly. Optimize continuously."
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Real-time insights",
        "content": "Monitor approvals, exceptions, cash flow, and spend - all in one view.",
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Deep drill-downs",
        "content": "Slice data by vendor, category, department, or custom tags to identify trends and anomalies.",
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Smart alerts & recommendations",
        "content": "Get notified of bottlenecks, pending actions, and unusual patterns - before they escalate.",
      }
    ],
    "sideContent": {
      "img": "/assets/scrollSection/Dashboard.svg",
      "content": "The Intelligent Dashboard brings visibility and control into your daily finance operations. Designed for speed and clarity, it helps finance teams prioritize what matters and take action - without the clutter.",
    }
  }
]
