"use client";

import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

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
