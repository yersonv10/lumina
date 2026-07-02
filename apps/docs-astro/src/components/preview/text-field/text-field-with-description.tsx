"use client";

import { Description } from "@lumina/ui/core/description";
import { FieldError } from "@lumina/ui/core/field";
import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

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
