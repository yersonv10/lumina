"use client";

import { Label } from "@lumina-kit/ui";
import { TextArea } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

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
