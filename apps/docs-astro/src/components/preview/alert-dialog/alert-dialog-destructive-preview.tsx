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

export default function AlertDialogDestructivePreview() {
  return (
    <OverlayWrapper>
      <Button variant="danger">Delete Account</Button>

      <AlertDialog>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action is
            permanent and all your data will be lost.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose appearance="outline" autoFocus>
            Cancel
          </DialogClose>
          <Button variant="danger" size="sm">
            Delete
          </Button>
        </DialogFooter>
      </AlertDialog>
    </OverlayWrapper>
  );
}
