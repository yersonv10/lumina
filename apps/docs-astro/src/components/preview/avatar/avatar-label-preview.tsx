import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage
} from "@lumina/ui";

export default function AvatarPreview() {
  return (
    <figure className="flex justify-center items-center gap-2 w-full">
      <Avatar size="md">
        <AvatarImage src="/images/avatar/avatar-1.webp" alt="John Doe" />
        <AvatarFallback>J</AvatarFallback>
        <AvatarBadge status="online" />
      </Avatar>
      <figcaption>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-gray-500">Software Engineer</p>
      </figcaption>
    </figure>
  );
}
