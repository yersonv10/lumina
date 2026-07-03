"use client";

import { FieldLabel } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@lumina-kit/ui";
import { Minus, Plus } from "@lumina-kit/icons";
import { useState } from "react";

export default function NumberFieldControlled() {
  const [people, setPeople] = useState(4);

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField className="w-full" value={people} onChange={setPeople}>
        <FieldLabel>Number of guests: {people}</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
