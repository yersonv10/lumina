"use client";

import { Button } from "@lumina/ui/core/button";
import { OverlayWrapper } from "@lumina/ui/core/overlay";
import { Popover } from "@lumina/ui/core/popover";

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