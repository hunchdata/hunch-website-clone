import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is Hunch different from other AI tools?",
    answer: "Hunch is a workspace, not just a chatbot. It lets you break down complex projects into smaller tasks, use multiple AI models, and create reusable tools for your team.",
  },
  {
    question: "Do I need coding experience to use Hunch?",
    answer: "No coding experience is required! Hunch is designed to be intuitive and user-friendly. You can build powerful AI workflows without writing a single line of code.",
  },
  {
    question: "Do I need to be an AI expert to use Hunch?",
    answer: "Not at all. Hunch is built for everyone – from AI beginners to experts. Our templates and intuitive interface make it easy to get started right away.",
  },
  {
    question: "Is Hunch free?",
    answer: "Hunch offers a free tier that lets you explore our features. For more advanced usage and team features, we offer paid plans.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <span className="section-badge mb-6">FAQ</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Need help?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join our vibrant community and learn how to get more done with Hunch.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
            <a href="https://hnch.link/discord">Join us on Discord</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
            <a href="https://hunch.tools/docs">Read the docs</a>
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl mb-4 px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
