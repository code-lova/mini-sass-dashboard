import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  Book,
  MessageCircle,
  FileText,
  Search,
} from "lucide-react";

const helpTopics = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of using the dashboard",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed guides and API references",
  },
  {
    icon: MessageCircle,
    title: "Contact Support",
    description: "Get help from our support team",
  },
];

const faqs = [
  {
    q: "How do I upgrade my plan?",
    a: "Go to Billing > Available Plans and select the plan you want.",
  },
  {
    q: "Can I export my data?",
    a: "Yes, go to Settings > Data Management to export your data.",
  },
  {
    q: "How do I add team members?",
    a: "Navigate to Customers > Add Customer to invite team members.",
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Find answers and get support</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Help
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search for help topics..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {helpTopics.map((topic) => (
          <Card
            key={topic.title}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <CardHeader>
              <topic.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
              <p className="font-medium">{faq.q}</p>
              <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>
            Our support team is here to assist you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
