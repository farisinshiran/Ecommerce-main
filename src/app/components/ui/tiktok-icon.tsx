interface TikTokIconProps {
  size?: number;
  className?: string;
  fill?: string;
}

export function TikTokIcon({ size = 24, className = "", fill = "currentColor" }: TikTokIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 5.1 2.85 6.79 6.79 0 0 0 5.59-2.75v-4.21a9.23 9.23 0 0 0 3.85 1.64V12.62a5.18 5.18 0 0 1-.88-.05Z" />
    </svg>
  );
}
