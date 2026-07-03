import { Button } from "@lumina-kit/ui";
import { RefreshCircle1Clockwise } from "@lumina-kit/icons";

export default function ButtonDisabledPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>Disabled Button</Button>

      <Button disabled pending>
        <RefreshCircle1Clockwise className="animate-spin" />
        Saving...
      </Button>
    </div>
  );
}
