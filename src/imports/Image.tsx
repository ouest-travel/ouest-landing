import imgImage from "figma:asset/53d23397209d25b212312a8327f3e5905a420f28.png";
import imgImg91081 from "figma:asset/243751a7eab34f72b2c918796f7cb8a6bc092959.png";

export default function Image() {
  return (
    <div className="relative size-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <div className="absolute h-[417px] left-[-1860.33px] top-[-1251px] w-[556px]" data-name="IMG_9108 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg91081} />
      </div>
    </div>
  );
}