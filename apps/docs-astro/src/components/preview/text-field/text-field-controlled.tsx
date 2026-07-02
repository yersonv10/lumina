"use client";

import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";
import { useState } from "react";

export default function TextFieldControlled() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TextField value={value} onChange={setValue}>
        <Label>Full name</Label>
        <Input placeholder="Enter your full name" />
      </TextField>
    </div>
  );
}
