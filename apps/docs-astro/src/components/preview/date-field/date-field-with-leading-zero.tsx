"use client";

import { DateField, DateInput, DateSegment } from "@lumina/ui";
import { Description } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { CalendarDate } from "@internationalized/date";
import { useState } from "react";

export default function DateFieldWithLeadingZero() {
  const [value, setValue] = useState<CalendarDate | null>(
    new CalendarDate(2026, 6, 5)
  );

  return (
    <DateField value={value} onChange={setValue} shouldForceLeadingZeros>
      <Label>Appointment date</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Leading zeros are shown for day and month.</Description>
    </DateField>
  );
}
