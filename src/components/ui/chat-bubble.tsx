"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  variant?: "sent" | "received"
  className?: string
  children: React.ReactNode
}

export function ChatBubble({
  variant = "received",
  className,
  children,
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 mb-4",
        variant === "sent" && "flex-row-reverse",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface ChatBubbleMessageProps {
  variant?: "sent" | "received"
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

export function ChatBubbleMessage({
  variant = "received",
  isLoading,
  className,
  children,
}: ChatBubbleMessageProps) {
  return (
    <div
      className={cn(
        "rounded-2xl px-4 py-3 max-w-xs lg:max-w-md relative",
        variant === "sent" 
          ? "bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-lg border border-primary-700" 
          : "bg-secondary-800 border border-primary-600 text-white shadow-lg",
        "transform transition-all duration-200 hover:scale-[1.02]",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-sm text-secondary-500">Thinking...</span>
        </div>
      ) : (
        <div className="text-sm leading-relaxed">{children}</div>
      )}
      
      {/* Message tail */}
      <div className={cn(
        "absolute top-3 w-0 h-0",
        variant === "sent" 
          ? "right-[-6px] border-l-[6px] border-l-primary-700 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"
          : "left-[-6px] border-r-[6px] border-r-secondary-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"
      )} />
    </div>
  )
}

interface ChatBubbleAvatarProps {
  fallback?: string
  className?: string
  emoji?: string
}

export function ChatBubbleAvatar({
  fallback = "AI",
  emoji,
  className,
}: ChatBubbleAvatarProps) {
  return (
    <div className={cn(
      "w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold shrink-0",
      "bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md",
      className
    )}>
      {emoji || fallback}
    </div>
  )
} 