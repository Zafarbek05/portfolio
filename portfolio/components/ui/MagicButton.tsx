import React from "react";

export default function MagicButton({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  text: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    // Button code
    <button className={`relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-0 gap-3 ${otherClasses}`}>
      {position === "left" && icon}
      {text}
      {position === "right" && icon}
    </button>
  );
}
