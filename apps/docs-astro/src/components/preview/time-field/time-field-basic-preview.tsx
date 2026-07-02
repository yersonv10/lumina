"use client";

import { DateInput, DateSegment } from "@lumina/ui";
import { Description } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TimeField } from "@lumina/ui";

export default function TimeFieldPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField>
        <Label>Meeting time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Description>Choose a start time for the meeting.</Description>
      </TimeField>
    </div>
  );
}
