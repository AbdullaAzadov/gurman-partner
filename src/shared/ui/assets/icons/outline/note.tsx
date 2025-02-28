import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.24593C0 5.40498 1.49238 3.9126 3.33333 3.9126H56.6667C58.5076 3.9126 60 5.40498 60 7.24593V67.2459C60 69.0869 58.5076 70.5793 56.6667 70.5793H3.33333C1.49238 70.5793 0 69.0869 0 67.2459V7.24593ZM6.66667 10.5793V63.9126H53.3333V10.5793H6.66667Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9999 0.579346V13.9127H13.3333V0.579346H19.9999Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.3334 0.579346V13.9127H26.6667V0.579346H33.3334Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.6667 0.579346V13.9127H40V0.579346H46.6667Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.6666 30.5793H13.3333V23.9126H36.6666V30.5793Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.3333 43.9128H13.3333V37.2461H48.3333V43.9128Z"
      fill="#3E0930"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.9999 57.246H13.3333V50.5793H39.9999V57.246Z"
      fill="#3E0930"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
