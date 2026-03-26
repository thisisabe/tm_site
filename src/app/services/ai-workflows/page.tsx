import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "AI Workflow Automation",
  description:
    "We audit your operations, find the friction, and automate it with AI. Project-based, flexible, built for growing businesses.",
};

export default function AIWorkflowsPage() {
  return (
    <ServiceDetailPage
      title="AI Workflow Automation"
      tagline="Find the friction. Automate it. Move on."
      whoItsFor={[
        "Scale-ups and SMEs looking to do more with less",
        "Operations leaders drowning in manual processes",
        "Businesses using AI tools in isolation without a joined-up strategy",
        "Teams that tried AI but couldn\u2019t make it stick",
      ]}
      whatYouGet={[
        "Operational audit — we map your workflows and find the bottlenecks",
        "Opportunity prioritisation — ranked by impact, effort, and ROI",
        "AI workflow design — tailored to your stack and team capabilities",
        "Implementation — we build it, test it, and hand it over working",
        "Team training — your people know how to run and maintain it",
        "Ongoing support — we come back as needed, charged on a day rate",
      ]}
      howItWorks={[
        {
          title: "Week 1\u20132: Discovery & Audit",
          description:
            "We observe, interview, and map. No assumptions. We find where time and money are being wasted.",
        },
        {
          title: "Week 3\u20134: Design & Prototype",
          description:
            "We design the target workflows, prototype key automations, and validate with your team before committing to build.",
        },
        {
          title: "Week 5+: Build, Test, Embed",
          description:
            "We implement in your environment, train your team, and make sure it works in the real world — not just in a demo.",
        },
        {
          title: "Ongoing: Support & Iteration",
          description:
            "Need us to come back and tune things? Expand to new workflows? We\u2019re available on a flexible day rate.",
        },
      ]}
      cta="Start a Project"
      ctaParam="workflows"
    />
  );
}
