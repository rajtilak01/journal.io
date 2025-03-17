import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Loved by Writers Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied journal writers who have made journaling
            a daily habit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="Sarah Mitchell"
                className="w-12 h-12 rounded-full"
                width={12}
                height={12}
              />
              <div className="ml-4">
                <h4 className="font-semibold">Sarah Mitchell</h4>
                <p className="text-muted-foreground text-sm">Writer</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              &quot;journal.io has transformed my writing routine. The interface
              is beautiful, and the privacy features give me peace of
              mind.&quot;
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="David Chen"
                className="w-12 h-12 rounded-full"
                height={12}
                width={12}
              />
              <div className="ml-4">
                <h4 className="font-semibold">David Chen</h4>
                <p className="text-muted-foreground text-sm">
                  Creative Director
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              &quot;The best journaling app I&apos;ve ever used. Clean, intuitive,
              and packed with thoughtful features.&quot;
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt="Emma Rodriguez"
                className="w-12 h-12 rounded-full"
                height={12}
                width={12}
              />
              <div className="ml-4">
                <h4 className="font-semibold">Emma Rodriguez</h4>
                <p className="text-muted-foreground text-sm">Author</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              &quot;Finally found a journaling app that matches my workflow
              perfectly. The AI insights are incredibly helpful.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
