"use client";

import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextFieldUncontrolled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField defaultValue="Jane Doe">
        <Label>Full name</Label>
        <Input placeholder="Enter your full name" />
      </TextField>
    </div>
  );
}
