"use client";

import { FieldDescription, FieldLabel } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina-kit/ui";
import { Minus, Plus } from "@lumina-kit/icons";

export default function FieldWithNumberFieldPreview() {
  return (
    <div className="mx-auto">
      <NumberField defaultValue={1000}>
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

        <FieldDescription>Enter a quantity between 0 and 100.</FieldDescription>
      </NumberField>
    </div>
  );
}
