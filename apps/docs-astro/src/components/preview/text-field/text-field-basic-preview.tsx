"use client";

import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

export default function TextFieldBasicPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField>
        <Label>Full name</Label>
        <Input placeholder="Enter your full name" />
      </TextField>
    </div>
  );
}
