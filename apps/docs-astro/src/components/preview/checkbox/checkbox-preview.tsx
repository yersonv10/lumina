"use client";

import { Checkbox } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { useId } from "react";

export default function CheckboxPreview() {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox id={id} size="md" />
      <Label htmlFor={id}>Checkbox</Label>
    </div>
  );
}
