import { Link } from "@lumina/ui/core/link";
import { Link1AngularRight } from "@lumina/icons";

export default function LinkPreview() {
  return (
    <Link href="#" variant="primary">
      External Link
      <Link1AngularRight />
    </Link>
  );
}
