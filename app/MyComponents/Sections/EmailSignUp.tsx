import { Input } from "@/components/ui/input";       // Aceternity UI (copied)
import { Card, CardContent } from "@/components/ui/card"; // ShadCN
import { MailIcon } from "lucide-react";             // Lucide
import Btn from "../Btn";

export default function NewsletterSection() {
  return (
    <section
      className="w-full text-white bg-[url('/mobile-newsletter-bg-img.jpg')] md:bg-[url('/newsletter-bg-img.jpg')] bg-no-repeat bg-center bg-cover relative"
    >
      {/* Overlay for mobile opacity */}
      <div className="hidden absolute inset-0 bg-black opacity-40 pointer-events-none sm:hidden mobile-bg-overlay"></div>
      <div className="text-center relative z-10">
        <Card className={"border-none rounded-none bg-transparent"}>
          <CardContent className="p-8">
            <div className="flex flex-col items-center space-y-4">
              <MailIcon className="h-10 w-10 text-indigo-600" />
              <h2 className="text-3xl text-[#16610E] font-bold">WE 🔔Notify you When It Drops</h2>
              <p className="text-gray-600 max-w-md">
                Be the first to know about new drops, exclusive deals, and fresh sticker designs. No spam, just pure sticker joy.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-[3px] border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
                <Btn value="Submit" type="submit" ></Btn>
              </form>
              <span className="text-sm text-shadow-white pt-2">
                We respect your privacy. Unsubscribe anytime.
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
