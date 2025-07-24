import { TimeLineDataType } from "@/types/types";

export const TimeLineData: TimeLineDataType[] = [
  {
    title: "Q2 2025",
    content: {
      heading: "Now Available",
      completed: true,
      items: [
        (<><span className="text-primary-100">P2P Automation:</span> 3-way mtching, real-time reconciliation, SOP compliance.</>),
        (<><span className="text-primary-100">Basic Analytics:</span> Expense accounting, accruals, procurement planning.</>),
        (<><span className="text-primary-100">Expense Controls:</span> Automated checks and CF forecasting.</>),
      ]
    }
  },
  {
    title: "Q3 2026",
    content: {
      heading: "In Development",
      completed: false,
      items: [
        (<><span className="text-primary-100">R2AR Module</span> Automated invoicing, dunning, revenue performance forecasting.</>),
        (<><span className="text-primary-100">Advanced Analytics:</span> Benchmarking insights, cost intelligence.</>),
        (<><span className="text-primary-100">Pricing Insights:</span> Revenue optimization recommendations.</>),
      ]
    }
  },
  {
    title: "Q4 2026",
    content: {
      heading: "Coming Soon",
      completed: false,
      items: [
        (<><span className="text-primary-100">Payroll Integration:</span> Validation, SOP compliance, real-time reconciliation.</>),
        (<><span className="text-primary-100">Talent Analytics:</span> Efficiency insights, time cost planning.</>),
        (<><span className="text-primary-100">Enhanced Forecasting:</span> ML-powered cash flow predictions.</>),
      ]
    }
  },
  {
    title: "Q1 2027",
    content: {
      heading: "Planned",
      completed: false,
      items: [
        (<><span className="text-primary-100">Advanced AI Features:</span> Predictive compliance alerts.</>),
        (<><span className="text-primary-100">Custom Workflows:</span> Industry-specific automation templates.</>),
        (<><span className="text-primary-100">API Expansions:</span> Enhanced third-party integrations.</>),
      ]
    }
  }
]