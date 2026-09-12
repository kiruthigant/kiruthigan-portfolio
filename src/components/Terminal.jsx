import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Terminal({ command = "whoami", lines = [] }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [commandText, setCommandText] = useState("");

  useEffect(() => {
    // Reset state when component remounts or props change
    setDisplayedLines([]);
    setCommandText("");
    setIsTyping(true);

    let timeoutId;
    let lineInterval;

    let typeIndex = 0;
    const typeInterval = setInterval(() => {
      if (typeIndex <= command.length) {
        setCommandText(command.slice(0, typeIndex));
        typeIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        // Show output lines after typing finishes
        timeoutId = setTimeout(() => {
          let lineIndex = 0;
          lineInterval = setInterval(() => {
            if (lineIndex < (lines?.length || 0)) {
              setDisplayedLines((prev) => {
                // Prevent duplicate additions in strict mode by checking length
                if (prev.length === lineIndex) {
                  return [...prev, lines[lineIndex]];
                }
                return prev;
              });
              lineIndex++;
            } else {
              clearInterval(lineInterval);
            }
          }, 300); // 300ms between lines
        }, 400); // Wait slightly after typing finishes
      }
    }, 100); // 100ms typing speed

    return () => {
      clearInterval(typeInterval);
      clearTimeout(timeoutId);
      clearInterval(lineInterval);
    };
  }, [command, lines]);

  return (
    <div className="w-full max-w-lg rounded-md overflow-hidden border border-portfolio-border bg-portfolio-surface shadow-2xl font-mono text-sm sm:text-base">
      <div className="flex items-center px-4 py-2 bg-portfolio-surface-light border-b border-portfolio-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-portfolio-text-muted text-xs opacity-70">bash - kiruthigan@portfolio</div>
      </div>
      <div className="p-4 sm:p-6 text-portfolio-text h-48 overflow-y-auto custom-scrollbar">
        <div className="flex items-start">
          <span className="text-green-400 mr-2 shrink-0">kiruthigan@portfolio:~$</span>
          <span className="text-white break-all">
            {commandText}
            {isTyping && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-white align-middle ml-1"></motion.span>}
          </span>
        </div>
        {!isTyping && (
          <div className="mt-2 space-y-1">
            {displayedLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${line && line.startsWith('>') ? 'text-portfolio-accent' : 'text-portfolio-text-muted'} break-words`}
              >
                {line}
              </motion.div>
            ))}
            {displayedLines.length === (lines?.length || 0) && (
              <div className="flex items-center mt-2">
                <span className="text-green-400 mr-2 shrink-0">kiruthigan@portfolio:~$</span>
                <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-white align-middle"></motion.span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}