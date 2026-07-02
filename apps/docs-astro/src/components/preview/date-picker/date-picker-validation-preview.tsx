"use client";

import { CalendarIcon } from "@/components/ui/icons";
import { Button } from "@lumina/ui";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeading,
  NavButton
} from "@lumina/ui";
import { DateInput, DateSegment } from "@lumina/ui";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerPopover,
  DatePickerTrigger
} from "@lumina/ui";
import { FieldError, FieldLabel } from "@lumina/ui";
import {
  CalendarDate,
  getLocalTimeZone,
  isWeekend,
  today
} from "@internationalized/date";
import { useState } from "react";
import { Form, useLocale } from "react-aria-components";

export default function DatePickerWithValidationPreview() {
  const { locale } = useLocale();
  const [date, setDate] = useState<CalendarDate | null>(null);
  const now = today(getLocalTimeZone());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date");
    } else if (isWeekend(date, locale)) {
      alert("Weekends are not available");
    } else {
      alert(`You selected ${date.toString()}`);
    }
  };

  return (
    <Form className="max-w-xs w-full" onSubmit={handleSubmit}>
      <DatePicker
        value={date}
        onChange={setDate}
        required
        minValue={now}
        isDateUnavailable={date => isWeekend(date, locale)}
      >
        <FieldLabel>Business Meeting</FieldLabel>

        <DatePickerGroup>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <DatePickerTrigger>
            <CalendarIcon className="size-5" />
          </DatePickerTrigger>
        </DatePickerGroup>

        <FieldError />

        <DatePickerPopover>
          <Calendar aria-label="Business meeting">
            <CalendarHeader>
              <NavButton slot="previous" />
              <CalendarHeading />
              <NavButton slot="next" />
            </CalendarHeader>

            <CalendarGrid>
              <CalendarGridHeader />
              <CalendarGridBody>
                {date => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerPopover>
      </DatePicker>

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </Form>
  );
}
