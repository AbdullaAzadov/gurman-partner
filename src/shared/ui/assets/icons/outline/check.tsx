import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="80"
    height="81"
    viewBox="0 0 80 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6667 18.7452C13.9052 18.7452 11.6667 20.9837 11.6667 23.7452V60.4118C11.6667 63.1732 13.9052 65.4118 16.6667 65.4118H53.3333C56.0948 65.4118 58.3333 63.1732 58.3333 60.4118V35.4118H65V60.4118C65 66.8551 59.7767 72.0785 53.3333 72.0785H16.6667C10.2233 72.0785 5 66.8551 5 60.4118V23.7452C5 17.3018 10.2233 12.0785 16.6667 12.0785H50V18.7452H16.6667Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.0238 14.4355L35.6904 52.7688C34.3887 54.0706 32.2781 54.0706 30.9764 52.7688L17.6431 39.4355L22.3571 34.7214L33.3334 45.6978L69.3097 9.72144L74.0238 14.4355Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
