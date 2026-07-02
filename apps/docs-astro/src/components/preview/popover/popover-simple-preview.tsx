"use client";

import { Button } from "@lumina/ui";
import { OverlayWrapper } from "@lumina/ui";
import { Popover } from "@lumina/ui";

export default function PopoverSimplePreview() {
  return (
    <OverlayWrapper>
      <Button variant="ghost" appearance="outline">
        Show Info
      </Button>
      <Popover className="min-w-64">
        <p className="text-sm text-text-100">
          A minimal popover with just a single line of text content.
        </p>
      </Popover>
    </OverlayWrapper>
  );
}