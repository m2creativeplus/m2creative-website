import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  variant?: "3d-spin" | "parallax" | "pulse" | "intro";
  className?: string;
}

export default function AnimatedM2Logo({
  size = "md",
  variant = "parallax",
  className = "",
}: AnimatedLogoProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Parallax / 3D Tilt state
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  
  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    animate(x, 200, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 200, { type: "spring", stiffness: 300, damping: 20 });
  }

  const sizeMap = {
    sm: { width: 80, height: 32 },
    md: { width: 140, height: 56 },
    lg: { width: 200, height: 80 },
    hero: { width: 400, height: 160 },
  };

  const dimensions = sizeMap[size];

  if (!isMounted) return <div style={{ width: dimensions.width, height: dimensions.height }} />;

  // Variant 1: Continuous 3D Spin (for loading or pure 3D show-off)
  if (variant === "3d-spin") {
    return (
      <div className={`relative ${className}`} style={{ perspective: 1000 }}>
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex items-center justify-center"
        >
          {/* Back drop shadow for 3D depth */}
          <div className="absolute inset-0 blur-2xl bg-m2-gold/20 transform translate-z-[-20px]" />
          <Image
            src="/M2 Creative logo MD-02.webp"
            alt="M2 Creative Plus Logo"
            width={dimensions.width}
            height={dimensions.height}
            className="logo-gold drop-shadow-2xl"
          />
        </motion.div>
      </div>
    );
  }

  // Variant 2: Hero Intro Animation (Draw-in + glow)
  if (variant === "intro") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "brightness(0.5) blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`relative ${className}`}
      >
        <motion.div
          animate={{ 
            boxShadow: ["0px 0px 0px rgba(212,175,55,0)", "0px 0px 40px rgba(212,175,55,0.4)", "0px 0px 0px rgba(212,175,55,0)"] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full"
        >
          <Image
            src="/M2 Creative logo MD-02.webp"
            alt="M2 Creative Plus Logo"
            width={dimensions.width}
            height={dimensions.height}
            className="logo-gold"
            priority
          />
        </motion.div>
      </motion.div>
    );
  }

  // Variant 3: Interactive Interactive Parallax 3D Tilt (Default)
  return (
    <div className={`relative ${className}`} style={{ perspective: 1000 }}>
      {/* Container to catch mouse events safely */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer w-full h-full"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Layer 1: Deep shadow (furthest back) */}
        <div 
          className="absolute inset-0 bg-m2-gold/10 blur-xl rounded-full"
          style={{ transform: "translateZ(-40px)" }}
        />
        
        {/* Layer 2: Actual Logo */}
        <Image
          src="/M2 Creative logo MD-02.webp"
          alt="M2 Creative Plus Logo"
          width={dimensions.width}
          height={dimensions.height}
          className="logo-gold relative z-10"
          style={{ transform: "translateZ(20px)" }}
          priority
        />

        {/* Layer 3: Glass glare effect (front) */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent mix-blend-overlay pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
        />
      </motion.div>
    </div>
  );
}
