"use client";

import { Label } from "@lumina-kit/ui";
import { RadioInput } from "@lumina-kit/ui";

export default function RadioPreview() {
  const options = [
    { name: "plan", label: "Basic Plan", value: "basic" },
    { name: "plan", label: "Pro Plan", value: "pro" },
    { name: "plan", label: "Enterprise Plan", value: "enterprise" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map(option => (
        <Label
          key={option.value}
          className="group flex cursor-pointer items-center gap-3 select-none"
        >
          <RadioInput name={option.name} value={option.value} />
          <span>{option.label}</span>
        </Label>
      ))}
    </div>
  );
}
