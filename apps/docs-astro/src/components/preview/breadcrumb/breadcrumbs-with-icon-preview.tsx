import { Breadcrumbs } from "@lumina-kit/ui";
import { Home, ThreeDCube1 } from "@lumina-kit/icons";

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
