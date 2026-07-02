"use client";

import { buttonStyles } from "@lumina/ui/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@lumina/ui/core/dropdown";

export default function DropdownWithSeparatorPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonStyles({ variant: "primary", size: "sm" })}
      >
        Actions
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator className="-mx-1.5 my-1.5" />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
