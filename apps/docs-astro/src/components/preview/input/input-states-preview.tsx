"use client";

import { Description } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function InputStatesPreview() {
  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-6">
      <TextField className="grid gap-2">
        <Label>Email</Label>
        <Input state="success" placeholder="email@example.com" />
        <Description className="text-sm text-input-success">
          Email is valid
        </Description>
      </TextField>

      <TextField className="grid gap-2">
        <Label>Email</Label>
        <Input state="error" placeholder="email@example.com" />
        <Description className="text-sm text-input-error">
          Please enter a valid email address
        </Description>
      </TextField>
    </div>
  );
}
