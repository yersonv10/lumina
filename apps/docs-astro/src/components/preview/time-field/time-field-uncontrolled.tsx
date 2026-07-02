"use client";
import { Label } from "@lumina/ui/core/label";
import { TimeField } from "@lumina/ui/core/time-field";
import { DateInput, DateSegment } from "@lumina/ui/core/date-field";
import { Time } from "@internationalized/date";

export default function TimeFieldUncontrolled() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField defaultValue={new Time(9, 30)}>
        <Label>Meeting time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </TimeField>
    </div>
  );
}
