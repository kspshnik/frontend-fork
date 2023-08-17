import { getColor, IIconProps } from './utils';

export const PasswordCloseIcon = ({
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
    <circle cx="11" cy="11" r="11" fill="#2E3192" />
    <path
      d="M1.22723 11.4429L1.1331 11.5569C1.03894 11.6708 1.03896 11.6708 1.03896 11.7847C1.03896 11.8987 1.03894 12.0126 1.1331 12.0126C4.05193 14.6329 7.44156 16 10.9253 16C14.4091 16 17.7987 14.6329 20.7176 12.0126C20.8117 11.8986 20.8117 11.8987 20.8117 11.7847C20.8117 11.6708 20.8117 11.5569 20.7176 11.5569C14.8799 6.43015 7.06489 6.31622 1.22723 11.4429ZM1.69801 11.8986C7.2532 7.1137 14.5032 7.1137 20.0584 11.8986C14.5974 16.5696 7.15905 16.5696 1.69801 11.8986Z"
      fill="#FBFDFF"
    />
    <path
      d="M8.19479 11.8989C8.19479 13.7218 9.41883 15.2028 10.9253 15.2028C12.4318 15.2028 13.6559 13.7218 13.6559 11.8989C13.6559 10.0761 12.4318 8.59506 10.9253 8.59506C9.41883 8.59506 8.19479 10.0761 8.19479 11.8989ZM13.091 11.8989C13.091 13.38 12.1494 14.5193 10.9253 14.5193C9.7013 14.5193 8.7597 13.38 8.7597 11.8989C8.7597 10.4179 9.7013 9.27863 10.9253 9.27863C12.0552 9.27863 13.091 10.4179 13.091 11.8989Z"
      fill="#FBFDFF"
    />
    <path
      d="M20.8117 8.93678C9.88966 2.32902 1.22729 8.93678 1.13314 8.93678C1.03898 9.05071 0.94485 9.27855 1.03901 9.39248C1.13316 9.50641 1.3215 9.62034 1.41565 9.50642C1.41565 9.50642 3.58126 7.91143 6.97087 7.11394C10.078 6.43038 15.0683 6.20251 20.6235 9.62031H20.7176C20.8118 9.62031 20.9058 9.50641 21 9.39248C21 9.16463 20.9059 9.05071 20.8117 8.93678Z"
      fill="#FBFDFF"
    />
  </svg>
);