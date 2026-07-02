"use client";

import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

export default function TextAreaPreview() {
  return (
    <TextField className="w-full max-w-md">
      <TextArea name="text-area" placeholder="Write something..." />
    </TextField>
  );
}
