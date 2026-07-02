"use client";

import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
