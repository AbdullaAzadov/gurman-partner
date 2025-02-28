import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...rest}
    color={"currentColor"}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.94381 2.7296C5.85989 2.64568 5.72383 2.64568 5.63991 2.7296L3.78505 4.58446C2.65975 5.70976 2.35052 7.41506 3.00905 8.86383C5.45246 14.2393 9.76068 18.5475 15.1362 20.9909C16.5849 21.6495 18.2902 21.3403 19.4155 20.215L21.2704 18.3601C21.3543 18.2762 21.3543 18.1401 21.2704 18.0562L18.7752 15.561C18.7098 15.4956 18.6099 15.4794 18.5271 15.5207L17.1424 16.2131C15.437 17.0658 13.3772 16.7316 12.029 15.3833L8.61668 11.971C7.26843 10.6228 6.93418 8.56305 7.78689 6.85764L8.47927 5.47287C8.52064 5.39014 8.50443 5.29022 8.43902 5.22482L5.94381 2.7296ZM3.75429 0.843987C4.87961 -0.281328 6.70411 -0.28133 7.82942 0.843987L10.3246 3.3392C11.2017 4.21623 11.4191 5.55607 10.8644 6.66543L10.172 8.0502C9.83264 8.72898 9.96567 9.54877 10.5023 10.0854L13.9146 13.4977C14.4512 14.0343 15.271 14.1674 15.9498 13.828L17.3346 13.1356C18.4439 12.5809 19.7838 12.7983 20.6608 13.6754L23.156 16.1706C24.2813 17.2959 24.2813 19.1204 23.156 20.2457L21.3012 22.1006C19.3898 24.0119 16.4934 24.5371 14.0327 23.4186C8.07025 20.7084 3.29161 15.9298 0.581409 9.9673C-0.537099 7.50658 -0.0118756 4.61016 1.89943 2.69885L3.75429 0.843987Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
