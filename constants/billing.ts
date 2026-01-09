
export const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "For individuals and small projects",
    features: ["Up to 1,000 users", "Basic analytics", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams and businesses",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Custom analytics",
      "24/7 support",
      "Full API access",
      "Custom integrations",
    ],
    current: false,
  },
];