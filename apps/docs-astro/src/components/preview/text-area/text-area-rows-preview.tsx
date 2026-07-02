"use client";

import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

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
