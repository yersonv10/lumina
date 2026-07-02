import { Description } from "@lumina/ui/core/description";
import { Label } from "@lumina/ui/core/label";
import { TextArea } from "@lumina/ui/core/text-area";
import { TextField } from "@lumina/ui/core/text-field";

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
