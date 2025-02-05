import { getColor, IIconProps } from './utils';

export const FinishedApplicationIcon = ({
  color,
  size = '24',
  ...props
}: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="11" fill="#2E3192" />
    <path
      d="M19.3969 6.35236C18.4446 5.4764 17.2097 5 15.905 5C15.8533 5 15.8015 5 15.7474 5C14.3876 5.04281 13.1234 5.59495 12.1869 6.56422L12 6.75741L11.8131 6.56422C10.8766 5.59605 9.6124 5.04281 8.25256 5C8.19853 5 8.14675 5 8.09496 5C6.79028 5 5.5554 5.4764 4.60306 6.35236C3.6102 7.26235 3.04285 8.49506 3.00232 9.82437C2.9618 11.1504 3.4526 12.4149 4.39143 13.3853L12 21L19.6142 13.3798C20.5474 12.4138 21.0382 11.1493 20.9977 9.82327C20.9572 8.49616 20.3909 7.26345 19.3969 6.35236ZM3.83534 9.84852C3.86798 8.73765 4.34528 7.70582 5.17266 6.94621C5.97078 6.21295 7.00417 5.81339 8.09496 5.81339C8.13887 5.81339 8.18164 5.81339 8.22554 5.81559C9.36475 5.84742 10.4229 6.31284 11.2053 7.11965L15.6495 11.7047C15.09 12.0329 14.3606 11.9693 13.8619 11.5137L11.5441 9.38639C10.9767 9.96597 10.0199 10.0055 9.42216 9.45774L7.74262 7.91218L7.17302 8.50494L8.85256 10.0505C9.28482 10.4468 9.83529 10.64 10.388 10.6542L6.67096 14.5016L4.99368 12.8233C4.21244 12.0154 3.80044 10.9572 3.83534 9.84852ZM11.615 10.5697L12.4356 11.3216L8.04093 15.8738L7.25295 15.0856L11.615 10.5697ZM13.0413 11.8782L13.2912 12.1076C13.469 12.2722 13.6795 12.3842 13.8934 12.4841L9.35124 17.1866L8.62179 16.4566L13.0413 11.8782ZM11.2064 19.0417L11.9403 18.2931L12.7722 19.0626L12 19.8353L11.2064 19.0417ZM15.3039 16.5313L14.6195 17.2162L13.7685 16.427L14.445 15.7355L15.3039 16.5313ZM15.0214 15.1471L15.6979 14.4566L16.5692 15.2624L15.8836 15.9484L15.0214 15.1471ZM14.0364 17.798L13.3542 18.4808L12.5167 17.7047L13.191 17.0154L14.0364 17.798ZM19.0119 12.82L17.1523 14.6817L15.672 13.3095L10.6255 18.4599L9.93547 17.7695L14.8176 12.7146C14.8413 12.7157 14.8615 12.7267 14.8852 12.7267C14.9065 12.7267 14.9257 12.7267 14.9448 12.7267C15.5639 12.7113 16.1392 12.4621 16.5647 12.0198L16.8337 11.742L12.5741 7.35017L12.797 7.11965C13.5782 6.31284 14.6364 5.84742 15.7767 5.81559C16.9294 5.75521 17.9988 6.18332 18.8296 6.94512C19.657 7.70472 20.1343 8.73655 20.1669 9.84742C20.2007 10.9572 19.7876 12.0154 19.0119 12.82Z"
      fill="white"
    />
  </svg>
);
