import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Peel Off Logo" width={40} height={40} />
            <span className="text-2xl font-bold tracking-wide">Peel Off</span>
          </div>
          <p className="text-sm text-gray-400">Stickers That Speak You.</p>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:support@peeloff.com">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link>
          <Link href="/stickers" className="text-sm text-gray-400 hover:text-white">Shop Stickers</Link>
          <Link href="/custom" className="text-sm text-gray-400 hover:text-white">Custom Orders</Link>
          <Link href="/faq" className="text-sm text-gray-400 hover:text-white">FAQs</Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/returns" className="text-sm text-gray-400 hover:text-white">Returns & Refunds</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold">Join Our Club</h4>
          <p className="text-sm text-gray-400">Subscribe for updates, deals, and drops.</p>
          <div className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white text-black placeholder-gray-500"
            />
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
              Join
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>Made with 💙 by Team Peel Off</p>
        <p className="mt-1">© 2025 Peel Off. All rights reserved.</p>
      </div>
    </footer>
  );
}
