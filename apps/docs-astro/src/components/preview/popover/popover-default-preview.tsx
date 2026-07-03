"use client";

import { Button } from "@lumina-kit/ui";
import { OverlayWrapper } from "@lumina-kit/ui";
import { Popover, PopoverArrow } from "@lumina-kit/ui";

export default function PopoverDefaultPreview() {
  return (
    <OverlayWrapper>
      <Button appearance="outline">Open Popover</Button>
      <Popover className="max-w-xs">
        <h2 className="text-base font-semibold text-title-50">Heads up!</h2>
        <p className="mt-1 text-sm text-text-100">
          Popovers are great for showing small bits of context without
          navigating away from the current page.
        </p>
        <PopoverArrow />
      </Popover>
    </OverlayWrapper>
  );
}
