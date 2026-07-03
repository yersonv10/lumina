import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function InputDisabledPreview() {
  return (
    <TextField disabled className="grid gap-2">
      <Label>Disabled</Label>
      <Input placeholder="Disabled input" />
    </TextField>
  );
}
