import { Button } from "@lumina/ui/core/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@lumina/ui/core/card";
import { Phone } from "@lumina/icons";

export default function CardResponsivenessPreview() {
  return (
    <Card className="w-full max-w-full md:max-w-md bg-background-50 gap-y-9">
      <CardHeader className="px-7 pt-8 text-center">
        <span className="size-16 mx-auto flex items-center justify-center rounded-full bg-primary-50">
          <Phone className="text-xl text-primary-500" />
        </span>
        <CardTitle className="mt-7">Fully Responsive</CardTitle>
        <CardDescription className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-7 pt-0">
        <Button className="w-full">Visit Now</Button>
      </CardFooter>
    </Card>
  );
}
