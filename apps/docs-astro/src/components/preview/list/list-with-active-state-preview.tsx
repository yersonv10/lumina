import { List } from "@lumina-kit/ui";

export default function ListWithActiveStatePreview() {
  return (
    <List>
      <li>Dashboard</li>
      <li data-active="true">Settings</li>
      <li>Profile</li>
    </List>
  );
}
