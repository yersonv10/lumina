"use client";

import { OtpInput } from "@lumina/ui";

export default function OtpInputSixDigitPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput
        label="6-Digit Verification Code"
        digitLength={6}
        hint="A divider appears automatically after the first 3 digits."
      />
    </div>
  );
}
