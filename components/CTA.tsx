import { Button } from "./ui/button";

export default function CTA() {
    return (
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journaling Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of writers who have already discovered the power of
            digital journaling with journal.io
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">Create Your Free Account</Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </section>
    )
}