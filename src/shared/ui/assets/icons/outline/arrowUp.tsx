import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    ref={ref}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 11.6642L9.20718 14.4571L7.79297 13.0429L11.293 9.54288C11.6835 9.15235 12.3167 9.15235 12.7072 9.54288L16.2072 13.0429L14.793 14.4571L12.0001 11.6642Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
