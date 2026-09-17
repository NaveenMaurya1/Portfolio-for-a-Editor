'use client';

import { useEffect, useState } from 'react';

export default function TypewriterEffect({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1500,
  className = '',
  cursor = true,
  cursorChar = '|',
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];

    let timeout;

    // -------------------------
    // Typing
    // -------------------------
    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentWord.slice(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    // -------------------------
    // Finished typing
    // -------------------------
    else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    // -------------------------
    // Deleting
    // -------------------------
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentWord.slice(0, displayText.length - 1)
        );
      }, deletingSpeed);
    }

    // -------------------------
    // Finished deleting
    // -------------------------
    else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);

      setWordIndex((prev) => {
        return (prev + 1) % words.length;
      });
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {displayText}

      {cursor && (
        <span className="ml-1 text-amber-600 animate-pulse">
          {cursorChar}
        </span>
      )}
    </span>
  );
}
