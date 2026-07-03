"use client";

import { Description } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";
import { useState } from "react";

export default function TextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <TextField value={value} onChange={setValue}>
      <Label>Full name</Label>
      <Input placeholder="Enter your full name" />
      <Description>Use your legal name as it appears on your ID.</Description>
    </TextField>
  );
}
