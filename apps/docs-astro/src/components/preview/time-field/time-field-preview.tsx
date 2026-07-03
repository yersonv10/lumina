"use client";

import { DateInput, DateSegment } from "@lumina-kit/ui";
import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TimeField } from "@lumina-kit/ui";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldPreview() {
  const [value, setValue] = useState<Time | null>(new Time(9, 30));

  return (
    <TimeField value={value} onChange={setValue}>
      <Label>Meeting time</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Choose a start time for the meeting.</Description>
    </TimeField>
  );
}
