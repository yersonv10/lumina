import { Link } from "@lumina-kit/ui";

export default function LinkSizesPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link size="sm" href="#">
        Small Link
      </Link>

      <Link size="md" href="#">
        Medium Link
      </Link>
    </div>
  );
}
