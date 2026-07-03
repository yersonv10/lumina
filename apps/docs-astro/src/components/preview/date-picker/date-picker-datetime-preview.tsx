"use client";

import { CalendarIcon } from "@/components/ui/icons";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeading,
  NavButton
} from "@lumina-kit/ui";
import { DateInput, DateSegment } from "@lumina-kit/ui";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerPopover,
  DatePickerTrigger
} from "@lumina-kit/ui";
import { Description } from "@lumina-kit/ui";
import { FieldLabel } from "@lumina-kit/ui";
import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";
import { useDateFormatter } from "react-aria";

export default function DatePickerWithDateTimePreview() {
  const [date, setDate] = useState<CalendarDateTime | null>();
  const formatter = useDateFormatter({
    dateStyle: "full",
    timeStyle: "short"
  });

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="max-w-xs w-full">
        <DatePicker
          value={date}
          onChange={setDate}
          granularity="minute"
          className="gap-2"
        >
          <FieldLabel>Event Date &amp; Time</FieldLabel>

          <DatePickerGroup>
            <DateInput>
              {segment => <DateSegment segment={segment} />}
            </DateInput>
            <DatePickerTrigger>
              <CalendarIcon className="size-5" />
            </DatePickerTrigger>
          </DatePickerGroup>

          <Description>
            Selected:{" "}
            {date ? formatter.format(date.toDate(getLocalTimeZone())) : "None"}
          </Description>

          <DatePickerPopover>
            <Calendar>
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
      </div>
    </div>
  );
}
