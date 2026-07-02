import { Description } from "@lumina/ui/core/description";
import { Input } from "@lumina/ui/core/input";
import { Label } from "@lumina/ui/core/label";
import { TextField } from "@lumina/ui/core/text-field";

export default function InputWithLabelAndHintPreview() {
  return (
    <TextField className="max-w-sm w-full mx-auto grid gap-2">
      <Label>Full Name</Label>
      <Input placeholder="John Doe" />
      <Description className="text-sm text-text-50">
        Must be 3-20 characters long
      </Description>
    </TextField>
  );
}
