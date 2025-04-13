import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import IfLoggedInElse from "../helpers/ifLoggedInElse";

export default function Pricing() {
    const pricing_features_free = [
    {
        title: "Unlimited links",
        description: "Up to 200 links per month",
    },
    {
        title: "Detailed stats",
        description: "Track analytics for each link",
    },
    {
        title: "Link controls",
        description: "Disable or pause any link",
    },
];

const pricing_features_coming = [
    {
        title: "Click-based marketing",
        description: "Turn link clicks into engagement",
    },
    {
        title: "Campaign insights",
        description: "Track conversions and sources",
    },
    {
        title: "Custom branding",
        description: "Add your brand to short links",
    },
];

return (
    <section className="px-6 md:px-20 lg:px-32 mt-24 mb-24">
        <div className="grid gap-2">
            <h3 className="text-3xl font-medium lg:text-5xl sm:text-center">
                Pricing <span className="underline underline-offset-[5px] decoration-blue-400">&</span> Plans
            </h3>
            <p className="text-muted-foreground mx-auto md:text-lg text-base sm:text-base sm:text-center max-w-md">
                No subscription needed. Use it for free — or support us with a donation if you'd like.
            </p>
        </div>

        <div className="mt-7 grid sm:grid-cols-2 gap-3 sm:place-content-center sm:w-fit sm:mx-auto">
            {/* Free Plan */}
            <Card className="sm:max-w-[300px]">
                <CardHeader>
                    <CardTitle className="text-xl -mb-1 font-normal">Free Plan</CardTitle>
                    <CardDescription>100% Free. No hidden charges.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {pricing_features_free.map((feature, index) => (
                        <div
                            key={index}
                            className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-blue-400" />
                            <div className="space-y-1">
                                <p className="text-sm leading-none">{feature.title}</p>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <IfLoggedInElse
                        ifNot={
                            <Link href="/sign-up" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                                Get Started
                            </Link>
                        }
                        ifUser={
                            <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                                Go to Dashboard
                            </Link>
                        }
                    />
                </CardFooter>
            </Card>

            {/* Coming Soon Plan */}
            <Card className="sm:max-w-[300px]">
                <CardHeader>
                    <CardTitle className="text-xl -mb-1 font-normal">Coming Soon</CardTitle>
                    <CardDescription>Pro features on the way!</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {pricing_features_coming.map((feature, index) => (
                        <div
                            key={index}
                            className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-gray-400" />
                            <div className="space-y-1">
                                <p className="text-sm leading-none">{feature.title}</p>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <Link href="/about" className={cn(buttonVariants({ variant: "default" }), "w-full")}>
                        Notify Me
                    </Link>
                </CardFooter>
            </Card>
            </div>
        </section>
    )
};