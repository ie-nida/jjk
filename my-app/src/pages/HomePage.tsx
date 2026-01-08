import { Link } from "react-router-dom";
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
            0% { transform: translateY(0); opacity: 0.9; }
            50% { transform: translateY(-3px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.9; }
          }

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

          @keyframes logo-glow {
            0%, 100% {
              text-shadow:
                0 0 6px rgba(239,68,68,0.25),
                0 0 14px rgba(239,68,68,0.35),
                0 0 28px rgba(239,68,68,0.25);
            }
            50% {
              text-shadow:
                0 0 10px rgba(239,68,68,0.4),
                0 0 22px rgba(239,68,68,0.55),
                0 0 40px rgba(239,68,68,0.35);
            }
          }
          .logo-glow { animation: logo-glow 3.6s ease-in-out infinite; }

          .btn-glow { transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease; }
          .btn-glow:hover {
            transform: translateY(-1px);
            box-shadow:
              0 0 18px rgba(255, 0, 4, 0.8),
              0 0 40px rgba(228, 7, 22, 0.6),
              0 0 90px rgba(228, 7, 22, 0.35);
            filter: saturate(1.2);
          }
          @keyframes btn-pulse {
            0%, 100% {
              box-shadow:
                0 0 12px rgba(255, 0, 4, 0.4),
                0 0 28px rgba(228, 7, 22, 0.25);
            }
            50% {
              box-shadow:
                0 0 22px rgba(255, 0, 4, 0.75),
                0 0 55px rgba(228, 7, 22, 0.45);
            }
          }
          .btn-pulse { animation: btn-pulse 3.2s ease-in-out infinite; }

          .slide-left { animation: slide-in-left 0.7s ease-out; }
          .fade-in { animation: fade-in 1s ease-out; }
          .cursed { animation: cursed-bounce 4.2s ease-in-out infinite; }
          .cursed-delay { animation-delay: 0.25s; }
          .narration { animation: narration-breathe 3.2s ease-in-out infinite; }
        `}
      </style>

      {/* NAV */}
      <nav className="relative z-20 h-20 border-b border-red-900/20 bg-slate-950/50 backdrop-blur">
        <div className="relative h-full px-8 flex items-center">
          <div
            className="absolute left-8 logo-glow"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "26px",
              fontWeight: 600,
              color: "#f51527",
              letterSpacing: "0.08em",
            }}
          >
            JUJUTSU KAISEN
          </div>

          {/* ✅ WORKING NAVIGATION */}
          <div
            className="mx-auto flex gap-16"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "1.25rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
            }}
          >
            <Link to="/" className="nav-link text-gray-200 hover:text-red-300">
              Home
            </Link>
            <Link to="/story" className="nav-link text-gray-200 hover:text-red-300">
              Story
            </Link>
            <Link
              to="/characters"
              className="nav-link text-gray-200 hover:text-red-300"
            >
              Characters
            </Link>
            <Link
              to="/abilities"
              className="nav-link text-gray-200 hover:text-red-300"
            >
              Abilities
            </Link>
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
            filter: "contrast(1.1) saturate(1.15) brightness(0.95) hue-rotate(-4deg)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-red-950/22 to-slate-950/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 70% at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48) 100%)",
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
                  background: "linear-gradient(180deg, #1D101A, #b41e1eff, #ff0015ff)",
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
                  background: "linear-gradient(180deg, #000000b0, #b41e1eff, #ff0015ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Power
              </h2>
            </div>

            <p
              className="narration max-w-md"
              style={{
                fontFamily: `"Spectral SC", serif`,
                fontSize: "1rem",
                lineHeight: "1.75",
                letterSpacing: "0.18em",
                fontWeight: 300,
                color: "#ffffff",
                textShadow: `
                  0 0 6px rgba(255, 255, 255, 1),
                  0 0 20px rgba(228, 7, 22, 0.85),
                  0 0 48px rgba(228, 7, 22, 0.55),
                  0 0 90px rgba(228, 7, 22, 0.35)
                `,
              }}
            >
              In a world where cursed spirits roam free, jujutsu sorcerers fight
              to protect humanity from the shadows.
            </p>

            <div className="flex gap-4">
              <button className="btn-glow btn-pulse px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg">
                Explore
              </button>
              <button className="btn-glow px-8 py-3 border border-red-700 text-red-200 rounded-lg bg-slate-950/20">
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
