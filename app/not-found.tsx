"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <Image
          src="/404img.png"
          alt="404 Not Found"
          width={300}
          height={300}
          className="mb-6"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold text-gray-800"
        >
          Oops! Page Not Found
        </motion.h1>
        <p className="text-gray-500 max-w-md">
          Looks like you took a wrong turn. The page you're looking for doesnt exist or has been moved.
        </p>
        <Link href="/">
          <Button className="mt-4">Go Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
