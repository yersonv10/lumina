"use client";

import { Description } from "@lumina/ui/core/description";
import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";
import { useState } from "react";

export default function TextAreaControlledPreview() {
  const [value, setValue] = useState<string>(
    "We should follow up on this later today."
  );

  return (
    <div className="w-full max-w-md">
      <TextField>
        <Label>Controlled message</Label>
        <TextArea
          name="controlled-message"
          value={value}
          onChange={e => setValue(e.target?.value)}
          placeholder="Write something..."
        />
        <Description className="text-sm text-text-50">
          Characters typed:{" "}
          <span className="font-medium text-title-50">{value.length}</span>
        </Description>
      </TextField>
    </div>
  );
}
