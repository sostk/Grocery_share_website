"use client";
import { cn } from "../../../lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const beams = beamsRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      beams.style.setProperty("--x", `${x}px`);
      beams.style.setProperty("--y", `${y}px`);
    };

    beams.addEventListener("mousemove", handleMouseMove);
    return () => beams.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden [--x:0px] [--y:0px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
}; 