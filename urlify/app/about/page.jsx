'use client'

import { useState } from 'react'
import { toast } from 'sonner' // if you want to show toast notifications (optional)
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-4xl mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">About FlyingDarkDev</TabsTrigger>
        <TabsTrigger value="password">Contact Admin</TabsTrigger>
      </TabsList>

      {/* ABOUT TAB */}
      <TabsContent value="account">
        <Card className="bg-background shadow-lg">
          <CardHeader>
          <div className="flex justify-center">
              <div className="w-[400px]">
                <AspectRatio ratio={16 / 5}>
                  <Image
                    src="https://raw.githubusercontent.com/notifyworld/logos/refs/heads/main/logo.png"
                    alt="FlyingDarkDev Visual"
                    className="rounded-xl object-cover shadow-md border"
                    width={800}
                    height={400}
                  />
                </AspectRatio>
              </div>
            </div>
            <CardTitle className="text-3xl">🚀 FlyingDarkDev</CardTitle>
            <CardDescription>
              Turning imagination into reality with modern tech and creativity.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-muted-foreground">
            <p>
              FlyingDarkDev, founded by Gaurav Yadav, is a fast-growing tech startup from India focused on building
              powerful digital products and open communities. We're driven by a vision to make the web more accessible,
              powerful, and collaborative.
            </p>
            <p>
              Our team builds platforms, games, and tools that merge design, technology, and imagination. Whether it's
              crafting modern user experiences, deploying scalable systems, or engineering immersive games — we do it
              all with unmatched dedication.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>🌐 <strong>Web Platforms:</strong> Urlify (URL Shortener + Analytics), Darkify (Social Platform)</li>
              <li>🎮 <strong>Upcoming Games:</strong> Ananta sanatanam (Action-Fantasy Game), FlyingDark 3D Game</li>
              <li>🎮 <strong>Games:</strong> Soar (Action-Fantasy Game), FlyingDark 3D Game</li>
              <li>🧠 <strong>AI:</strong> Flyingdarkdev-AI, experiments in integrating AI in daily tools</li>
              <li>🔗 <strong>Community:</strong> Fox – A creator-first community and collaboration platform</li>
              <li>📚 <strong>Ongoing:</strong> Ananta Sanatanam (Cultural/Spiritual project in development)</li>
            </ul>
            <p>
              We're using tools like React, Next.js 14, TailwindCSS, ShadCN UI, MongoDB with Mongoose, Three.js,
              and Blender to bring our vision to life. Clean design, accessibility, performance, and user-first thinking
              are our core principles.
            </p>
            <p>
              <strong>Why dark?</strong> Our signature dark-themed UIs reflect not just our aesthetic, but our bold approach
              to technology. We believe dark themes enhance user focus, reduce strain, and feel modern.
            </p>

            

            <div className="pt-6 text-sm text-center text-muted-foreground">
              🌐 <a href="https://flyingdarkdev.in" className="underline">Visit flyingdarkdev.in</a> &nbsp;|&nbsp;
              💻 <a href="https://github.com/FlyingDarkDev" className="underline">GitHub</a> &nbsp;|&nbsp;
              📬 Contact: flyingdarkdev@gmail.com
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* CONTACT TAB */}
      <TabsContent value="password">
  <Card>
    <CardHeader>
      <CardTitle>Contact Admin</CardTitle>
      <CardDescription>
        Send your message directly to FlyingDarkDev's admin.
      </CardDescription>
    </CardHeader>

    <form
      onSubmit={async (e) => {
        e.preventDefault()

        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          occupation: e.target.occupation.value,
          service: e.target.service.value,
          message: e.target.message.value,
        }

        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (res.ok) {
          toast.success('Message sent to admin ✅')
          e.target.reset()
        } else {
          toast.error('Failed to send message ❌')
        }
      }}
    >
      <CardContent className="space-y-4">
        {/* Name */}
        <div className="space-y-1">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Occupation */}
        <div className="space-y-1">
          <Label htmlFor="occupation">Occupation</Label>
          <select
            id="occupation"
            name="occupation"
            className="w-full border p-2 rounded-md"
            required
          >
            <option value="">Select occupation</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="student">Student</option>
            <option value="freelancer">Freelancer</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Service */}
        <div className="space-y-1">
          <Label htmlFor="service">Service Required</Label>
          <select
            id="service"
            name="service"
            className="w-full border p-2 rounded-md"
            required
          >
            <option value="">Choose a service</option>
            <option value="web-app">Web App</option>
            <option value="game-dev">Game Development</option>
            <option value="ai">AI Integration</option>
            <option value="design">UI/UX Design</option>
            <option value="consulting">Consulting</option>
            <option value="subscribe">Subscribe</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            className="w-full h-28 p-2 border rounded-md resize-none"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit">Send Message</Button>
      </CardFooter>
    </form>
  </Card>
</TabsContent>
    </Tabs>
  )
}

export default function AboutPage() {
  return <TabsDemo />
}