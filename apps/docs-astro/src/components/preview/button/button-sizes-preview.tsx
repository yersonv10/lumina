import { Button } from "@lumina/ui";

export default function ButtonSizesPreview() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
