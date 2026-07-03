"use client";

import {
  FieldDescription,
  FieldError,
  FieldLabel
} from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function FieldWithInputPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <TextField className="w-full" defaultValue="John Doe">
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" placeholder="Enter your name" />
        <FieldDescription>
          This appears on invoices and emails.
        </FieldDescription>
      </TextField>

      <TextField className="w-full" defaultValue="jhon-doe" invalid>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="Enter your username" />
        <FieldError>This username is already taken.</FieldError>
      </TextField>
    </div>
  );
}
