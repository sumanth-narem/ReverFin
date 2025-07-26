import { TimeLineDataType } from "@/types/types";

// export const TimeLineData: TimeLineDataType[] = [
//   {
//     title: "Live features",
//     content: {
//       heading: "Now Available",
//       completed: true,
//       items: [
//         (<><span className="text-primary-100 text-base">P2P Automation:</span> 3-way mtching, real-time reconciliation, SOP compliance.</>),
//         (<><span className="text-primary-100 text-base">Basic Analytics:</span> Expense accounting, accruals, procurement planning.</>),
//         (<><span className="text-primary-100 text-base">Expense Controls:</span> Automated checks and CF forecasting.</>),
//       ]
//     }
//   },
//   {
//     title: "In Development",
//     content: {
//       heading: "In Development",
//       completed: false,
//       items: [
//         (<><span className="text-primary-100 text-base">R2AR Module</span> Automated invoicing, dunning, revenue performance forecasting.</>),
//         (<><span className="text-primary-100 text-base">Advanced Analytics:</span> Benchmarking insights, cost intelligence.</>),
//         (<><span className="text-primary-100 text-base">Pricing Insights:</span> Revenue optimization recommendations.</>),
//       ]
//     }
//   },
//   {
//     title: "Coming Soon",
//     content: {
//       heading: "Coming Soon",
//       completed: false,
//       items: [
//         (<><span className="text-primary-100 text-base">Payroll Integration:</span> Validation, SOP compliance, real-time reconciliation.</>),
//         (<><span className="text-primary-100 text-base">Talent Analytics:</span> Efficiency insights, time cost planning.</>),
//         (<><span className="text-primary-100 text-base">Enhanced Forecasting:</span> ML-powered cash flow predictions.</>),
//       ]
//     }
//   },
//   {
//     title: "Planned",
//     content: {
//       heading: "Planned",
//       completed: false,
//       items: [
//         (<><span className="text-primary-100 text-base">Advanced AI Features:</span> Predictive compliance alerts.</>),
//         (<><span className="text-primary-100 text-base">Custom Workflows:</span> Industry-specific automation templates.</>),
//         (<><span className="text-primary-100 text-base">API Expansions:</span> Enhanced third-party integrations.</>),
//       ]
//     }
//   }
// ]

export const TimeLineData: TimeLineDataType[] = [
  {
    title: "Live features",
    content: {
      heading: "Live features",
      completed: true,
      items: [
        (<><span className="text-white text-sm mb-1">Core Integrations & Data Handling:</span>ERP Integration,
          Automated Data Collation from ERP,
          Bulk Data Upload with Enhanced Capacity,
          Smart Multi-Currency Enablement</>),
        (<><span className="text-white text-sm mb-1">AI & Validation Engine:</span>AI-Powered Data Extraction,
          High-Accuracy Bill Validation and Audit,
          AI-Driven 2-Way and 3-way Matching,
          Smart Filter for Duplicates & Non-Compliant Documents</>),
        (<><span className="text-white text-sm mb-1">Approvals & Confirmations:</span>Automated Receipt Acknowledgement Tracking,
          One-Click Approval Workflow,
          Vendor Management Portal</>),
      ]
    }
  },
  {
    title: "In Development",
    content: {
      heading: "In Development",
      completed: false,
      items: [
        (<><span className="text-white text-sm mb-1">Core Integrations & Data Handling</span> GRN Module,
          Email Ingestion,
          Flexible / Multiple PO & Invoice Mapping</>),
        (<><span className="text-white text-sm mb-1">Visibility & Insights:</span> Advanced Financial Metrics and Analytics</>),
        (<><span className="text-white text-sm mb-1">AI & Validation Engine:</span> Timesheet-Linked Bill Validation,
          Milestone-Based Project Billing Integration,
          Chat with Rever — Full Finance Intelligence</>),
      ]
    }
  },
  {
    title: "Coming Soon",
    content: {
      heading: "Coming Soon",
      completed: false,
      items: [
        (<><span className="text-white text-sm mb-1">Approvals & Confirmations:</span> Context-Aware Smart Approvals</>),
        (<><span className="text-white text-sm mb-1">Knowledge & Document Control:</span> Smart Audit-Ready Document Management,
          Cross-System AI Chatbot for Document Gaps</>),
        (<><span className="text-white text-sm mb-1">Visibility & Insights:</span> Proactive Insight Notifications</>),
      ]
    }
  },
  {
    title: "Planned",
    content: {
      heading: "Planned",
      completed: false,
      items: [
        (<><span className="text-white text-sm mb-1">Core Integrations:</span>  Bank & Payment Gateway Integrations for spot reconciliations</>),
        (<><span className="text-white text-sm mb-1">Vendor Collaboration:</span> Vendor Balance Reconciliation & Outreach Engine</>),
        (<><span className="text-white text-sm mb-1">Knowledge & Document Control:</span> Document Management and SOP Repository</>),
      ]
    }
  }
]