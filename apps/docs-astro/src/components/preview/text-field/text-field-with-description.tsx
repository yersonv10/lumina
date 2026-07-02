"use client";

import { Description } from "@lumina/ui";
import { FieldError } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
