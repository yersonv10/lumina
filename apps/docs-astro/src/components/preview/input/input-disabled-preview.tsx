import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

export default function InputDisabledPreview() {
  return (
    <TextField disabled className="grid gap-2">
      <Label>Disabled</Label>
      <Input placeholder="Disabled input" />
    </TextField>
  );
}
