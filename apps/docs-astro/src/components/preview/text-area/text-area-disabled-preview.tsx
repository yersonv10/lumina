"use client";

import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

export default function TextAreaDisabledPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Notes</Label>
        <TextArea disabled placeholder="Disabled textarea..." />
      </TextField>
    </div>
  );
}
