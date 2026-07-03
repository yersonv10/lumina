"use client";

import { DateField, DateInput, DateSegment } from "@lumina-kit/ui";
import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { CalendarDate } from "@internationalized/date";

export default function DateFieldDisabled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <DateField defaultValue={new CalendarDate(2026, 6, 15)} disabled>
        <Label>Appointment date</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>This field is currently disabled.</Description>
      </DateField>
    </div>
  );
}
