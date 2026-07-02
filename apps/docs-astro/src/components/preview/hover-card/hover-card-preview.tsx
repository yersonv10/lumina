"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@lumina/ui/core/hover-card";

export default function HoverCardPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-title-50">
        Hover Me
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="p-2">Hover Card Content</p>
      </HoverCardContent>
    </HoverCard>
  );
}
