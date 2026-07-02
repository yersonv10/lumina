"use client";

import { Toggle } from "@lumina/ui";

export default function ToggleBasicPreview() {
  return (
    <div className="flex items-center gap-4">
      <Toggle label="Enable Feature X" defaultChecked />
    </div>
  );
}
