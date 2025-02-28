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
      d="M12.0001 12.3358L9.20718 9.54291L7.79297 10.9571L11.293 14.4571C11.6835 14.8476 12.3167 14.8476 12.7072 14.4571L16.2072 10.9571L14.793 9.54291L12.0001 12.3358Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
