import { Feather, Lock, Users } from "lucide-react";

export default function Features() {
    return (
        <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Journal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful features wrapped in a beautiful, intuitive interface
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Feather className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beautiful Writing Experience</h3>
              <p className="text-muted-foreground">
                Enjoy a distraction-free writing environment with rich text formatting
                and customizable themes.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Your Stories</h3>
              <p className="text-muted-foreground">
                Choose to keep your journals private or share them with trusted
                friends and family.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your thoughts are precious. We ensure your journals are encrypted
                and completely private.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}