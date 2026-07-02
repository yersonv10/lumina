"use client";

import { FieldDescription, FieldLabel } from "@lumina/ui/core/field";
import { Input } from "@lumina/ui/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina/ui/core/number-field";
import { ThumbsUp2, ThumbsDown2 } from "@lumina/icons";

export default function NumberFieldCustomIcons() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField className="w-full" defaultValue={5} minValue={1} maxValue={10}>
        <FieldLabel>Priority level</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <ThumbsDown2 />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <ThumbsUp2 />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Rate the importance of this task.</FieldDescription>
      </NumberField>
    </div>
  );
}
