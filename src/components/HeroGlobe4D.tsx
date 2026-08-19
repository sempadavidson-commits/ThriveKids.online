import React, { useEffect, useRef } from 'react';

// Dense geographical coastline & landmass sample coordinates [lat, lon]
const CONTINENT_DOTS: [number, number][] = [
  // Africa (Dense Focus)
  [0.34, 32.58], [1.29, 36.82], [-1.28, 36.82], [-4.04, 39.66], [-6.82, 39.28], [-18.9, 47.5],
  [6.52, 3.37], [9.08, 7.39], [5.60, -0.18], [14.69, -17.44], [12.63, -8.00], [13.51, 2.12],
  [-26.20, 28.04], [-33.92, 18.42], [-29.85, 31.02], [-22.56, 17.06], [-8.83, 13.23], [-4.32, 15.31],
  [4.05, 9.70], [0.39, 9.45], [15.36, 38.92], [9.02, 38.74], [4.17, 73.50], [11.58, 43.14],
  [30.04, 31.23], [31.20, 29.91], [32.88, 13.19], [36.75, 3.05], [33.57, -7.58], [34.02, -6.83],
  [12.13, 15.05], [15.60, 32.53], [4.85, 31.58], [2.16, 45.34], [-1.94, 29.87], [-3.38, 29.36],
  [-12.97, 28.63], [-15.38, 28.32], [-17.82, 31.05], [-20.15, 28.58], [-25.74, 28.18], [7.37, 3.94],
  [11.86, 13.15], [8.98, 7.74], [4.77, 7.01], [5.36, -4.00], [6.37, 2.43], [9.53, -13.67],
  [13.45, -16.57], [16.86, -14.98], [18.07, -15.97], [27.15, -13.20], [24.77, -10.15],
  
  // Europe
  [51.50, -0.12], [48.85, 2.35], [52.52, 13.40], [41.90, 12.49], [40.41, -3.70], [38.72, -9.13],
  [59.32, 18.06], [59.91, 10.75], [60.16, 24.93], [55.67, 12.56], [52.36, 4.90], [50.85, 4.35],
  [48.20, 16.37], [46.94, 7.44], [47.49, 19.04], [52.22, 21.01], [50.07, 14.43], [37.98, 23.72],
  [41.00, 28.97], [39.93, 32.85], [55.75, 37.61], [59.93, 30.33], [53.34, -6.26], [55.95, -3.18],

  // Asia
  [19.07, 72.87], [28.61, 77.20], [13.08, 80.27], [22.57, 88.36], [12.97, 77.59], [24.86, 67.00],
  [31.52, 74.35], [23.81, 90.41], [6.92, 79.86], [27.71, 85.32], [35.67, 139.65], [34.69, 135.50],
  [39.90, 116.40], [31.23, 121.47], [23.12, 113.26], [22.31, 114.16], [37.56, 126.97],
  [13.75, 100.50], [14.59, 120.98], [10.82, 106.62], [1.35, 103.81], [-6.20, 106.84], [3.13, 101.68],
  [25.20, 55.27], [24.71, 46.67], [29.37, 47.97], [25.28, 51.53], [32.08, 34.78], [33.89, 35.50],
  [35.68, 51.38], [41.29, 69.24], [43.22, 76.85], [47.91, 106.90], [53.90, 27.56],

  // Americas
  [40.71, -74.00], [34.05, -118.24], [41.87, -87.62], [29.76, -95.36], [25.76, -80.19], [47.60, -122.33],
  [37.77, -122.41], [39.73, -104.99], [32.77, -96.79], [45.50, -73.56], [43.65, -79.38], [49.28, -123.12],
  [19.43, -99.13], [20.65, -103.34], [14.63, -90.51], [9.92, -84.09], [8.98, -79.51], [18.53, -72.33],
  [18.48, -69.93], [4.71, -74.07], [10.48, -66.90], [-0.18, -78.46], [-12.04, -77.04], [-16.50, -68.11],
  [-23.55, -46.63], [-22.90, -43.17], [-15.79, -47.88], [-34.60, -58.38], [-33.44, -70.66], [-25.26, -57.57],
  [-12.97, -38.50], [-8.05, -34.88], [-3.73, -38.52], [-3.11, -60.02], [-54.80, -68.30],

  // Oceania / Australia
  [-33.86, 151.20], [-37.81, 144.96], [-27.47, 153.02], [-31.95, 115.86], [-34.92, 138.60],
  [-41.28, 174.77], [-36.84, 174.76], [-43.53, 172.63], [-9.44, 147.18], [-4.26, 152.17]
];

// Active Telemetry Arcs (Origins -> Destinations)
const TELEMETRY_ROUTES = [
  { from: [0.34, 32.58], to: [51.50, -0.12] }, // Kampala -> London
  { from: [0.34, 32.58], to: [40.71, -74.00] }, // Kampala -> New York
  { from: [0.34, 32.58], to: [19.07, 72.87] }, // Kampala -> Mumbai
  { from: [0.34, 32.58], to: [14.59, 120.98] }, // Kampala -> Manila
  { from: [0.34, 32.58], to: [-33.92, 18.42] }, // Kampala -> Cape Town
  { from: [0.34, 32.58], to: [6.52, 3.37] },   // Kampala -> Lagos
  { from: [0.34, 32.58], to: [14.63, -90.51] }, // Kampala -> Guatemala
];

export default function HeroGlobe4D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Globe state
    let rotation = 0.5;
    const tilt = 0.38; // ~22 degrees tilt
    let time = 0;

    const handleResize = () => {
      try {
        if (!container || !canvas) return;
        const rect = container.getBoundingClientRect();
        if (!rect || rect.width <= 0 || rect.height <= 0) return;
        width = rect.width;
        height = rect.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      } catch {
        // Safe resize guard
      }
    };

    handleResize();
    let resizeObserver: ResizeObserver | null = null;
    try {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    } catch {
      window.addEventListener('resize', handleResize);
    }

    // Convert spherical lat/lon to 3D Cartesian coordinates
    const toCartesian = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -(radius * Math.sin(phi) * Math.cos(theta)),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(phi) * Math.sin(theta),
      };
    };

    // Rotate 3D point around Y and X axes
    const project = (
      p: { x: number; y: number; z: number },
      rotY: number,
      rotX: number,
      cx: number,
      cy: number
    ) => {
      // Y-axis rotation (spin)
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // X-axis rotation (tilt)
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      // Perspective projection
      const cameraDistance = 480;
      const denom = cameraDistance - z2;
      const fov = denom > 1 ? cameraDistance / denom : 1;

      return {
        x: cx + x1 * fov,
        y: cy + y2 * fov,
        z: z2,
        fov,
        visible: z2 > -10,
      };
    };

    // Main 60 FPS 4D render loop
    const render = () => {
      try {
        time += 0.02;
        rotation += 0.0035; // continuous high-tech orbital rotation

        if (!width || !height) {
          handleResize();
        }

        const cx = width / 2;
        const cy = height / 2;
        const globeRadius = Math.min(width, height) * 0.44;

        if (globeRadius > 10 && width > 10 && height > 10) {
          ctx.clearRect(0, 0, width, height);

          // 1. Ambient Holographic Sphere Halo & Rim Glow
          const glowGrad = ctx.createRadialGradient(
            cx,
            cy,
            globeRadius * 0.7,
            cx,
            cy,
            globeRadius * 1.25
          );
          glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.06)');
          glowGrad.addColorStop(0.5, 'rgba(5, 150, 105, 0.09)');
          glowGrad.addColorStop(0.85, 'rgba(16, 185, 129, 0.03)');
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(cx, cy, globeRadius * 1.25, 0, Math.PI * 2);
          ctx.fill();

          // 2. High-Tech Sphere Base Glass Core
          const coreGrad = ctx.createRadialGradient(
            cx - globeRadius * 0.25,
            cy - globeRadius * 0.25,
            globeRadius * 0.1,
            cx,
            cy,
            globeRadius
          );
          coreGrad.addColorStop(0, 'rgba(16, 185, 129, 0.14)');
          coreGrad.addColorStop(0.6, 'rgba(6, 78, 59, 0.12)');
          coreGrad.addColorStop(0.95, 'rgba(4, 47, 46, 0.22)');
          coreGrad.addColorStop(1, 'rgba(16, 185, 129, 0.35)');

          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(cx, cy, globeRadius, 0, Math.PI * 2);
          ctx.fill();

          // Outer neon wire rim
          ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // 3. 4D Equatorial Wave & Orbit Rings
          const ringPulse = (Math.sin(time * 1.5) + 1) * 0.5;
          ctx.save();
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.15 + ringPulse * 0.15})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.beginPath();
          ctx.ellipse(
            cx,
            cy,
            Math.max(1, globeRadius * 1.15),
            Math.max(1, globeRadius * 0.38),
            tilt,
            0,
            Math.PI * 2
          );
          ctx.stroke();
          ctx.restore();

          // 4. Rotating Latitude & Longitude Meridians
          const numMeridians = 8;
          for (let i = 0; i < numMeridians; i++) {
            const meridianAngle = (i * Math.PI) / numMeridians + rotation;
            const cosM = Math.cos(meridianAngle);
            const radiusX = Math.max(0.5, Math.abs(cosM) * globeRadius);

            ctx.strokeStyle = 'rgba(52, 211, 153, 0.08)';
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.ellipse(
              cx,
              cy,
              radiusX,
              Math.max(1, globeRadius),
              tilt,
              0,
              Math.PI * 2
            );
            ctx.stroke();
          }

          // 5. Render Continents Dot Matrix
          CONTINENT_DOTS.forEach(([lat, lon], idx) => {
            const p3d = toCartesian(lat, lon, globeRadius);
            const p2d = project(p3d, rotation, tilt, cx, cy);

            const jitter = [
              { dLat: 0, dLon: 0 },
              { dLat: 1.8, dLon: 1.6 },
              { dLat: -1.6, dLon: 1.8 },
              { dLat: 1.4, dLon: -1.8 },
              { dLat: -1.8, dLon: -1.5 },
            ];

            jitter.forEach((offset, jIdx) => {
              const jp3d = toCartesian(lat + offset.dLat, lon + offset.dLon, globeRadius);
              const jp2d = project(jp3d, rotation, tilt, cx, cy);

              if (jp2d.z > 0) {
                const depthRatio = Math.min(1, Math.max(0, jp2d.z / globeRadius));
                const alpha = 0.25 + depthRatio * 0.75;
                const size = (1.2 + depthRatio * 1.4) * jp2d.fov;

                ctx.fillStyle = jIdx === 0 
                  ? `rgba(52, 211, 153, ${alpha})` 
                  : `rgba(16, 185, 129, ${alpha * 0.7})`;

                ctx.beginPath();
                ctx.arc(jp2d.x, jp2d.y, Math.max(0.6, size), 0, Math.PI * 2);
                ctx.fill();

                if (idx % 8 === 0 && jIdx === 0) {
                  const sparkle = (Math.sin(time * 3 + idx) + 1) * 0.5;
                  ctx.fillStyle = `rgba(251, 191, 36, ${sparkle * alpha})`;
                  ctx.beginPath();
                  ctx.arc(jp2d.x, jp2d.y, size * 1.6, 0, Math.PI * 2);
                  ctx.fill();
                }
              } else if (jp2d.z > -globeRadius * 0.85) {
                ctx.fillStyle = 'rgba(16, 185, 129, 0.06)';
                ctx.beginPath();
                ctx.arc(jp2d.x, jp2d.y, 0.8, 0, Math.PI * 2);
                ctx.fill();
              }
            });
          });

          // 6. Animated Telemetry Arcs
          TELEMETRY_ROUTES.forEach((route, rIdx) => {
            const from3D = toCartesian(route.from[0], route.from[1], globeRadius);
            const to3D = toCartesian(route.to[0], route.to[1], globeRadius);

            const from2D = project(from3D, rotation, tilt, cx, cy);
            const to2D = project(to3D, rotation, tilt, cx, cy);

            if (from2D.z > -globeRadius * 0.3 || to2D.z > -globeRadius * 0.3) {
              const midLat = (route.from[0] + route.to[0]) / 2;
              const midLon = (route.from[1] + route.to[1]) / 2;
              const arcAltitude = globeRadius * 1.28;
              const mid3D = toCartesian(midLat, midLon, arcAltitude);
              const mid2D = project(mid3D, rotation, tilt, cx, cy);

              ctx.save();
              ctx.beginPath();
              ctx.moveTo(from2D.x, from2D.y);
              ctx.quadraticCurveTo(mid2D.x, mid2D.y, to2D.x, to2D.y);

              ctx.strokeStyle = 'rgba(52, 211, 153, 0.3)';
              ctx.lineWidth = 1;
              ctx.stroke();

              const progress = ((time * 0.4 + rIdx * 0.25) % 1);
              const photonX = (1 - progress) * (1 - progress) * from2D.x + 2 * (1 - progress) * progress * mid2D.x + progress * progress * to2D.x;
              const photonY = (1 - progress) * (1 - progress) * from2D.y + 2 * (1 - progress) * progress * mid2D.y + progress * progress * to2D.y;

              ctx.fillStyle = '#f59e0b';
              ctx.shadowColor = '#f59e0b';
              ctx.shadowBlur = 8;
              ctx.beginPath();
              ctx.arc(photonX, photonY, 2.4, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          });

          // 7. Kampala Headquarters Primary Beacon Pulse
          const hq3D = toCartesian(0.34, 32.58, globeRadius);
          const hq2D = project(hq3D, rotation, tilt, cx, cy);

          if (hq2D.z > -10) {
            const pulse = (time * 2) % 3;
            const pulseRadius = 3 + pulse * 6;
            const pulseAlpha = Math.max(0, 1 - pulse / 3);

            ctx.save();
            ctx.strokeStyle = `rgba(245, 158, 11, ${pulseAlpha * 0.9})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(hq2D.x, hq2D.y, pulseRadius, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#f59e0b';
            ctx.shadowColor = '#f59e0b';
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(hq2D.x, hq2D.y, 3.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      } catch {
        // Ignore single frame render error
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden z-10 select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full opacity-90 sm:opacity-95 pointer-events-none" />
    </div>
  );
}
