"use client";

import { Button } from "@/components/ui/Button";
import { Label } from "@lumina/ui";
import { TimeField } from "@lumina/ui";
import { DateInput, DateSegment } from "@lumina/ui";

export default function TimeFieldWithFormValidation() {
  return (
    <div>
      <form>
        <TimeField
          name="meeting_time"
          required
          validationBehavior="native"
          validate={v => {
            if (v && v.hour < 8) return "Too early!";
            return null;
          }}
        >
          <Label>Meeting time</Label>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        </TimeField>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
