import type { ReactNode } from "react";

type CardFondoProps={
  children: ReactNode;
  className?: string;
}

export default function CardFond({ children, className}:CardFondoProps) {
  return (
    <div className={`bg-[rgba(0,0,0,0.27)] my-5 ${className ?? ""}`}>
      {children}
    </div>
)
}
