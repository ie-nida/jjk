import { Link } from "react-router-dom";
import { useState } from "react";
import FlipBook from "../components/FlipBook";

export default function StoryPage(): JSX.Element {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <style>{`
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
          background: linear-gradient(
            90deg,
            rgba(127,29,29,0),
            rgba(248,113,113,0.95),
            rgba(127,29,29,0)
          );
          box-shadow: 0 0 12px rgba(127,29,29,0.8);
          transition: width 220ms ease;
        }
        .nav-link:hover::after {
          width: 120%;
        }

        @keyframes logo-glow {
          0%, 100% {
            text-shadow:
              0 0 6px rgba(127,29,29,0.7),
              0 0 16px rgba(248,113,113,0.7),
              0 0 26px rgba(0,0,0,1);
          }
          50% {
            text-shadow:
              0 0 14px rgba(248,113,113,1),
              0 0 30px rgba(239,68,68,1),
              0 0 60px rgba(127,29,29,1);
          }
        }
        .logo-glow {
          animation: logo-glow 3.6s ease-in-out infinite;
        }

        .flipbook-container {
          height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          perspective: 1500px;
        }

        /* ===== FLOATING 3D EVIL SPELLBOOK ===== */
        .jjk-cover-card {
          width: 420px;
          height: 620px;
          position: relative;
          cursor: pointer;
          margin: 0 auto;
          opacity: 0;
          transform-style: preserve-3d;
          transform: translateY(20px) scale(.96) rotateX(22deg) rotateY(-18deg);
          animation: cover-float-in 0.7s ease forwards,
                     cover-idle 5.5s ease-in-out infinite 0.7s;
        }

        @keyframes cover-float-in {
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(22deg) rotateY(-18deg);
          }
        }
        @keyframes cover-idle {
          0%, 100% {
            transform: translateY(0) scale(1) rotateX(22deg) rotateY(-18deg);
          }
          50% {
            transform: translateY(-10px) scale(1.04) rotateX(25deg) rotateY(-14deg);
          }
        }

        .jjk-book-base {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: #020008;
          box-shadow:
            0 46px 90px rgba(0,0,0,1),
            0 0 40px rgba(0,0,0,0.98);
          transform: translateZ(-20px);
        }

        .jjk-book-pages-right,
        .jjk-book-pages-bottom {
          position: absolute;
          background: repeating-linear-gradient(
            to bottom,
            #f3dfc7 0,
            #f3dfc7 2px,
            #d9ba90 2px,
            #d9ba90 4px
          );
          opacity: 0.85;
          box-shadow: 0 0 10px rgba(0,0,0,0.9);
          transform-origin: left top;
        }
        .jjk-book-pages-right {
          top: 18px;
          bottom: 30px;
          right: -10px;
          width: 13px;
          border-radius: 0 6px 6px 0;
          transform: skewY(-8deg);
        }
        .jjk-book-pages-bottom {
          left: 24px;
          right: 20px;
          bottom: -9px;
          height: 11px;
          border-radius: 0 0 9px 9px;
          transform: skewX(-8deg);
        }

        /* ===== COVER COLORS: almost black with blood red ===== */
        .jjk-book-cover {
          position: absolute;
          inset: 6px 8px 18px 14px;
          border-radius: 6px;
          background:
            radial-gradient(circle at 20% 0%,
              #B41A26 0,
              #5A191D 20%,
              #1D101A 45%,
              #020005 80%,
              #000000 100%);
          border: 2px solid #010007;
          overflow: visible;
          box-shadow:
            inset 0 0 36px rgba(0,0,0,1),
            0 0 38px rgba(148,27,40,0.8);
        }

        .jjk-book-cover::before {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: 4px;
          border: 1px solid rgba(248,113,113,0.1);
          box-shadow:
            inset 0 0 34px rgba(0,0,0,0.98),
            0 0 16px rgba(248,113,113,0.3);
          pointer-events: none;
        }

        .jjk-book-spine {
          position: absolute;
          left: 8px;
          top: 28px;
          bottom: 26px;
          width: 30px;
          border-radius: 4px;
          background: linear-gradient(180deg, #260307 0%, #120104 50%, #040003 100%);
          border-right: 1px solid rgba(0,0,0,0.95);
          box-shadow:
            inset -2px 0 7px rgba(0,0,0,1),
            0 0 16px rgba(0,0,0,0.9);
        }

        /* === TRIANGULAR CORNER ARMOR (HUGGING CORNERS) === */
        .jjk-corner-top,
        .jjk-corner-bottom {
          position: absolute;
          z-index: 25;
          background: radial-gradient(circle at 20% 20%, #3b050a 0, #050005 55%, #000000 100%);
          box-shadow:
            0 24px 30px rgba(0,0,0,1),
            inset 0 0 16px rgba(0,0,0,1);
        }

        .jjk-corner-top {
          width: 180px;
          height: 180px;
          top: -40px;
          left: -40px;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .jjk-corner-bottom {
          width: 180px;
          height: 180px;
          bottom: -40px;
          right: -50px;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .jjk-corner-top::before,
        .jjk-corner-bottom::before {
          content: "";
          position: absolute;
          inset: 10px;
          background: radial-gradient(circle at 20% 10%, rgba(248,250,252,0.15), transparent 60%);
          mix-blend-mode: screen;
          opacity: 0.7;
        }
        .jjk-corner-top::after,
        .jjk-corner-bottom::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid rgba(0,0,0,0.98);
          border-top-color: rgba(255,255,255,0.08);
          border-left-color: rgba(255,255,255,0.08);
          opacity: 0.95;
          pointer-events: none;
        }

        /* side rune strips */
        .side-runes {
          position: absolute;
          top: 40px;
          bottom: 40px;
          width: 26px;
          border-radius: 40px;
          background: radial-gradient(circle at 50% 0%,
              rgba(248,113,113,0.35),
              transparent 60%);
          box-shadow:
            0 0 18px rgba(248,113,113,0.75),
            inset 0 0 16px rgba(0,0,0,0.9);
          opacity: 0.6;
          overflow: hidden;
        }
        .side-runes-left {
          left: 46px;
        }
        .side-runes-right {
          right: 38px;
        }
        .side-runes::before {
          content: "ᚦᚲᛟᚹᚱᛞᚾᛉ";
          position: absolute;
          inset: 8px;
          color: rgba(254,242,242,0.9);
          font-size: 14px;
          letter-spacing: 0.2em;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          text-shadow:
            0 0 8px rgba(248,113,113,1),
            0 0 16px rgba(127,29,29,1);
        }

        /* INNER ART AREA */
        .jjk-cover-art {
          position: absolute;
          inset: 26px 26px 30px 40px;
          border-radius: 3px;
          background: radial-gradient(circle at 50% 10%,
              #7f111f 0,
              #3b0710 18%,
              #1D101A 45%,
              #020005 80%,
              #000000 100%);
          overflow: hidden;
          box-shadow:
            inset 0 0 44px rgba(0,0,0,1),
            0 0 22px rgba(148,27,40,0.7);
        }

        .jjk-cover-art::before {
          content: "";
          position: absolute;
          inset: -40%;
          background-image:
            linear-gradient(130deg, rgba(248,113,113,0.14) 0, transparent 40%, transparent 100%);
          mix-blend-mode: screen;
          opacity: 0.35;
        }

        .sigil-arcs {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          mix-blend-mode: screen;
        }
        .sigil-arcs svg {
          width: 100%;
          height: 100%;
        }

        .blood-veins {
          position: absolute;
          inset: 0;
          opacity: 0.9;
          mix-blend-mode: screen;
        }
        .blood-veins svg {
          width: 100%;
          height: 100%;
        }

        .evil-runes {
          position: absolute;
          inset: -40px;
          pointer-events: none;
          font-family: "Jujutsu Kaisen", system-ui, sans-serif;
          color: rgba(248,113,113,0.8);
          text-shadow:
            0 0 10px rgba(248,113,113,1),
            0 0 22px rgba(127,29,29,1);
          font-size: 20px;
        }
        .evil-runes span {
          position: absolute;
          animation: rune-pulse 4s ease-in-out infinite;
        }
        @keyframes rune-pulse {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        .evil-runes .r1 { top: 12%; left: 72%; }
        .evil-runes .r2 { top: 76%; left: 60%; animation-delay: 0.8s; }
        .evil-runes .r3 { top: 22%; left: 8%;  animation-delay: 1.4s; }
        .evil-runes .r4 { top: 60%; left: -4%; animation-delay: 2s; }

        .sigil-container {
          position: absolute;
          top: 46%;
          left: 52%;
          transform: translate(-50%, -50%);
          width: 210px;
          height: 210px;
          filter:
            drop-shadow(0 0 10px rgba(248,113,113,0.95))
            drop-shadow(0 0 32px rgba(185,28,28,1))
            drop-shadow(0 0 70px rgba(127,29,29,1));
          animation: sigil-pulse 3.2s ease-in-out infinite;
        }
        @keyframes sigil-pulse {
          0%, 100% {
            filter:
              drop-shadow(0 0 10px rgba(248,113,113,0.95))
              drop-shadow(0 0 32px rgba(185,28,28,1))
              drop-shadow(0 0 70px rgba(127,29,29,1));
          }
          50% {
            filter:
              drop-shadow(0 0 20px rgba(255,241,242,1))
              drop-shadow(0 0 50px rgba(248,113,113,1))
              drop-shadow(0 0 100px rgba(127,29,29,1));
          }
        }

        .sigil-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.6px solid rgba(248,113,113,0.3);
        }
        .sigil-ring--inner {
          inset: 18px;
          border-color: rgba(254,202,202,0.55);
        }

        .gem-rays {
          position: absolute;
          inset: -6px;
          opacity: 0.35;
          mix-blend-mode: screen;
        }
        .gem-rays svg {
          width: 100%;
          height: 100%;
        }

        .sigil-gem {
          position: absolute;
          inset: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sigil-gem svg {
          width: 100%;
          height: 100%;
        }

        .crescent {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid #fecaca;
          border-right-color: transparent;
          background: transparent;
          box-shadow: 0 0 10px rgba(248,113,113,0.9);
        }
        .crescent.c1 {
          top: 42px;
          left: 10px;
          transform: rotate(-35deg);
        }
        .crescent.c2 {
          bottom: 72px;
          right: 18px;
          transform: rotate(35deg);
          border-color: #fecaca;
          border-left-color: transparent;
        }

        .magic-glow {
          position: absolute;
          inset: -50px;
          pointer-events: none;
          z-index: -1;
        }
        .magic-glow::before,
        .magic-glow::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 380px;
          height: 380px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(127,29,29,0.35), transparent 70%);
        }
        .magic-glow::after {
          width: 480px;
          height: 480px;
          opacity: 0.12;
          filter: blur(6px);
        }

        .magic-particles {
          position: absolute;
          inset: -40px;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(254,242,242,0.98), transparent);
          opacity: 0.0;
          animation: particle-rise 6s ease-in-out infinite;
        }
        @keyframes particle-rise {
          0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
          15%, 85% { opacity: 0.9; }
          50%      { transform: translateY(-28px) translateX(12px); }
        }
        .particle:nth-child(1) { top: 60%; left: 4%;  animation-delay: 0s; }
        .particle:nth-child(2) { top: 24%; left: 18%; animation-delay: .8s; }
        .particle:nth-child(3) { top: 32%; right: 14%; animation-delay: 1.6s; }
        .particle:nth-child(4) { bottom: 18%; right: 6%; animation-delay: 2.4s; }
        .particle:nth-child(5) { bottom: 26%; left: 22%; animation-delay: 3.2s; }

        .jjk-cover-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 26px;
          z-index: 30;
          text-align: center;
          transform: translateZ(40px);
        }

        /* <<< THIN COVER TITLE FONT >>> */
        .jjk-cover-title {
          font-family: "Jujutsu Kaisen", system-ui, sans-serif;
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fee2e2;
          text-shadow:
            0 0 8px rgba(0,0,0,1),
            0 0 18px rgba(127,29,29,0.9);
        }
        .jjk-cover-subtitle {
          margin-top: 4px;
          font-family: "Jujutsu Kaisen", system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.85;
          color: #fecaca;
        }

        .jjk-book-wrapper {
          position: relative;
          opacity: 0;
          transform: translateY(8px) scale(.96);
          animation: book-in 0.35s ease forwards;
        }
        @keyframes book-in {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .jjk-close-btn {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 30;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          border: none;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(15,23,42,0.97);
          color: #e5e7eb;
          cursor: pointer;
          backdrop-filter: blur(6px);
          box-shadow: 0 0 16px rgba(0,0,0,0.98);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .jjk-close-btn:hover {
          background: rgba(127,29,29,0.98);
          transform: translateY(-1px);
        }
      `}</style>

      <nav className="relative z-20 h-20 border-b border-red-900/25 bg-slate-950/60 backdrop-blur">
        <div className="relative h-full px-8 flex items-center">
          <div
            className="absolute left-8 logo-glow"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "26px",
              fontWeight: 600,
              color: "#fecaca",
              letterSpacing: "0.08em"
            }}
          >
            JUJUTSU KAISEN
          </div>
          <div
            className="mx-auto flex gap-16"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "1.25rem",
              fontWeight: 400,
              letterSpacing: "0.3em"
            }}
          >
            <Link to="/" className="nav-link text-gray-200 hover:text-rose-300">
              Home
            </Link>
            <Link to="/story" className="nav-link text-gray-200 hover:text-rose-300">
              Story
            </Link>
            <Link to="/characters" className="nav-link text-gray-200 hover:text-rose-300">
              Characters
            </Link>
            <Link to="/abilities" className="nav-link text-gray-200 hover:text-rose-300">
              Abilities
            </Link>
          </div>
        </div>
      </nav>

      <div className="flipbook-container">
        {!opened && (
          <div className="jjk-cover-card" onClick={() => setOpened(true)}>
            <div className="magic-glow" />

            <div className="jjk-book-base" />
            <div className="jjk-book-pages-right" />
            <div className="jjk-book-pages-bottom" />

            <div className="jjk-book-cover">
              <div className="jjk-book-spine" />

              <div className="jjk-corner-top" />
              <div className="jjk-corner-bottom" />

              <div className="side-runes side-runes-left" />
              <div className="side-runes side-runes-right" />

              <div className="jjk-cover-art">
                <div className="sigil-arcs">
                  <svg viewBox="0 0 260 260">
                    <path
                      d="M20 220 C80 200 90 160 130 140 C170 120 210 110 240 80"
                      stroke="rgba(248,113,113,0.5)"
                      strokeWidth="2.2"
                      fill="none"
                    />
                    <path
                      d="M40 40 C110 70 130 110 160 130 C190 150 210 170 230 200"
                      stroke="rgba(248,113,113,0.38)"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <path
                      d="M40 200 C100 170 130 150 150 120"
                      stroke="rgba(252,165,165,0.34)"
                      strokeWidth="1.4"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="blood-veins">
                  <svg viewBox="0 0 260 260">
                    <path
                      d="M130 140 C120 168 96 194 68 212"
                      stroke="rgba(248,113,113,0.96)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M130 140 C150 165 182 186 214 200"
                      stroke="rgba(248,113,113,0.9)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M130 120 C118 110 88 96 64 90"
                      stroke="rgba(252,165,165,0.9)"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M130 120 C152 106 182 92 202 78"
                      stroke="rgba(252,165,165,0.85)"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="sigil-container">
                  <div className="sigil-ring" />
                  <div className="sigil-ring sigil-ring--inner" />

                  <div className="gem-rays">
                    <svg viewBox="0 0 140 140">
                      <line x1="10" y1="70" x2="130" y2="70" stroke="rgba(254,226,226,0.7)" strokeWidth="1.6" />
                      <line x1="70" y1="10" x2="70" y2="130" stroke="rgba(254,226,226,0.7)" strokeWidth="1.6" />
                    </svg>
                  </div>

                  <div className="sigil-gem">
                    <svg viewBox="0 0 140 140">
                      <defs>
                        {/* DARKER DISC GLOW */}
                        <radialGradient id="discGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#fee2e2" />
                          <stop offset="25%" stopColor="#f97373" />
                          <stop offset="60%" stopColor="#7f1d1d" />
                          <stop offset="100%" stopColor="#1b0204" />
                        </radialGradient>
                        {/* DARKER CENTER CORE */}
                        <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#fecaca" />
                          <stop offset="45%" stopColor="#f97373" />
                          <stop offset="100%" stopColor="#7f1d1d" />
                        </radialGradient>
                      </defs>

                      <circle cx="70" cy="70" r="52" fill="url(#discGlow)" opacity="0.95" />
                      <circle
                        cx="70"
                        cy="70"
                        r="54"
                        fill="none"
                        stroke="rgba(248,113,113,1)"
                        strokeWidth="2.2"
                      />

                      <defs>
                        <path
                          id="outerPetal"
                          d="M70 18 C72 26 74 32 72 40 C70 46 70 50 70 54 C68 50 68 46 66 40 C64 32 66 26 70 18 Z"
                        />
                        <path
                          id="innerPetal"
                          d="M70 34 C71.5 38 73 42 72 46 C71 50 70.5 52 70 54 C69.5 52 69 50 68 46 C67 42 68.5 38 70 34 Z"
                        />
                      </defs>

                      <g fill="#fecaca" opacity="0.9">
                        <use xlinkHref="#outerPetal" />
                        <use xlinkHref="#outerPetal" transform="rotate(45 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(90 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(135 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(180 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(225 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(270 70 70)" />
                        <use xlinkHref="#outerPetal" transform="rotate(315 70 70)" />
                      </g>

                      <g fill="#fee2e2" opacity="0.88">
                        <use xlinkHref="#innerPetal" />
                        <use xlinkHref="#innerPetal" transform="rotate(60 70 70)" />
                        <use xlinkHref="#innerPetal" transform="rotate(120 70 70)" />
                        <use xlinkHref="#innerPetal" transform="rotate(180 70 70)" />
                        <use xlinkHref="#innerPetal" transform="rotate(240 70 70)" />
                        <use xlinkHref="#innerPetal" transform="rotate(300 70 70)" />
                      </g>

                      {/* DARKER INNER DISC */}
                    {/* CLIP THE GEM TO THE INNER CIRCLE */}
<defs>
  <clipPath id="innerCircleClip">
    <circle cx="70" cy="70" r="22" />
  </clipPath>
</defs>

{/* CRYSTAL IMAGE, PERFECTLY FITTING THE CIRCLE */}
<image
  x="48"
  y="48"
  width="44"
  height="44"
  preserveAspectRatio="xMidYMid slice"
  clipPath="url(#innerCircleClip)"
  href="src/assets/red-gem.png"   // or your actual path
/>

{/* OUTLINE RING ON TOP */}
<circle
  cx="70"
  cy="70"
  r="22"
  fill="none"
  stroke="rgba(248,113,113,0.95)"
  strokeWidth="1.4"
/>
                      <polygon
                        points="70,4 76,18 70,24 64,18"
                        fill="#fee2e2"
                        opacity="0.98"
                      />
                      <polygon
                        points="70,136 76,122 70,116 64,122"
                        fill="#fee2e2"
                        opacity="0.98"
                      />
                      <polygon
                        points="4,70 18,76 24,70 18,64"
                        fill="#fee2e2"
                        opacity="0.98"
                      />
                      <polygon
                        points="136,70 122,76 116,70 122,64"
                        fill="#fee2e2"
                        opacity="0.98"
                      />
                    </svg>
                  </div>
                </div>

                <div className="crescent c1" />
                <div className="crescent c2" />

                <div className="evil-runes">
                  <span className="r1">ᚦ</span>
                  <span className="r2">ᚲ</span>
                  <span className="r3">ᛟ</span>
                  <span className="r4">ᚹ</span>
                </div>
              </div>
            </div>

            <div className="magic-particles">
              <div className="particle" />
              <div className="particle" />
              <div className="particle" />
              <div className="particle" />
              <div className="particle" />
            </div>

            <div className="jjk-cover-inner">
              <div className="jjk-cover-title">JUJUTSU KAISEN</div>
              <div className="jjk-cover-subtitle">THE CURSED POWER</div>
            </div>
          </div>
        )}

        {opened && (
          <div className="jjk-book-wrapper">
            <button className="jjk-close-btn" onClick={() => setOpened(false)}>
              Close
            </button>
            <FlipBook />
          </div>
        )}
      </div>
    </div>
  );
}
