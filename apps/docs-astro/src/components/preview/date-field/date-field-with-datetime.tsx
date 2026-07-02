"use client";

import { DateField, DateInput, DateSegment } from "@lumina/ui/core/date-field";
import { Label } from "@lumina/ui/core/label";
import { CalendarDateTime } from "@internationalized/date";

export default function DateFieldWithDateTime() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <DateField
        defaultValue={new CalendarDateTime(2026, 6, 15, 14, 30)}
        granularity="minute"
      >
        <Label>Event date</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </DateField>
    </div>
  );
}
