"use client";

import { AlertDialog } from "@lumina/ui";
import { Button } from "@lumina/ui";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@lumina/ui";
import { OverlayWrapper } from "@lumina/ui";

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
