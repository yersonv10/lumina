"use client";

import { Button } from "@lumina/ui/core/button";
import { OverlayWrapper } from "@lumina/ui/core/overlay";
import { Popover, PopoverArrow } from "@lumina/ui/core/popover";
import { Trash1 } from "@lumina/icons";

export default function PopoverActionsPreview() {
  return (
    <OverlayWrapper>
      <Button variant="primary">Item Actions</Button>
      <Popover className="min-w-64">
        <PopoverArrow />
        <h3 className="text-sm font-semibold text-title-50">
          Manage this item
        </h3>
        <p className="mt-1 text-xs text-text-100">
          Choose an action to perform on the selected record.
        </p>

        <div className="mt-6 flex items-center justify-end gap-2">
          <Button size="sm" appearance="outline" className="text-text-100">
            Cancel
          </Button>
          <Button size="sm" variant="danger">
            <Trash1 size={16} />
            Delete
          </Button>
        </div>
      </Popover>
    </OverlayWrapper>
  );
}
