"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@lumina/ui/core/alert";

export function AlertPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert status="success">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
