import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
  >
    <path
      d="M10.1156 0.67634C10.4908 -0.0348065 11.5092 -0.0348074 11.8844 0.676339L14.4383 5.51685C14.583 5.79109 14.8468 5.9827 15.1523 6.03557L20.5451 6.96865C21.3374 7.10574 21.6521 8.07437 21.0917 8.65097L17.2773 12.5757C17.0612 12.798 16.9604 13.108 17.0046 13.415L17.7836 18.8322C17.8981 19.628 17.0741 20.2267 16.3526 19.8719L11.4412 17.457C11.163 17.3201 10.837 17.3201 10.5588 17.457L5.64744 19.8719C4.92589 20.2267 4.10192 19.628 4.21637 18.8322L4.99542 13.415C5.03955 13.108 4.93882 12.798 4.72271 12.5757L0.908307 8.65097C0.347911 8.07438 0.662639 7.10574 1.45492 6.96865L6.84771 6.03557C7.15325 5.9827 7.41698 5.79109 7.56167 5.51685L10.1156 0.67634Z"
      fill="#FFCD4B"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
