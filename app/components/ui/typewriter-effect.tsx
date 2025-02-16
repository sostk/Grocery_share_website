"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../../lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const animateWords = () => {
      if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex].text;
        if (currentCharIndex < currentWord.length) {
          setDisplayedWords(prev => {
            const newWords = [...prev];
            if (!newWords[currentWordIndex]) {
              newWords[currentWordIndex] = '';
            }
            newWords[currentWordIndex] += currentWord[currentCharIndex];
            return newWords;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setCurrentWordIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      }
    };

    const timer = setTimeout(animateWords, 100);
    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharIndex, words]);

  useEffect(() => {
    if (isInView) {
      const sequence = words.map((_, i) => [
        `[data-word="${i}"]`,
        { opacity: 1, y: 0 },
        { duration: 0.3 }
      ]);
      animate(sequence as any);
    }
  }, [isInView, animate, words]);

  return (
    <div ref={scope} className={cn("flex flex-wrap justify-center gap-2", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          data-word={idx}
          initial={{ opacity: 0, y: 10 }}
          className={cn(
            "text-4xl md:text-5xl font-bold",
            word.className
          )}
        >
          {displayedWords[idx] || ''}
          {idx < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
      {currentWordIndex === words.length && (
        <span className={cn("text-4xl md:text-5xl", cursorClassName)}>
          |
        </span>
      )}
    </div>
  );
}; 