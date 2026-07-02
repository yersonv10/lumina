"use client";

import { FieldLabel } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
