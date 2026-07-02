"use client";

import { Checkbox } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { useId, useState } from "react";

export default function CheckboxControlledPreview() {
  const [checked, setChecked] = useState(false);
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={id}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <Label htmlFor={id}>Subscribe to newsletter</Label>
    </div>
  );
}
