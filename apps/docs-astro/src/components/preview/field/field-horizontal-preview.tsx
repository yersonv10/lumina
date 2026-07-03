"use client";

import { FieldLabel } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

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
