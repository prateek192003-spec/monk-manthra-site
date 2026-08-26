"use client";

import { motion } from "framer-motion";

/**
 * The monk manthra mark.
 *
 * Construction (brand guide, section two):
 *  - A gold seed at the centre. The seed radius is the unit.
 *  - Three rings travelling outward; radii step ~1.6x so spacing loosens
 *    outward, the way a real ripple behaves.
 *  - Gold appears exactly twice: the seed and the outer ring. The eye
 *    enters at the source and leaves at the edge. The two inner rings
 *    are Royal Purple.
 *  - Every arc runs 20deg to 340deg, so the opening is centred at the
 *    top and identical on all three rings. Round caps. No gradients,
 *    no shadows.
 *
 * The draw-in is a 1.4s outward ripple that runs ONCE on mount, then
 * the mark never animates again. Pass `draw={false}` for every static
 * appearance (nav, footer, packaging) so it renders fully formed.
 */

const CX = 60;
const CY = 60;

// seed radius is the unit; ring radii step ~1.6x outward
const SEED_R = 7;

const STROKE = 2.5;
const SWEEP_DEG = 320; // 20deg -> 340deg
const SWEEP_RAD = (SWEEP_DEG * Math.PI) / 180;

function arcPath(r: number): string {
  const a1 = (20 * Math.PI) / 180;
  const a2 = (340 * Math.PI) / 180;
  const x1 = CX + r * Math.sin(a1);
  const y1 = CY - r * Math.cos(a1);
  const x2 = CX + r * Math.sin(a2);
  const y2 = CY - r * Math.cos(a2);
  // 320deg arc, clockwise in screen space => large-arc 1, sweep 1
  return `M ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 1 1 ${x2.toFixed(3)} ${y2.toFixed(3)}`;
}

function arcLength(r: number): number {
  return r * SWEEP_RAD;
}

const TOTAL = 1.4; // seconds, the one big motion moment

export default function Mark({
  draw = false,
  size = 48,
  reversed = false,
  className = "",
}: {
  draw?: boolean;
  size?: number;
  reversed?: boolean;
  className?: string;
}) {
  // reversed on deep purple: rings go half-white, gold stays gold
  const ringColor = reversed ? "#F4F1EC" : "#7A5CA8";
  const rings = [
    { r: 17, color: ringColor },
    { r: 27, color: ringColor },
    { r: 43, color: "#C2A053" },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      role="img"
      aria-label="monk manthra mark"
    >
      {/* gold seed */}
      {draw ? (
        <motion.circle
          cx={CX}
          cy={CY}
          r={SEED_R}
          fill="#C2A053"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "60px 60px" }}
        />
      ) : (
        <circle cx={CX} cy={CY} r={SEED_R} fill="#C2A053" />
      )}

      {/* three rings, rippling outward */}
      {rings.map((ring, i) => {
        const len = arcLength(ring.r);
        const start = 0.18 + i * ((TOTAL - 0.6) / (rings.length - 1));
        return draw ? (
          <motion.path
            key={i}
            d={arcPath(ring.r)}
            stroke={ring.color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            initial={{ strokeDashoffset: len, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 1 }}
            transition={{
              duration: 0.62,
              delay: start,
              ease: [0.33, 1, 0.68, 1],
            }}
            style={{ strokeDasharray: len }}
          />
        ) : (
          <path
            key={i}
            d={arcPath(ring.r)}
            stroke={ring.color}
            strokeWidth={STROKE}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
