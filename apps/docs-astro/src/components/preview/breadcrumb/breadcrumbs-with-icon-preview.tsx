import { Breadcrumbs } from "@lumina/ui/core/breadcrumbs";
import { Home, ThreeDCube1 } from "@lumina/icons";

export default function BreadcrumbsWithIconPreview() {
  return (
    <Breadcrumbs
      items={[
        { href: "#", label: "Home", icon: <Home /> },
        { href: "#", label: "Products", icon: <ThreeDCube1 /> },
        { href: "#", label: "Laptop" }
      ]}
    />
  );
}
