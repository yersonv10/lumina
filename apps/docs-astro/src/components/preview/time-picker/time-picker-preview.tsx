"use client";

import { buttonStyles } from "@lumina/ui/core/button";
import { TimePicker, TimePickerTrigger } from "@lumina/ui/core/time-picker";
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
