"use client";

import { FieldLabel } from "@lumina/ui/core/field";
import { Input } from "@lumina/ui/core/input";
import { TextField } from "@lumina/ui/core/text-field";

export default function FieldHorizontalPreview() {
  return (
    <div>
      <TextField className="w-full" orientation="horizontal">
        <FieldLabel htmlFor="company">Company:</FieldLabel>
        <Input id="company" placeholder="Pimjo" />
      </TextField>
    </div>
  );
}
