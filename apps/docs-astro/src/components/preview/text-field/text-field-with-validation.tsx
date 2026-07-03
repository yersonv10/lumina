"use client";

import { FieldError } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

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
