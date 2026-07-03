import { Button } from "@lumina-kit/ui";
import { Spinner } from "@lumina-kit/ui";

export default function SpinnerButtonPreview() {
  return (
    <Button disabled>
      <Spinner size="sm" />
      Loading...
    </Button>
  );
}
