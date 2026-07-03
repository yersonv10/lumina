"use client";

import { Button } from "@lumina-kit/ui";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@lumina-kit/ui";
import { useState } from "react";

export default function DialogControlledPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-100 w-full items-center justify-center p-10 dark:bg-black/20">
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogHeader>
          <DialogTitle>Unlock Pro Insights</DialogTitle>
          <DialogDescription>
            Join 10,000+ businesses using our Pro tools to scale.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
