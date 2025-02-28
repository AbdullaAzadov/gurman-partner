import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16059 11.0002L13.1428 4.01796L9.60729 0.482422L0.857289 9.23242C-0.119021 10.2087 -0.119021 11.7916 0.857289 12.768L9.60729 21.518L13.1428 17.9824L6.16059 11.0002Z"
      fill="#3E0930"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
