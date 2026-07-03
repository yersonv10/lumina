import { Description } from "@lumina-kit/ui";
import { Input } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

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
