"use client";

import { Button } from "@lumina/ui";
import { OverlayWrapper } from "@lumina/ui";
import { Popover, PopoverArrow } from "@lumina/ui";

export default function PopoverPreview() {
  return (
    <OverlayWrapper>
      <Button appearance="outline">Open Popover</Button>

      <Popover>
        <h2 className="text-lg font-semibold">Popover Title</h2>
        <p className="text-sm text-muted-foreground">
          This is a popover with heading and description.
        </p>
        <PopoverArrow />
      </Popover>
    </OverlayWrapper>
  );
}
