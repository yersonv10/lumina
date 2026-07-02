"use client";

import { DateField, DateInput, DateSegment } from "@lumina/ui";
import { Description } from "@lumina/ui";
import { Label } from "@lumina/ui";

export default function DateFieldBasicPreview() {
  return (
    <DateField className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Select your preferred appointment date.</Description>
    </DateField>
  );
}
