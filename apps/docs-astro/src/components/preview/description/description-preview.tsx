"use client";

import { Description } from "@lumina/ui/core/description";
import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

export default function DescriptionPreview() {
  return (
    <TextField className="max-w-sm w-full mx-auto grid gap-2">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
      <Description>
        We will never share your email with anyone else.
      </Description>
    </TextField>
  );
}
