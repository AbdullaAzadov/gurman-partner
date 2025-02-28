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
      d="M7.83941 11.0002L0.857178 4.01796L4.39271 0.482422L13.1427 9.23242C14.119 10.2087 14.119 11.7916 13.1427 12.768L4.39271 21.518L0.857178 17.9824L7.83941 11.0002Z"
      fill="#3E0930"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
