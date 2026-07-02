"use client";

import { Label } from "@lumina/ui";
import { TextArea } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
