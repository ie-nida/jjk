import jjkVideo from "../assets/jjk.mp4";

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Animations */}
      <style>
        {`
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes cursed-bounce {
            0%   { transform: translateY(0); }
            40%  { transform: translateY(-6px); }
            60%  { transform: translateY(2px); }
            100% { transform: translateY(0); }
          }

          @keyframes narration-breathe {
            0% {
              transform: translateY(0);
              opacity: 0.92;
            }
            45% {
              transform: translateY(-3px);
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              opacity: 0.92;
            }
          }

          .slide-left { animation: slide-in-left 0.7s ease-out; }
          .fade-in { animation: fade-in 1s ease-out; }

          .cursed {
            animation: cursed-bounce 4.2s ease-in-out infinite;
          }

          .cursed-delay { animation-delay: 0.25s; }

          .narration {
            animation: narration-breathe 3.2s ease-in-out infinite;
          }
        `}
      </style>

      {/* NAV */}
      <nav className="relative z-20 h-20 border-b border-red-900/20 bg-slate-950/40 backdrop-blur">
        <div className="relative h-full px-8 flex items-center">
          {/* LOGO */}
          <div
            className="absolute left-8"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "26px",
              fontWeight: 600,
              background: "linear-gradient(180deg, #251d1dff, #3f181cff, #f51527ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.08em",
            }}
          >
            JUJUTSU KAISEN
          </div>

          {/* CENTER NAV — MATCHES CURSED POWER FONT */}
          <div
            className="mx-auto flex gap-16"
            style={{
              fontFamily: "Jujutsu Kaisen",   // ✅ SAME FONT
              fontSize: "1.25rem",            // big
              fontWeight: 400,                // lighter, not fat
              letterSpacing: "0.3em",          // spaced like anime UI
            }}
          >
            <a className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
              Home
            </a>
            <a className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
              Story
            </a>
            <a className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
              Characters
            </a>
            <a className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">
              Abilities
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden">
        <video
          src={jjkVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover fade-in"
          style={{
            filter:
              "contrast(1.1) saturate(1.15) brightness(0.95) hue-rotate(-4deg)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-red-950/20 to-slate-950/50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 70% at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="slide-left flex flex-col justify-center px-8 lg:px-16 space-y-8">
            <div className="flex items-end gap-8">
              <h2
                className="cursed text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-none tracking-wide"
                style={{
                  fontFamily: "Jujutsu Kaisen",
                  fontWeight: 500,
                  background:
                    "linear-gradient(180deg, #1D101A, #5A191D, #B41A26)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Cursed
              </h2>

              <h2
                className="cursed cursed-delay text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-none tracking-wide"
                style={{
                  fontFamily: "Jujutsu Kaisen",
                  fontWeight: 500,
                  background:
                    "linear-gradient(180deg, #1D101A, #5A191D, #f51527ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Power
              </h2>
            </div>

            <p className="text-gray-200/90 text-lg max-w-md narration">
              In a world where cursed spirits roam free, jujutsu sorcerers fight
              to protect humanity from the shadows.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg">
                Explore
              </button>
              <button className="px-8 py-3 border border-red-700 text-red-400 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          <div />
        </div>
      </section>
    </div>
  );
}
