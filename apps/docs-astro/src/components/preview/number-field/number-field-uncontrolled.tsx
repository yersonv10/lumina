"use client";

import { FieldDescription, FieldLabel } from "@lumina/ui";
import { Input } from "@lumina/ui";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina/ui";
import { Minus, Plus } from "@lumina/icons";

export default function NumberFieldUncontrolled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField
        className="w-full"
        defaultValue={3}
        minValue={1}
        maxValue={10}
      >
        <FieldLabel>Table capacity</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Maximum number of seats per booking.</FieldDescription>
      </NumberField>
    </div>
  );
}
