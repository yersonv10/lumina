"use client";

import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

export default function LabelTextAreaPreview() {
  return (
    <div className="max-w-sm w-full mx-auto p-8">
      <TextField>
        <Label>Your Message</Label>
        <TextArea placeholder="Type your message here..." />
      </TextField>
    </div>
  );
}
