import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Review() {
    return (
        <section className="px-6 md:px-20 lg:px-32 mb-16 max-w-5xl sm:mx-auto">
            <div className="sm:text-center mb-7 grid gap-2 max-w-xs md:max-w-lg sm:mx-auto lg:max-w-xl">
                <h2 className="text-3xl font-semibold lg:text-5xl sm:text-center">What our <span className="underline underline-offset-[5px] decoration-blue-400">customers</span> are <span className="underline underline-offset-[5px] decoration-blue-400">saying</span>?</h2>
                <p className="text-muted-foreground mx-auto text-base md:text-lg sm:text-center max-w-md">
                This is the kind of feedback we’d be thrilled to receive from our customers
                </p>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="max-w-sm">
                        <div className="bg-card shadow-xs py-4 px-4 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/gauravyad12.png" />
                                    <AvatarFallback>GY</AvatarFallback>
                                </Avatar>
                                <div className="grid !gap-0">
                                    <h2 className="text-lg font-normal">Gaurav Kumar Yadav</h2>
                                    <span className="-mt-1 text-sm text-muted-foreground">@gauravyad12</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-3 sm:text-base">A seamless and intuitive tool that makes link shortening effortless. With its clean interface and reliable performance, it's perfect for anyone looking to share neat, concise URLs in seconds. A must-have for efficient digital communication.</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="max-w-sm">
                        <div className="bg-card shadow-xs py-4 px-4 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/notifyworld.png" />
                                    <AvatarFallback>NW</AvatarFallback>
                                </Avatar>
                                <div className="grid !gap-0">
                                    <h2 className="text-lg font-normal">NotifyWorld</h2>
                                    <span className="-mt-1 text-sm text-muted-foreground">@notifyworld</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-3 sm:text-base">Speed and security come together in this powerful URL shortener. It generates links instantly and safeguards my data, making it ideal for both quick sharing and professional use. Reliable, efficient, and safe — everything I need in one tool.</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="max-w-sm">
                        <div className="bg-card shadow-xs py-4 px-4 rounded-lg border border-border">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/flyingdarkdev.png" />
                                    <AvatarFallback>FDD</AvatarFallback>
                                </Avatar>
                                <div className="grid !gap-0">
                                    <h2 className="text-lg font-normal">FlyingDarkDev</h2>
                                    <span className="-mt-1 text-sm text-muted-foreground">@flyingdarkdev</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-3 sm:text-base">This URL shortener is fast, reliable, and secure — delivering instant, hassle-free links while keeping my data protected. Whether for personal or business use, it’s a trustworthy tool that ensures smooth and safe digital communication every time.</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
};