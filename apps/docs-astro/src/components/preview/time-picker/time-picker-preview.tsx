"use client";

import { buttonStyles } from "@lumina-kit/ui";
import { TimePicker, TimePickerTrigger } from "@lumina-kit/ui";
import { useState } from "react";

export default function TimePickerPreview() {
  const [selectedTime, setSelectedTime] = useState<Date>();

  return (
    <TimePicker onSelect={date => setSelectedTime(date)}>
      <TimePickerTrigger className={buttonStyles({ appearance: "outline" })}>
        Select Time {selectedTime && `: ${selectedTime.toLocaleTimeString()}`}
      </TimePickerTrigger>
    </TimePicker>
  );
}
