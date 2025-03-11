import { Button } from "@mantine/core";
import { Lock, Stars, Users } from "lucide-react";

export default function Hero () {
    return (
        <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                ✨ New: AI-powered journaling insights
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Your Personal Digital Journal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Capture your thoughts, memories, and reflections in a beautiful and secure digital space.
              Start your journaling journey today.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="px-8">Start Writing Now</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>50K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Stars className="h-5 w-5" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span>End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}