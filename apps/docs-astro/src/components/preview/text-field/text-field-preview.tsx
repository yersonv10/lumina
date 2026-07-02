"use client";

import { Description } from "@lumina/ui/core/description";
import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";
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
