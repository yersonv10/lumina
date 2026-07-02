"use client";

import { DateField, DateInput, DateSegment } from "@lumina/ui/core/date-field";
import { Description } from "@lumina/ui/core/description";
import { Label } from "@lumina/ui/core/label";

export default function DateFieldBasicPreview() {
  return (
    <DateField className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Select your preferred appointment date.</Description>
    </DateField>
  );
}
