"use client";
import { Label } from "@lumina/ui";
import { TimeField } from "@lumina/ui";
import { DateInput, DateSegment } from "@lumina/ui";
import { parseAbsoluteToLocal } from "@internationalized/date";

export default function TimeFieldWithTimezone() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField
        hourCycle={24}
        defaultValue={parseAbsoluteToLocal("2024-03-01T14:30:00Z")}
        hideTimeZone
      >
        <Label>UTC Event</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </TimeField>
    </div>
  );
}
