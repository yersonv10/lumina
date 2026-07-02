"use client";

import { Label } from "@lumina/ui";
import { TimeField } from "@lumina/ui";
import { DateInput, DateSegment } from "@lumina/ui";
import { Time } from "@internationalized/date";
import { useState } from "react";

export default function TimeFieldControlled() {
  const [time, setTime] = useState<Time | null>(new Time(17, 30));

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <TimeField value={time} onChange={setTime}>
        <Label>Meeting time</Label>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </TimeField>
    </div>
  );
}
