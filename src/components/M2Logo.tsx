import Image from "next/image";

interface M2LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function M2Logo({
  className = "",
  width = 140,
  height = 56,
  priority = false,
}: M2LogoProps) {
  return (
    <Image
      src="/M2 Creative logo MD-02.webp"
      alt="M2 Creative Plus"
      width={width}
      height={height}
      className={`logo-gold ${className}`}
      priority={priority}
    />
  );
}
