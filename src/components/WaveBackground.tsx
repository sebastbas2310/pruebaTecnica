"use client";
export default function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      {/* Fondo degradado */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #0ea5e9 100%)",
        }}
      />
      {/* Olas SVG */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-64"
        preserveAspectRatio="none"
      >
        <path
          fill="#38bdf8"
          fillOpacity="0.7"
          d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill="#0ea5e9"
          fillOpacity="0.5"
          d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,229.3C672,224,768,192,864,186.7C960,181,1056,203,1152,218.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}