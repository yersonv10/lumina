"use client";

import { Label } from "@lumina-kit/ui";
import { TextArea } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextAreaRowsPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Notes</Label>
        <TextArea
          name="notes"
          rows={8}
          placeholder="Use a taller textarea for longer notes..."
        />
      </TextField>
    </div>
  );
}
