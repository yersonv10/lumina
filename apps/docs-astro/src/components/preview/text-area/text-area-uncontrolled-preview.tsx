import { Description } from "@lumina-kit/ui";
import { Label } from "@lumina-kit/ui";
import { TextArea } from "@lumina-kit/ui";
import { TextField } from "@lumina-kit/ui";

export default function TextAreaUncontrolledPreview() {
  return (
    <div className="w-full max-w-md">
      <TextField defaultValue="We should follow up on this later today.">
        <Label>Uncontrolled message</Label>
        <TextArea
          name="uncontrolled-message"
          placeholder="Write something..."
        />
        <Description className="text-sm text-text-50">
          An uncontrolled textarea manages its own state internally, without
          external control.
        </Description>
      </TextField>
    </div>
  );
}
