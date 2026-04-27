import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started.",
    features: [
      "Access to public playbooks",
      "Weekly newsletter",
      "Basic prompts",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For serious creators and builders.",
    features: [
      "Everything in Free",
      "Advanced Workflows (Make/n8n)",
      "Premium Prompt Packs",
      "Real-world Case Studies",
      "Early access to tools",
    ],
    cta: "Join Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    description: "For small teams and agencies.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom workflow design",
      "Priority support",
    ],
    cta: "Contact Us",
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">Choose the plan that fits your AI journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <div 
            key={plan.name}
            className={`relative p-8 rounded-3xl border transition-all ${
              plan.popular 
                ? "border-primary shadow-xl scale-105 bg-card" 
                : "border-border hover:border-primary/50 bg-card"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
            </div>
            <p className="text-muted-foreground mb-8 text-sm">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${
              plan.popular 
                ? "bg-primary text-primary-foreground hover:opacity-90" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
