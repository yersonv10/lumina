"use client";

import { TextArea } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function TextAreaPreview() {
  return (
    <TextField className="w-full max-w-md">
      <TextArea name="text-area" placeholder="Write something..." />
    </TextField>
  );
}
