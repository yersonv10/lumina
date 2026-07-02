"use client";

import { FieldError } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function TextFieldWithValidation() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField minLength={2} required>
        <Label>Full name</Label>
        <Input placeholder="Enter your full name" />
        <FieldError>Full name must be at least 2 characters long.</FieldError>
      </TextField>
    </div>
  );
}
