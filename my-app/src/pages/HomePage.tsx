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

          /* 🔮 Title bounce */
          @keyframes cursed-bounce {
            0%   { transform: translateY(0); }
            40%  { transform: translateY(-6px); }
            60%  { transform: translateY(2px); }
            100% { transform: translateY(0); }
          }

          /* 🩸 Continuous narration breathe */
          @keyframes narration-breathe {
            0% {
              transform: translateY(0);
              opacity: 0.92;
              text-shadow: 0 0 0px rgba(185, 28, 28, 0.0);
            }
            45% {
              transform: translateY(-3px);
              opacity: 1;
              text-shadow: 0 0 14px rgba(185, 28, 28, 0.22);
            }
            100% {
              transform: translateY(0);
              opacity: 0.92;
              text-shadow: 0 0 0px rgba(185, 28, 28, 0.0);
            }
          }

          /* 🔥 Nav underline (clean) */
          .nav-link {
            position: relative;
            display: inline-block;
            padding: 6px 2px;
            transition: color 200ms ease;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0px;
            width: 0%;
            height: 2px;
            transform: translateX(-50%);
            background: linear-gradient(90deg, rgba(239,68,68,0), rgba(239,68,68,0.95), rgba(239,68,68,0));
            box-shadow: 0 0 10px rgba(239,68,68,0.35);
            transition: width 220ms ease;
          }
          .nav-link:hover::after { width: 120%; }

          /* ✨ Button glow */
          .btn-glow {
            transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
          }
          .btn-glow:hover {
            transform: translateY(-1px);
            box-shadow: 0 0 22px rgba(239,68,68,0.35), 0 0 60px rgba(239,68,68,0.12);
            filter: saturate(1.05);
          }
          .btn-glow:active { transform: translateY(0px); }

          /* subtle pulse on primary button only */
          @keyframes btn-pulse {
            0%, 100% { box-shadow: 0 0 0 rgba(239,68,68,0); }
            50% { box-shadow: 0 0 26px rgba(239,68,68,0.28); }
          }
          .btn-pulse {
            animation: btn-pulse 3.6s ease-in-out infinite;
          }

          .slide-left { animation: slide-in-left 0.7s ease-out; }
          .fade-in { animation: fade-in 1s ease-out; }

          .cursed {
            animation: cursed-bounce 4.2s ease-in-out infinite;
            will-change: transform;
          }
          .cursed-delay { animation-delay: 0.25s; }

          .narration {
            animation: narration-breathe 3.2s ease-in-out infinite;
            will-change: transform, opacity, text-shadow;
          }
        `}
      </style>

      {/* NAV */}
      <nav className="relative z-20 h-20 border-b border-red-900/20 bg-slate-950/50 backdrop-blur">
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

          {/* CENTER NAV (matches title font) */}
          <div
            className="mx-auto flex gap-16"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "1.25rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
            }}
          >
            <a className="nav-link text-gray-200 hover:text-red-300 cursor-pointer">
              Home
            </a>
            <a className="nav-link text-gray-200 hover:text-red-300 cursor-pointer">
              Story
            </a>
            <a className="nav-link text-gray-200 hover:text-red-300 cursor-pointer">
              Characters
            </a>
            <a className="nav-link text-gray-200 hover:text-red-300 cursor-pointer">
              Abilities
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden">
        {/* BACKGROUND VIDEO */}
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

        {/* BLENDS */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-red-950/22 to-slate-950/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 70% at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48) 100%)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* LEFT */}
          <div className="slide-left flex flex-col justify-center px-8 lg:px-16 space-y-8">
            {/* TITLE */}
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
                    "linear-gradient(180deg, #5A191D, #B41A26, #7F1D1D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Power
              </h2>
            </div>

            {/* NARRATION (clearer but still moody) */}
            <p className="narration text-gray-100/90 text-lg max-w-md">
              In a world where cursed spirits roam free, jujutsu sorcerers fight
              to protect humanity from the shadows.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button className="btn-glow btn-pulse px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg">
                Explore
              </button>
              <button className="btn-glow px-8 py-3 border border-red-700 text-red-200 hover:text-red-100 rounded-lg bg-slate-950/20">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT EMPTY */}
          <div />
        </div>
      </section>
    </div>
  );
}
