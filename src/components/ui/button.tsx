"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97]",
  {
    variants: {
      variant: {
        // Degradado firma azul→rojo con elevación — CTA principal del rediseño
        brand:
          "bg-brand-gradient bg-[length:200%_200%] text-white shadow-brand hover:bg-[position:100%_50%] hover:-translate-y-0.5",
        default:
          "bg-primary text-primary-foreground shadow-brand-soft hover:bg-blue-dark hover:-translate-y-0.5",
        // Rojo urgente (llamar / emergencia)
        urgent:
          "bg-red-accent text-white shadow-brand-red hover:bg-red-accent-dark hover:-translate-y-0.5",
        accent:
          "bg-yellow-accent text-slate-dark shadow-brand-soft hover:bg-yellow-accent-dark hover:-translate-y-0.5",
        // Verde de marca WhatsApp (solo botones de chat)
        whatsapp:
          "bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:bg-whatsapp-dark hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-blue-primary/30 bg-white/70 text-blue-primary backdrop-blur-sm hover:border-blue-primary hover:bg-blue-primary hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-base",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-xs": "size-6 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
