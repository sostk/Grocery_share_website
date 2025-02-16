"use client";
import { cn } from "../../../lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (animate) {
      setOpacity(1);
      setSize(1);
    }
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex items-center justify-center group",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl transition duration-500 group-hover:opacity-100 blur-xl",
          className
        )}
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, var(--primary) 0%, transparent 70%)`,
          opacity,
          transform: `scale(${size})`,
        }}
      />
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
}; 