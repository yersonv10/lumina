"use client";

import { Description } from "@lumina/ui/core/description";
import { FieldError } from "@lumina/ui/core/field";
import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

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
