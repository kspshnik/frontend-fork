import { getColor, IIconProps } from "./utils";

export const ArrowIcon = ({ color, size = "24", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.4 17C15.5 16.9 15.5 16.8 15.5 16.7L13.5 11.7999L22.1 11.8999C22.3 11.8999 22.4 11.8 22.4 11.6C22.4 11.4 22.3 11.2999 22.1 11.2999L13.5 11.2L15.6 6.3999C15.6 6.2999 15.6 6.19998 15.5 6.09998C15.4 5.99998 15.3 6 15.2 6L2.20001 11C2.10001 11 2 11.0999 2 11.2999C2 11.3999 2.10001 11.5 2.20001 11.6L15.1 17C15.2 17.1 15.4 17.1 15.4 17ZM3.09998 11.3999L14.8 6.8999L12.8 11.3999V11.5V11.6L14.7 16.2L3.09998 11.3999Z" />
  </svg>
);