import { Button } from "@lumina/ui/core/button";
import { Spinner } from "@lumina/ui/core/spinner";

export default function SpinnerButtonPreview() {
  return (
    <Button disabled>
      <Spinner size="sm" />
      Loading...
    </Button>
  );
}
