import { Badge } from "@lumina-kit/ui";
import { Check, CheckCircle1, InfoCircle, Xmark2x } from "@lumina-kit/icons";

export default function BadgeIcons() {
  return (
    <div className="flex items-center gap-4">
      <Badge prefixIcon={<Check />}>Verified</Badge>
      <Badge suffixIcon={<Xmark2x />}>Removable</Badge>
      <Badge color="success" prefixIcon={<CheckCircle1 />}>
        Active
      </Badge>
      <Badge color="warning" prefixIcon={<InfoCircle />}>
        Pending
      </Badge>
    </div>
  );
}
