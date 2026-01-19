import React from "react";
import { Link } from "wouter";

export function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <Link href="/">
      <a className={`flex items-center gap-2 group cursor-pointer ${className}`}>
        <img src="/images/logo.png" alt="4x6Labels" className="h-20 w-auto" />
      </a>
    </Link>
  );
}
