import { getColor, IIconProps } from "./utils";

export const ArrowIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.4 11C13.5 10.9 13.5 10.8 13.5 10.7L11.5 5.79993L20.1 5.8999C20.3 5.8999 20.4 5.79998 20.4 5.59998C20.4 5.39998 20.3 5.29993 20.1 5.29993L11.5 5.19995L13.6 0.399902C13.6 0.299902 13.6 0.199976 13.5 0.0999756C13.4 -2.44156e-05 13.3 0 13.2 0L0.200012 5C0.100012 5 0 5.09993 0 5.29993C0 5.39993 0.100012 5.49998 0.200012 5.59998L13.1 11C13.2 11.1 13.4 11.1 13.4 11ZM1.09998 5.3999L12.8 0.899902L10.8 5.3999V5.5V5.59998L12.7 10.2L1.09998 5.3999Z" />
  </svg>
);
