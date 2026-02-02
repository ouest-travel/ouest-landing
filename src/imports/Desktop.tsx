import svgPaths from "./svg-zvo1319nda";
import imgScreen16Pro from "figma:asset/b12f6d90500f44b0ebba12cad925057ab723ce2b.png";
import imgHeroImage from "figma:asset/b96135199cbe0d52ed4445916b8f75946d31aa8e.png";
import imgImage from "figma:asset/bc02206e36088a98d654c460b228add14109f3f7.png";
import imgImage1 from "figma:asset/9dd40105f74b8408a9891c79beb0173026028a38.png";
import imgImage2 from "figma:asset/8a2af99c66bf19bf43994adbffe8d7041d3aaeee.png";
import imgImage3 from "figma:asset/0d6ef76ab8ed398b1cffdd4f5293c339b251d9f3.png";

function NavItems() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.4)] content-stretch cursor-pointer flex font-['Gesta:Light',sans-serif] gap-[27px] items-center leading-[0] left-1/2 not-italic overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center top-[16px] tracking-[-0.35px] whitespace-nowrap" data-name="Nav Items">
      <button className="block relative shrink-0">
        <p className="leading-[1.4]">About</p>
      </button>
      <button className="block relative shrink-0">
        <p className="leading-[1.4]">Features</p>
      </button>
      <a className="block relative shrink-0" href="https://app.ouest.travel">
        <p className="leading-[1.4]">Sign-Up</p>
      </a>
      <button className="block relative shrink-0">
        <p className="leading-[1.4]">Contact</p>
      </button>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.01131">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://app.ouest.travel" style={{ backgroundImage: "linear-gradient(15.9125deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">Join Beta</p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow />
      </div>
    </a>
  );
}

function Navigation1() {
  return (
    <nav className="content-stretch flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col font-['Bernino_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[-1.5px] whitespace-nowrap">
        <p className="leading-[1.2]">Ouest</p>
      </div>
      <ButtonLinkout />
    </nav>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Navigation">
      <Navigation1 />
    </div>
  );
}

function HeroImage() {
  return <div className="absolute bottom-0 h-[362px] left-0 right-0 rounded-[30px]" data-name="Hero image" style={{ backgroundImage: "linear-gradient(11.0507deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }} />;
}

function Screen16Pro() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[639px] left-1/2 overflow-clip rounded-[43.5px] top-1/2 w-[294.75px]" data-name="Screen / 16 Pro">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43.5px] size-full" src={imgScreen16Pro} />
    </div>
  );
}

function IPhone16Pro() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-167px] h-[657px] left-[calc(50%+0.38px)] w-[312.75px]" data-name="iPhone 16 Pro">
      <Screen16Pro />
      <div className="absolute bg-black inset-[2.66%_35.37%_93.15%_34.65%] rounded-[33px]" data-name="Dynamic Island" />
      <div className="absolute inset-[1.37%_2.88%] rounded-[43.5px]" data-name="Frames">
        <div aria-hidden="true" className="absolute border-[5.25px] border-black border-solid inset-[-5.25px] pointer-events-none rounded-[48.75px]" />
      </div>
      <div className="absolute inset-[0.57%_1.2%] rounded-[48.75px]" data-name="Color">
        <div aria-hidden="true" className="absolute border-[3.75px] border-[rgba(255,198,163,0.62)] border-solid inset-[-3.75px] pointer-events-none rounded-[52.5px]" />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[874px] max-w-[1500px] overflow-clip relative shrink-0 w-full" data-name="Hero section">
      <p className="absolute bg-clip-text font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] left-0 not-italic right-0 text-[160px] top-0 tracking-[-6.8px] whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(8.34821deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)", WebkitTextFillColor: "transparent" }}>{`Simplify, Trip & Track.`}</p>
      <HeroImage />
      <IPhone16Pro />
    </div>
  );
}

function LogoCloud() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1500px] py-[50px] relative shrink-0 w-full" data-name="Logo cloud">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px]">Helping your Trips leave the group chat.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[50px] items-start not-italic pr-[400px] relative w-full whitespace-pre-wrap">
        <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-[normal] relative shrink-0 text-[#6f6f6f] text-[48px] tracking-[-1.44px] w-[848px]">{`A Collaborative, Fun and Intuitive App that is your pocket travel buddy. `}</p>
        <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[15px] text-black tracking-[-0.075px] w-[575.566px]">Features</p>
      </div>
    </div>
  );
}

function CableIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Cable icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Cable icon">
          <path d={svgPaths.p37c59480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 1">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-none relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Collaborative Itinerary</p>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">Build, Budget and Plan your trips with Friends and Family through our simple and enhanced user experience.</p>
    </div>
  );
}

function IconLockup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[20px] py-[40px] relative w-full">
        <CableIcon />
        <Text1 />
      </div>
    </div>
  );
}

function EarthIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Earth icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Earth icon">
          <path d={svgPaths.p111c3080} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 2">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-none relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Global Community</p>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">Share and get inspired with a variety of trips and itineraries with the Oùest community.</p>
    </div>
  );
}

function IconLockup1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] pr-[20px] py-[40px] relative w-full">
        <EarthIcon />
        <Text2 />
      </div>
    </div>
  );
}

function AccountIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Account icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Account icon">
          <path d={svgPaths.p1d817280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 3">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-none relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Reducing Borders</p>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">Border knowledge, simplified. We’ll tell you exactly what documents or visas you need while planning.</p>
    </div>
  );
}

function IconLockup2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[40px] py-[40px] relative w-full">
        <AccountIcon />
        <Text3 />
      </div>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chart icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chart icon">
          <path d={svgPaths.p3f011b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 4">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-none relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Customize and Explore</p>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">Pick your theme, colours, and style - Luxury, chill, or adventure, make your trip look and feel like you.</p>
    </div>
  );
}

function IconLockup3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[40px] py-[40px] relative w-full">
        <ChartIcon />
        <Text4 />
      </div>
    </div>
  );
}

function IconsModule() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start pt-[40px] relative shrink-0 w-full" data-name="Icons module">
      <IconLockup />
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
    </div>
  );
}

function HeadlineAndIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start pb-[60px] pt-[80px] relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="h-[620px] relative rounded-[30px] shrink-0 w-full" data-name="Hero Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img alt="A image that shows a mountain range" className="absolute h-[258.06%] left-[1.28%] max-w-none top-[-96.94%] w-full" src={imgHeroImage} />
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Benefits section">
      <HeadlineAndIcons />
      <HeroImage1 />
      <p className="font-['Gesta:Light',sans-serif] h-[25px] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-[322px] whitespace-pre-wrap">Peyto Lake, Alberta, Canada. 2024 By Timmy A</p>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex flex-col gap-[40px] items-start not-italic pr-[80px] relative w-full whitespace-pre-wrap">
        <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">Ouest plans better than the Group Chat.</p>
        <p className="font-['Gesta:Light',sans-serif] leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full">Ouest allows you to build your travel itineraries on the fly and vote for what’s in (or out).</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex font-['Gesta:Light',sans-serif] gap-[30px] items-start justify-center leading-[1.4] not-italic pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="relative shrink-0 text-[#6f6f6f]">01</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-black whitespace-pre-wrap">Find community built itineraries and experiences.</p>
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex font-['Gesta:Light',sans-serif] gap-[30px] items-start justify-center leading-[1.4] not-italic pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="relative shrink-0 text-[#6f6f6f]">02</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-black whitespace-pre-wrap">Get your Mates, Dates and Eats on the same page.</p>
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex font-['Gesta:Light',sans-serif] gap-[30px] items-start justify-center leading-[1.4] not-italic pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="relative shrink-0 text-[#6f6f6f]">03</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-black whitespace-pre-wrap">Track expenses and split costs without the awkward math.</p>
        </div>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex font-['Gesta:Light',sans-serif] gap-[30px] items-start justify-center leading-[1.4] not-italic pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="relative shrink-0 text-[#6f6f6f]">04</p>
          <p className="flex-[1_0_0] min-h-px min-w-px relative text-black whitespace-pre-wrap">{`Inspire & be inspired for your next trip.`}</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Button() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://app.ouest.travel" style={{ backgroundImage: "linear-gradient(17.2627deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">Join Beta</p>
    </a>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-[831px] items-center justify-center min-h-px min-w-px pb-[80px] pt-[60px] relative" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <Title />
      <List />
      <Button />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative size-[40px]" data-name="Arrow Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Arrow Left">
          <rect fill="var(--fill-0, white)" height="40" rx="10" width="40" />
          <path d="M17.5 15L22.5 20L17.5 25V15Z" fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Arrow right">
          <rect fill="var(--fill-0, white)" height="40" rx="10" width="40" />
          <path d="M17.5 15L22.5 20L17.5 25V15Z" fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Controls">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowLeft />
        </div>
      </div>
      <ArrowRight />
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <img alt="A render of three white cylindrical columns, against a warm creme background" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImage} />
        <div className="absolute bg-[rgba(0,0,0,0.06)] inset-0 rounded-[30px]" />
      </div>
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end p-[30px] relative size-full">
          <Controls />
        </div>
      </div>
    </div>
  );
}

function FeaturesCarouselV() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[831px] items-start justify-between max-w-[1600px] min-h-px min-w-px relative" data-name="Features carousel v1">
      <Image />
    </div>
  );
}

function FeaturesCarousel() {
  return (
    <div className="content-stretch flex gap-[20px] h-[831px] items-start max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Features carousel">
      <Text5 />
      <FeaturesCarouselV />
    </div>
  );
}

function Button1() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://app.ouest.travel" style={{ backgroundImage: "linear-gradient(18.6636deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">SIgn Up</p>
    </a>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Text content">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-[min-content] whitespace-pre-wrap">Why Fly with Ouest?</p>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-[min-content] whitespace-pre-wrap">We have what you need to facilitate a memorable experience. Be the first to hear about our alpha launch and new features.</p>
      <Button1 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#cecece] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[240px] py-[80px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TableItem() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#cecece] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[30px] py-[40px] relative size-full">
          <div className="flex flex-col font-['Bernino_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25.714px] text-black tracking-[-2.0571px] whitespace-nowrap">
            <p className="leading-[1.2]">MVP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p4418470} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">Itinerary building and sharing.</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p4418470} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon1 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">{`Budget and Expense tracker. `}</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p4418470} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon2 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">Community Building.</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p4418470} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon3 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">Visa and entry requirements with AI insights.</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p4418470} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon4 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">{`Simple & Seamless User experience.`}</p>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Column 1">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <TableItem />
        <TableItem1 />
        <TableItem2 />
        <TableItem3 />
        <TableItem4 />
        <TableItem5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function TableItem6() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#cecece] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[30px] py-[40px] relative size-full">
          <div className="flex flex-col font-['Bernino_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6f6f6f] text-[21.654px] tracking-[-1.7323px] whitespace-nowrap">
            <p className="leading-[1.2]">Coming Later</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.pad89800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">{` Flight and Stay integration.`}</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.pad89800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon1 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">AI planning.</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.pad89800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon2 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">Where I’ve Been.</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.pad89800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon3 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">Creator Hub.</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.pad89800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon4 />
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[15px] text-black text-center tracking-[-0.075px]">{`Pro & Org Version.`}</p>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[200px] relative" data-name="Column 3">
      <TableItem6 />
      <TableItem7 />
      <TableItem8 />
      <TableItem9 />
      <TableItem10 />
      <TableItem11 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start overflow-x-auto overflow-y-clip relative rounded-[20px] shrink-0 w-full" data-name="Table">
      <Column />
      <Column1 />
    </div>
  );
}

function SpecificationsTable() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1500px] overflow-clip pb-[120px] relative shrink-0 w-full" data-name="Specifications table">
      <Content />
      <Table />
    </div>
  );
}

function Image1() {
  return (
    <div className="aspect-[550/624] flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImage1} />
        <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImage2} />
      </div>
      <div className="size-full" />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col font-['Gesta:Light',sans-serif] gap-[8px] items-start leading-[1.4] relative shrink-0 text-[15px] tracking-[-0.075px] w-full" data-name="Name">
      <p className="relative shrink-0 text-black w-full">Timmy Afolabi</p>
      <p className="bg-clip-text relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(1.44221deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)", WebkitTextFillColor: "transparent" }}>
        Founder/CEO
      </p>
    </div>
  );
}

function Quote() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center not-italic pl-[50px] relative size-full whitespace-pre-wrap">
          <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-none relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-full">“Born out of redefining travel planning, my focus is on building a smart and seamless experience with personalization and community at the center.”</p>
          <Name />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="content-stretch flex gap-[20px] items-start max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Testimonial section">
      <Image1 />
      <Quote />
    </div>
  );
}

function Button2() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://app.ouest.travel" style={{ backgroundImage: "linear-gradient(17.2627deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">Join Beta</p>
    </a>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px]">The Plan</p>
      <Button2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[24px] w-full whitespace-pre-wrap">{`The mission is to simplify planning and travel. The vision is to be the world’s social travel app connecting people through journeys. `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[387px]">
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[24px] w-full whitespace-pre-wrap">{`Development began summer 2025. Invite-only events & social media will be ways to show progress.`}</p>
    </div>
  );
}

function Lockup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#6f6f6f] text-[48px] tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">BUILD.</p>
        <Frame1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[24px] w-[388px] whitespace-pre-wrap">{`Sign up for alpha/beta testing to get exclusive perks. `}</p>
    </div>
  );
}

function Lockup1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[#6f6f6f] text-[48px] tracking-[-0.96px] w-full whitespace-pre-wrap">ALPHA.</p>
        <Frame2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[387px]">
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[24px] w-full whitespace-pre-wrap">As MVP goes live, we will continue to improve the product.</p>
    </div>
  );
}

function Lockup2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] min-w-full not-italic relative shrink-0 text-[#6f6f6f] text-[48px] tracking-[-0.96px] w-[min-content] whitespace-pre-wrap">{`LIVE & GTM.`}</p>
        <Frame3 />
      </div>
    </div>
  );
}

function Component3Up() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="3-up">
      <Lockup />
      <Lockup1 />
      <Lockup2 />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1500px] pb-[120px] pt-[80px] relative shrink-0 w-full" data-name="How it works section">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <Frame4 />
      <Frame />
      <Component3Up />
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[235.86%] left-0 max-w-none top-[-85.94%] w-full" src={imgImage3} />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div aria-label="A image that shows a mountain range from above" className="aspect-[1120/620] content-stretch flex items-start max-h-[830.357177734375px] max-w-[1500px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Image container">
      <Image2 />
    </div>
  );
}

function HeroImage2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center pb-[40px] relative shrink-0 w-full" data-name="Hero image">
      <ImageContainer />
      <p className="font-['Gesta:Light',sans-serif] h-[30px] leading-[1.4] not-italic relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-[539px] whitespace-pre-wrap">The Fairmont Hotel at Lake Louise, Alberta, Canada 2024 by Timmy A</p>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.01131">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout1() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://app.ouest.travel" style={{ backgroundImage: "linear-gradient(15.9125deg, rgb(31, 33, 77) 4.2635%, rgb(80, 54, 111) 21.171%, rgb(191, 52, 117) 40.897%, rgb(238, 108, 69) 59.683%, rgb(255, 206, 97) 77.53%, rgb(255, 229, 138) 98.195%)" }}>
      <p className="font-['Gesta:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]">Join Beta</p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow1 />
      </div>
    </a>
  );
}

function CenteredCta() {
  return (
    <div className="max-w-[1500px] relative shrink-0 w-full" data-name="Centered CTA">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[inherit] px-[300px] py-[120px] relative w-full">
          <p className="font-['Bernino_Sans:Semibold',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-[min-content] whitespace-pre-wrap">Let’s Stay in Touch.</p>
          <p className="font-['Gesta:Light',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-[min-content] whitespace-pre-wrap">We’re building Ouest together with travellers like you. Have questions, ideas, or just want to say hi?</p>
          <ButtonLinkout1 />
        </div>
      </div>
    </div>
  );
}

function NavItems1() {
  return (
    <div className="content-stretch cursor-pointer flex font-['Gesta:Light',sans-serif] gap-[27px] items-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center tracking-[-0.35px] whitespace-nowrap" data-name="Nav Items">
      <a className="block relative shrink-0" href="https://www.instagram.com/ouesttimmy?igsh=OGxkdXVhMTQ1NXVv&utm_source=qr">
        <p className="leading-[1.4] text-[14px]">Instagram</p>
      </a>
      <a className="block relative shrink-0" href="https://x.com/ouestapp?s=21&t=5fiWPiWSgMcXxrLIipKP7g">
        <p className="leading-[1.4] text-[14px]">Twitter/X</p>
      </a>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Links">
      <NavItems1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4]">© Ouest.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4]">2025</p>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex font-['Gesta:Light',sans-serif] gap-[40px] items-end leading-[0] not-italic relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-full whitespace-nowrap" data-name="Credits">
      <Text6 />
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4]">All Rights Reserved</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-end max-w-[1500px] pb-[20px] pt-[40px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <Links />
      <Credits />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[20px] px-[40px] relative size-full" data-name="Desktop">
      <NavItems />
      <Navigation />
      <HeroSection />
      <LogoCloud />
      <BenefitsSection />
      <FeaturesCarousel />
      <SpecificationsTable />
      <TestimonialSection />
      <HowItWorksSection />
      <HeroImage2 />
      <CenteredCta />
      <Footer />
    </div>
  );
}