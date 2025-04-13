import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Star } from "lucide-react";
import IfLoggedInElse from "../helpers/ifLoggedInElse";

export default function Hero() {

  return (
    <section className="py-14 px-6 md:px-20 lg:px-32">
      <div className="grid gap-2 sm:text-center sm:place-items-center sm:max-w-lg md:max-w-2xl sm:mx-auto lg:max-w-[900px]">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl">Urlify, powered by Next.js is  <span className="underline underline-offset-[5px] decoration-blue-400">an </span> open<span className="underline underline-offset-[5px] decoration-blue-400"> -source project.</span></h1>
        <p className="text-muted-foreground mt-2 md:text-lg text-base max-w-2xl">Urlify is an advanced URL shortener built with Next.js 14, ShadCN/UI, and MongoDB (via Mongoose). It not only shortens links but also provides detailed analytics on link clicks, giving you valuable insights into your traffic. With a sleek, modern design and powerful backend, Urlify is perfect for those who need both simplicity and data-driven performance.</p>
        <div className="flex items-center sm:justify-center flex-wrap gap-3 mt-3">
          <IfLoggedInElse ifNot={
            <Link href="/sign-up" className={buttonVariants({ variant: "outline" })}>Get Started</Link>
          } ifUser={
            <Link href="/dashboard" className={buttonVariants({ variant: "outline" })}>Dashboard</Link>
          } />
          <Link href="https://github.com/gauravyad12" className={cn(buttonVariants({ variant: "default" }), "flex items-center gap-1")}><Star className="h-3.5 w-3.5" />Star on Github</Link>
        </div>
      </div>
    </section>
  )
};
