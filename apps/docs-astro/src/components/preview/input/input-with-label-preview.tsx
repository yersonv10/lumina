import { Description } from "@lumina/ui";
import { Input } from "@lumina/ui";
import { Label } from "@lumina/ui";
import { TextField } from "@lumina/ui";

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
