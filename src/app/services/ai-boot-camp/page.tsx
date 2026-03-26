import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "AI Boot Camp for Executives",
  description:
    "Get your leadership team across AI in days. Intensive workshops that cut through the hype and give you a clear action plan.",
};

export default function AIBootCampPage() {
  return (
    <ServiceDetailPage
      title="AI Boot Camp"
      tagline="Get your leadership team across AI in days, not months. Cut through the noise. Know where AI wins in your business."
      whoItsFor={[
        "CEOs, CIOs, CTOs, COOs who need to lead AI strategy confidently",
        "Leadership teams evaluating AI investment",
        "SME owners who want to understand AI without the hype",
        "Executives who need to speak credibly about AI with boards and partners",
      ]}
      whatYouGet={[
        "A clear map of AI opportunities specific to your business",
        "An honest assessment of what AI can and can\u2019t do for you right now",
        "A prioritised shortlist of quick wins and longer-term initiatives",
        "Confidence to evaluate vendors, tools, and proposals",
        "A shared language for discussing AI across your organisation",
      ]}
      howItWorks={[
        {
          title: "Day 1 — Landscape & Assessment",
          description:
            "We demystify AI: what\u2019s real, what\u2019s hype, what matters for your industry. Then we audit your current operations and identify where AI can deliver the most value.",
        },
        {
          title: "Day 2 — Strategy & Action",
          description:
            "We build a prioritised roadmap together. You leave with a concrete action plan, not a slide deck that gathers dust.",
        },
        {
          title: "Optional Day 3+ — Hands-on Implementation",
          description:
            "For teams that want to move immediately, we roll up our sleeves and start building the first automation or workflow together.",
        },
      ]}
      format={[
        "On-site at your office (Sydney metro or travel by arrangement)",
        "Remote via video (for distributed teams)",
        "Individual executive coaching (1-on-1 format available)",
      ]}
      cta="Book Your Boot Camp"
      ctaParam="boot-camp"
    />
  );
}
