import { Link } from "@lumina-kit/ui";
import { Link1AngularRight } from "@lumina-kit/icons";

export default function LinkExternalPreview() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      Visit Website
      <Link1AngularRight />
    </Link>
  );
}
