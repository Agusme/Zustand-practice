import type { ReactNode } from "react";

type CardFondoProps={
  children: ReactNode;
  className?: string;
}

export default function CardFond({ children }:CardFondoProps) {
  return (
 <div className="bg-[rgba(0,0,0,0.27)] p-5 rounded-lg my-5">
      {children}
    </div>
)
}
