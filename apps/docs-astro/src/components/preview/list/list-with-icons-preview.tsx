import { List } from "@lumina-kit/ui";
import { CheckCircle1 } from "@lumina-kit/icons";

export default function ListWithIconsPreview() {
  const features = [
    "Complete documentation work.",
    "Add new template to TailAdmin.",
    "Try to make Meku.dev featureful",
    "Review Sera UI pr's",
    "Review TailAdmin pr's"
  ];

  return (
    <List className="max-w-70">
      {features.map((feature, index) => (
        <li key={index}>
          <CheckCircle1 className="size-5 text-primary-500!" />
          {feature}
        </li>
      ))}
    </List>
  );
}
