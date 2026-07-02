"use client";

import { OtpInput } from "@lumina/ui";

export default function OtpInputDisabledPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput label="Disabled Input" disabled />
    </div>
  );
}
