import { Badge } from "@lumina-kit/ui";

export default function BadgeSizes() {
  return (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}
