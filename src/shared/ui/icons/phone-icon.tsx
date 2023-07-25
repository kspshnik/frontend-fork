import { getColor, IIconProps } from './utils';

export const PhoneIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.9743 12.4814C18.8376 12.3438 18.5641 12.3438 18.4274 12.4814L16.2393 14.6819L9.40168 7.80513L11.5898 5.60459C11.7265 5.46705 11.7265 5.19195 11.5898 5.05441L6.66664 0.103152C6.52989 -0.034384 6.25643 -0.034384 6.11968 0.103152L0.102564 6.15472C-0.034188 6.29226 -0.034188 6.56732 0.102564 6.70486L14.5983 21.2837C14.7351 21.4212 15.0085 21.4212 15.1453 21.2837C15.282 21.1461 15.282 20.8711 15.1453 20.7335L0.923126 6.42977L4.88888 2.44124L9.26496 6.8424L8.5812 7.39254C8.44445 7.53007 8.44445 7.80514 8.5812 7.94267L15.9658 15.3696C16.1026 15.5071 16.376 15.5071 16.5128 15.3696L17.1966 14.6819L21.7094 19.2206L17.6068 23.3467C17.47 23.4843 17.47 23.7593 17.6068 23.8968C17.7435 24.0344 18.0171 24.0344 18.1538 23.8968L23.8974 18.1203C24.0342 17.9828 24.0342 17.7077 23.8974 17.5702L18.9743 12.4814ZM5.43592 1.75356L6.3932 0.790832L10.7692 5.19196L9.812 6.15472L5.43592 1.75356ZM22.2564 18.6705L17.7436 14.1318L18.7009 13.1691L23.2137 17.7077L22.2564 18.6705Z" />
  </svg>
);
