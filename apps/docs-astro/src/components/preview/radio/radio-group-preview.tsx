import { Label } from "@lumina-kit/ui";
import { RadioInput } from "@lumina-kit/ui";

export default function RadioGroupPreview() {
  const plans = [
    { label: "Basic - $9/month", value: "basic" },
    { label: "Pro - $29/month", value: "pro" },
    { label: "Enterprise - $99/month", value: "enterprise" }
  ];

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">Select a plan</legend>
      <div className="flex flex-col gap-3">
        {plans.map(plan => (
          <Label
            key={plan.value}
            className="group flex cursor-pointer items-center gap-3 select-none"
          >
            <RadioInput name="group-plan" value={plan.value} />
            <span>{plan.label}</span>
          </Label>
        ))}
      </div>
    </fieldset>
  );
}
