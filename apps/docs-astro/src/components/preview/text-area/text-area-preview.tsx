"use client";

import { TextArea } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextAreaPreview() {
  return (
    <TextField className="w-full max-w-md">
      <TextArea name="text-area" placeholder="Write something..." />
    </TextField>
  );
}
