"use client";

import OtpInput from "@lumina/ui/core/otp-input";

export default function OtpInputDisabledPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput label="Disabled Input" disabled />
    </div>
  );
}
