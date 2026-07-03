"use client";

import { DateField, DateInput, DateSegment } from "@lumina-kit/ui";
import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { CalendarDate } from "@internationalized/date";
import { useState } from "react";

export default function DateFieldPreview() {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2026, 6, 15)
  );

  return (
    <DateField value={value} onChange={setValue}>
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Select your preferred appointment date.</Description>
    </DateField>
  );
}
