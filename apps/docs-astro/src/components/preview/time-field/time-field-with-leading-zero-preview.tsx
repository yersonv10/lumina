"use client";

import { DateInput, DateSegment } from "@lumina/ui/core/date-field";
import { Description } from "@lumina/ui/core/description";
import { Label } from "@lumina/ui/core/label";
import { TimeField } from "@lumina/ui/core/time-field";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldWithLeadingZeroPreview() {
  const [value, setValue] = useState<Time | null>(new Time(9, 30));

  return (
    <TimeField value={value} onChange={setValue} shouldForceLeadingZeros>
      <Label>Meeting time</Label>
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      <Description>Choose a start time for the meeting.</Description>
    </TimeField>
  );
}
