"use client";

import { FieldDescription, FieldError, FieldLabel } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina-kit/ui";
import { Minus, Plus } from "@lumina-kit/icons";

export default function NumberFieldWithValidation() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField
        className="w-full"
        minValue={18}
        maxValue={120}
        defaultValue={25}
      >
        <FieldLabel>Age</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Must be between 18 and 120.</FieldDescription>
        <FieldError>Please enter a valid age.</FieldError>
      </NumberField>
    </div>
  );
}
