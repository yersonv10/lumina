import { Description } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function InputUncontrolledPreview() {
  return (
    <TextField
      className="max-w-sm w-full mx-auto grid gap-2"
      defaultValue="Lumina is awesome"
    >
      <Label>Uncontrolled Input</Label>
      <Input placeholder="Start typing..." />
      <Description className="text-sm text-text-50">
        Must be 3-20 characters long
      </Description>
    </TextField>
  );
}
