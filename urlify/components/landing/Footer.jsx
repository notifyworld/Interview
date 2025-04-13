"use client";

import React, { useState } from "react";
import { Gauge, Globe, Github, Mail } from "lucide-react";
import { ModeToggle } from "../modetoggle";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner";


export default function Footer() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSend = async () => {
      if (!email || !message) {
        toast.error("Please fill out both fields");
        return;
      }
  
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            subject: "Urlify Notification",
            message,
          }),
        });
  
        const data = await res.json();
  
        if (data.success) {
          toast.success("Email sent successfully!");
          setname("");
          setEmail("");
          setMessage("");
        } else {
          toast.error("Failed to send email");
          console.error(data.error);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.error(err);
      }
    };
  
    return (
        <footer className="px-6 md:px-20 lg:px-32 py-10 text-center grid place-content-center">
            <div className="grid gap-2 place-items-center">
                <span><Gauge className="h-5 w-5" /></span>
                <h3 className="text-lg -mb-1 -mt-2">Urlify</h3>
            </div>
        <Popover>
           <PopoverTrigger asChild>
              <Button>Contribute</Button>
           </PopoverTrigger>
           <PopoverContent className="w-80">
               <div className="grid gap-4">
              <div className="space-y-2">
              <h4 className="font-medium leading-none">🛠️ Contribution</h4>
        <p className="text-sm text-muted-foreground">
        Support the evolution of Urlify by sharing your skills, ideas, or even a kind word. Every contribution adds value — from code improvements to creative input.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium leading-none">🌐 Connect</h4>
        <p className="text-sm text-muted-foreground">
        Urlify is built by FlyingDarkDev — a vision-driven community shaping the future of the web. Join the journey, explore the mission, and be part of something impactful.
        </p>
      </div>
            <div className="mt-2 grid grid-cols-2 gap-3 items-center justify-center text-sm">
                <Link href="https://flyingdarkdev.in/" className="underline underline-offset-[5px] decoration-blue-400"><Globe size={16} />Website</Link>
                <Link href="https://github.com/gauravyad12/" className="underline underline-offset-[5px] decoration-blue-400"><Github size={16} />Github</Link>
                <Link href="https://github.com/gauravyad12/" className="underline underline-offset-[5px] decoration-blue-400"><Github size={16} />Github</Link>
                <Link href="mailto:flyingdarkdev@gmail.com"className="underline underline-offset-[5px] decoration-blue-400"><Mail size={16} />Email</Link>
                 </div>
               </div>
           </PopoverContent>
        </Popover>
        {/* Dialog for Notify Me */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Subscribe</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogDescription>
              Enter your email to subscribe. Click Send when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="emailid" className="text-right">
                Email Id
              </Label>
              <Input
                id="emailid"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSend}>
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
            <div className="mt-4">
                <ModeToggle />
            </div>
        </footer>
    )
};