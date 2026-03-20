"use client";

import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, MessageSquareIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { DecorIcon } from "@/components/ui/decor-icon";
import { toast } from "sonner";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0.1px)',
            y: 0,
            transition: {
                y: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
                opacity: { duration: 0.5 },
                filter: { duration: 0.5, ease: 'easeOut' as const },
            },
        },
    },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      toast.error("Required Fields Missing", { description: "Please ensure all fields are filled out." });
      return;
    }

    if (!nameRegex.test(formData.firstName.trim())) {
      toast.error("Invalid First Name", { description: "Name must only contain letters and spaces (no numbers or symbols)." });
      return;
    }

    if (!nameRegex.test(formData.lastName.trim())) {
      toast.error("Invalid Last Name", { description: "Name must only contain letters and spaces (no numbers or symbols)." });
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Invalid Email", { description: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!", { description: "Our team will be in touch with you shortly." });
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      } else {
        toast.error("Submission Failed", { description: "There was an issue sending your message. Please try again." });
      }
    } catch (error) {
      console.error(error);
      toast.error("Network Error", { description: "Please check your internet connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden min-h-screen pt-24 md:pt-32 lg:pt-40 pb-20">
      
        <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)] pointer-events-none"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                <AnimatedGroup variants={transitionVariants}>
                    <div className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-3 rounded-full border-2 px-4 py-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 mb-8 cursor-pointer">
                        <span className="text-foreground text-xs md:text-sm font-semibold font-inter">24/7 Support Available</span>
                        <span className="dark:border-background block h-4 w-px bg-zinc-300 dark:bg-zinc-700"></span>
                        {/* <span className="text-muted-foreground text-xs md:text-sm font-medium font-inter">Fast Response</span> */}
                        
                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500 ml-1">
                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                <span className="flex size-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right m-auto size-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </span>
                                <span className="flex size-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right m-auto size-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </AnimatedGroup>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="span"
                    >
                        Let&apos;s Talk
                    </TextEffect>
                </h1>
                <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.3}
                    as="p"
                    className="text-lg md:text-xl text-muted-foreground opacity-90 font-inter font-medium max-w-2xl mx-auto">
                    Have a project in mind or need help with your current SEO strategy? 
                    Reach out and let&apos;s make it happen.
                </TextEffect>
            </div>

            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.8,
                            },
                        },
                    },
                    ...transitionVariants,
                }}
                className="flex w-full justify-center"
            >
                {/* CTA-Style Card Wrapper */}
                <div className="relative mx-auto flex w-full max-w-5xl flex-col group isolate overflow-hidden mt-8 mb-8">
                    
                    {/* BASE STRUCTURAL GRID (2px continuous lines) */}
                    <div className="absolute inset-0 border-y-2 border-border/40 pointer-events-none transition-colors duration-700 group-hover:border-primary/20" />
                    <div className="absolute -inset-y-16 left-0 w-[2px] bg-border/40 pointer-events-none transition-colors duration-700 group-hover:bg-primary/20" />
                    <div className="absolute -inset-y-16 right-0 w-[2px] bg-border/40 pointer-events-none transition-colors duration-700 group-hover:bg-primary/20" />

                    {/* PREMIUM "LASER" TRACE ARRAYS (Only appear on hover, ultra-smooth) */}
                    {/* Top laser */}
                    <div className="absolute top-[-1px] inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[traceRight_4s_ease-in-out_infinite]" />
                    </div>
                    {/* Bottom laser */}
                    <div className="absolute bottom-[-1px] inset-x-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[traceLeft_4s_ease-in-out_infinite_1s]" />
                    </div>
                    
                    {/* Left laser */}
                    <div className="absolute inset-y-0 left-[-1px] w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
                        <div className="h-1/2 w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[traceDown_5s_ease-in-out_infinite_0.5s]" />
                    </div>
                    {/* Right laser */}
                    <div className="absolute inset-y-0 right-[-1px] w-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden blur-[2px] pointer-events-none">
                        <div className="h-1/2 w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[traceUp_5s_ease-in-out_infinite_1.5s]" />
                    </div>

                    {/* Structural corners */}
                    <DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute top-[-12px] left-[-12px]" position="top-left" />
                    <DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute top-[-12px] right-[-12px]" position="top-right" />
                    <DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute bottom-[-12px] left-[-12px]" position="bottom-left" />
                    <DecorIcon className="size-6 text-primary/30 group-hover:text-primary transition-all duration-700 absolute bottom-[-12px] right-[-12px]" position="bottom-right" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 w-full relative z-10 min-h-[600px]">
                        
                        {/* Left Info Section */}
                        <div className="col-span-1 lg:col-span-2 flex flex-col justify-between p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border/40 relative overflow-hidden">
                            {/* Ambient glow for left side */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ WebkitFilter: 'blur(60px)', WebkitTransform: 'translateZ(0)' }} />

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Contact info</h2>
                                    <p className="text-muted-foreground text-base leading-relaxed max-w-sm font-inter">
                                        Our team of SEO experts is ready to provide you with the best solutions. Reach out today.
                                    </p>
                                </div>
                                
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-4 p-4 rounded-md hover:bg-card/50 transition-colors border-2 border-transparent hover:border-border/50">
                                        <div className="flex-shrink-0 mt-1 size-10 rounded-md bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                            <MailIcon className="size-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm font-inter">Email Us</p>
                                            <p className="text-muted-foreground text-sm mt-1">hello@seospeeder.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-4 rounded-md hover:bg-card/50 transition-colors border-2 border-transparent hover:border-border/50">
                                        <div className="flex-shrink-0 mt-1 size-10 rounded-md bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                            <PhoneIcon className="size-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm font-inter">Call Us</p>
                                            <p className="text-muted-foreground text-sm mt-1">+1 (800) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-md hover:bg-card/50 transition-colors border-2 border-transparent hover:border-border/50">
                                        <div className="flex-shrink-0 mt-1 size-10 rounded-md bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                            <MapPinIcon className="size-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm font-inter">Headquarters</p>
                                            <p className="text-muted-foreground text-sm mt-1">123 SEO Avenue<br/>New York, NY 10012</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Section */}
                        <div className="col-span-1 lg:col-span-3 p-8 md:p-12 lg:p-16 relative">
                            <form onSubmit={handleSubmit} className="w-full space-y-6 relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2.5 rounded-md bg-primary/10 border-2 border-primary/20">
                                        <MessageSquareIcon className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-semibold tracking-tight">Send a message</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2.5 group/field">
                                        <Label className="text-sm font-semibold font-inter group-focus-within/field:text-primary transition-colors">First Name</Label>
                                        <Input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" placeholder="John" className="rounded-md border-2 h-12 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 transition-all duration-300" />
                                    </div>
                                    <div className="flex flex-col gap-2.5 group/field">
                                        <Label className="text-sm font-semibold font-inter group-focus-within/field:text-primary transition-colors">Last Name</Label>
                                        <Input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" placeholder="Doe" className="rounded-md border-2 h-12 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 transition-all duration-300" />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-2.5 group/field">
                                    <Label className="text-sm font-semibold font-inter group-focus-within/field:text-primary transition-colors">Email Address</Label>
                                    <Input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="rounded-md border-2 h-12 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 transition-all duration-300" />
                                </div>
                                
                                <div className="flex flex-col gap-2.5 group/field">
                                    <Label className="text-sm font-semibold font-inter group-focus-within/field:text-primary transition-colors">Company</Label>
                                    <Input name="company" value={formData.company} onChange={handleChange} required type="text" placeholder="Your Company Ltd." className="rounded-md border-2 h-12 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 transition-all duration-300" />
                                </div>
                                
                                <div className="flex flex-col gap-2.5 group/field">
                                    <Label className="text-sm font-semibold font-inter group-focus-within/field:text-primary transition-colors">How can we help?</Label>
                                    <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project or inquiry..." className="min-h-[140px] rounded-md border-2 resize-none bg-background/50 backdrop-blur-sm p-4 border-border/50 hover:border-primary/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/20 transition-all duration-300" />
                                </div>
                                
                                <div className="pt-2">
                                    <Button size="lg" disabled={isSubmitting} className="group/btn w-full rounded-xl text-base font-bold font-inter bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>Sending <Loader2 className="size-4 animate-spin" /></>
                                            ) : (
                                                <>Send Message <SendIcon className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" /></>
                                            )}
                                        </span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes traceRight {
                            0% { transform: translateX(-100%); }
                            50% { transform: translateX(200%); }
                            100% { transform: translateX(-100%); }
                        }
                        @keyframes traceLeft {
                            0% { transform: translateX(200%); }
                            50% { transform: translateX(-100%); }
                            100% { transform: translateX(200%); }
                        }
                        @keyframes traceDown {
                            0% { transform: translateY(-100%); }
                            50% { transform: translateY(200%); }
                            100% { transform: translateY(-100%); }
                        }
                        @keyframes traceUp {
                            0% { transform: translateY(200%); }
                            50% { transform: translateY(-100%); }
                            100% { transform: translateY(200%); }
                        }
                    `}} />
                </div>
            </AnimatedGroup>
        </div>
    </main>
  );
}
