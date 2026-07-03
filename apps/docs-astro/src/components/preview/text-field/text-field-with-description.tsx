"use client";

import { Description } from "@lumina-kit/ui";
import { FieldError } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextFieldWithDescription() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField>
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
        <Description>
          We&apos;ll never share your email with anyone.
        </Description>
        <FieldError>Please enter a valid email address.</FieldError>
      </TextField>
    </div>
  );
}
