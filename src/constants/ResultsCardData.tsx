import { ResultsDataType, ScrollSectionDataType, ScrollSectionType } from "@/types/types";

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

export const scrollSection: ScrollSectionType[] = [
  {
    id: 0,
    title: "Mesh"
  },
  {
    id: 1,
    title: "Warp"
  },
  {
    id: 2,
    title: "IntelliLens"
  },
  {
    id: 3,
    title: "Dashboard"
  }
]

export const scrollSectionData: ScrollSectionDataType[] = [
  {
    "content": {
      "heading": "Mesh - Transaction Validation & Controls",
      "subheading": "Validates every transaction with 20+ critical checks"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Real-time validation"
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Multi-way matching"
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Risk identification"
      }
    ]
  },
  {
    "content": {
      "heading": "Warp - Continuous Reconciliation",
      "subheading": "Detects mismatches and anomalies in real time"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Automated mismatch detection"
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Real-time data syncing"
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Custom alerts & notifications"
      }
    ]
  },
  {
    "content": {
      "heading": "IntelliLens - Intelligent Workflow Automation",
      "subheading": "Streamlines approvals and routing logic with AI"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Smart approval routing"
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "No-code automation builder"
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Workflow status tracking"
      }
    ]
  },
  {
    "content": {
      "heading": "Dashboard - Transaction Validation & Controls",
      "subheading": "Validates every transaction with 20+ critical checks"
    },
    "features": [
      {
        "icon": "/assets/scrollSection/realTimeValidation.svg",
        "text": "Real-time validation"
      },
      {
        "icon": "/assets/scrollSection/MultiwayMatching.svg",
        "text": "Multi-way matching"
      },
      {
        "icon": "/assets/scrollSection/Risk.svg",
        "text": "Risk identification"
      }
    ]
  }
]
