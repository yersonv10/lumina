"use client";

import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextArea } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextAreaWithHintPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Bio</Label>
        <TextArea placeholder="Your bio..." />
        <Description className="text-sm text-text-50">
          Tell us a little about yourself.
        </Description>
      </TextField>
    </div>
  );
}
