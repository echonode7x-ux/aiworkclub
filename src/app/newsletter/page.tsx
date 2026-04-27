"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-32 text-center max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Stay Ahead with AI</h1>
      <p className="text-xl text-muted-foreground mb-12">
        每周分享最实用的 AI 工作流、工具评测和行业案例。加入 5,000+ 创作者和业务负责人。
      </p>
      
      {status === "success" ? (
        <div className="bg-primary/10 text-primary p-6 rounded-xl font-medium border border-primary/20">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
            required
            disabled={status === "loading"}
          />
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Now"}
          </button>
          {status === "error" && (
            <p className="text-destructive text-sm font-medium mt-2">{message}</p>
          )}
        </form>
      )}
      <p className="mt-6 text-sm text-muted-foreground">
        No spam, just value. Unsubscribe at any time.
      </p>
    </div>
  );
}
