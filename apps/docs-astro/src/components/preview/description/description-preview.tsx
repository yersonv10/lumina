"use client";

import { Description } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

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
