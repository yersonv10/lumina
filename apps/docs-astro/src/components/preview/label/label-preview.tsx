"use client";

import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
