"use client";

import { Description } from "@lumina/ui";
import { FieldError } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextArea } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function TextAreaStatesPreview() {
  return (
    <div className="grid w-full gap-6">
      <TextField>
        <Label>Default</Label>
        <TextArea name="state-default" placeholder="Default textarea state" />
      </TextField>

      <TextField>
        <Label>Success</Label>
        <TextArea
          name="state-success"
          state="success"
          placeholder="Success textarea state"
        />
        <Description className="text-sm text-input-success">
          Saved successfully.
        </Description>
      </TextField>

      <TextField invalid>
        <Label>Error</Label>
        <TextArea
          name="state-error"
          state="error"
          placeholder="Error textarea state"
        />
        <FieldError>Please fix the highlighted issue.</FieldError>
      </TextField>
    </div>
  );
}
