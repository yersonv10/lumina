"use client";

import { AlertDialog } from "@lumina/ui/core/alert-dialog";
import { Button } from "@lumina/ui/core/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@lumina/ui/core/dialog";
import { OverlayWrapper } from "@lumina/ui/core/overlay";

export default function AlertDialogPreview() {
  return (
    <OverlayWrapper>
      <Button>Open Alert Dialog</Button>

      <AlertDialog>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose appearance="outline">Cancel</DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </AlertDialog>
    </OverlayWrapper>
  );
}
