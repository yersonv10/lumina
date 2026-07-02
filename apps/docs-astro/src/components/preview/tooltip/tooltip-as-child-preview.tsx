"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@lumina/ui";

export default function TooltipAsChildPreview() {
  return (
    <div className="w-full max-w-lg mx-auto flex items-center justify-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="#"
            className="font-semibold text-button-primary-background hover:underline"
          >
            View Details
          </a>
        </TooltipTrigger>
        <TooltipContent>Click to see the full report.</TooltipContent>
      </Tooltip>
    </div>
  );
}
