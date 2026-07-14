import { useEffect, useState } from "react";

function useTyping(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, letterIndex));

      if (!isDeleting) {
        if (letterIndex < currentWord.length) {
          setLetterIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 3000);
        }
      } else {
        if (letterIndex > 0) {
          setLetterIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [letterIndex, wordIndex, words]);

  return text;
}

export default useTyping;