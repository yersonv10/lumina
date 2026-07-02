import { Button } from "@lumina/ui";
import { Spinner } from "@lumina/ui";

export default function SpinnerButtonPreview() {
  return (
    <Button disabled>
      <Spinner size="sm" />
      Loading...
    </Button>
  );
}
