"use client";

import { FieldDescription, FieldLabel } from "@lumina/ui/core/field";
import { Input } from "@lumina/ui/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina/ui/core/number-field";
import { Minus, Plus } from "@lumina/icons";

export default function NumberFieldBasicPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField className="w-full" defaultValue={1} minValue={0} maxValue={99}>
        <FieldLabel>Quantity</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Choose the number of items to purchase.</FieldDescription>
      </NumberField>
    </div>
  );
}
