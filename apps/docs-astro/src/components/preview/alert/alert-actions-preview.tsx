"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle
} from "@lumina/ui/core/alert";
import { Button } from "@lumina/ui/core/button";
export default function AlertActionsPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert status="info">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Settings</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>

          <div className="flex items-center gap-2 mt-2">
            <Button appearance="outline" size="xs">
              Undo
            </Button>
          </div>
        </AlertContent>
      </Alert>
    </div>
  );
}
