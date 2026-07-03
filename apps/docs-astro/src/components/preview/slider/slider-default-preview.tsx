import { Slider } from "@lumina-kit/ui";

export default function SliderDefaultPreview() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <Slider defaultValue={[50]} maxValue={100} minValue={0} />
    </div>
  );
}
