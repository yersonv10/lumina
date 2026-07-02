"use client";

import { Button } from "@lumina/ui";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@lumina/ui";
import { Backdrop } from "@lumina/ui";
import { useState } from "react";

export default function ControlledOverlayWithBackdropPreview() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Delete Account
      </Button>

      <Backdrop isOpen={showModal} onOpenChange={setShowModal}>
        <Dialog>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove all of your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-2">
            <DialogClose autoFocus appearance="outline" size="sm">
              Cancel
            </DialogClose>
            <Button variant="danger" size="sm">
              Yes, Delete Account
            </Button>
          </DialogFooter>
        </Dialog>
      </Backdrop>
    </div>
  );
}
