"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@lumina-kit/ui";
import { Sparkle } from "@lumina-kit/icons";

export default function AlertCustomIconPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert status="success">
        <AlertIndicator>
          <Sparkle />
        </AlertIndicator>

        <AlertContent>
          <AlertTitle>New features available</AlertTitle>
          <AlertDescription>
            We just shipped dark mode and keyboard shortcuts. Give them a try.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
