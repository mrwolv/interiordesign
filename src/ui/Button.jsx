import React from "react";
import cn from "../lib/utils/cn";
import { Send } from "lucide-react";

export default function Button({
  children,
  colored,
  className,
  onClick,
  icon,
}) {
  return (
    <button
      className={cn(className, "button", {
        colorButton: colored,
      })}
      onClick={onClick}
    >
      <div className="z-10 flex items-center justify-between gap-x-2 ">
        {icon && (
          <span className="mr-2 z-10 rotate-icon ">
            <Send />
          </span>
        )}
        <span className="z-10">{children}</span>
      </div>
    </button>
  );
}
