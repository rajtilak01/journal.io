import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

export default function FAQ() {
   return (
    <section className="py-20 bg-muted">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
        <p className="text-muted-foreground">
          Everything you need to know about journal.io
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is my journal data private and secure?</AccordionTrigger>
          <AccordionContent>
            Yes, absolutely! We use end-to-end encryption to ensure that only you can access your journal entries.
            Your data is stored securely and never shared with third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I access my journal offline?</AccordionTrigger>
          <AccordionContent>
            Yes, journal.io works offline! Your entries are synchronized when you're back online,
            ensuring you never lose your thoughts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What makes journal.io different?</AccordionTrigger>
          <AccordionContent>
            journal.io combines beautiful design, powerful features, and bank-level security.
            Our AI-powered insights help you understand your writing patterns and emotional trends.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I export my journal entries?</AccordionTrigger>
          <AccordionContent>
            Yes, you can export your entries in multiple formats including PDF, Markdown, and plain text.
            Your data is always portable and under your control.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
   )
}