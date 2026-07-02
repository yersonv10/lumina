"use client";

import { Description } from "@lumina/ui/core/description";
import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

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
