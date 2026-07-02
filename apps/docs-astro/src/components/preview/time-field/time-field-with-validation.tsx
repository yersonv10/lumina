"use client";

import { Description } from "@lumina/ui/core/description";
import { FieldError } from "@lumina/ui/core/field";
import { Label } from "@lumina/ui/core/label";
import { TimeField } from "@lumina/ui/core/time-field";
import { DateInput, DateSegment } from "@lumina/ui/core/date-field";
import { Time } from "@internationalized/date";

export default function TimeFieldWithValidation() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-2">
      <TimeField minValue={new Time(9)} maxValue={new Time(17)}>
        <Label>Meeting Time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Business hours only</Description>
        <FieldError>Must be between 9 AM and 5 PM</FieldError>
      </TimeField>
    </div>
  );
}
