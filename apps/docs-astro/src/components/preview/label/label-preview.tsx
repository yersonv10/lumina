"use client";

import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function LabelPreview() {
  return (
    <TextField className="w-sm">
      <Label htmlFor="email">Email Address:</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full"
      />
    </TextField>
  );
}
