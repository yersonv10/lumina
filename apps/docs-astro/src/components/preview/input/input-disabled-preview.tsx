import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

export default function InputDisabledPreview() {
  return (
    <TextField disabled className="grid gap-2">
      <Label>Disabled</Label>
      <Input placeholder="Disabled input" />
    </TextField>
  );
}
