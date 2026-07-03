"use client";

import { DateField, DateInput, DateSegment } from "@lumina-kit/ui";
import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { CalendarDate } from "@internationalized/date";

export default function DateFieldWithMinMax() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <DateField
        minValue={new CalendarDate(2026, 6, 1)}
        maxValue={new CalendarDate(2026, 6, 30)}
      >
        <Label>Appointment date</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Available dates in June 2026.</Description>
      </DateField>
    </div>
  );
}
