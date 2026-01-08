import { Link } from 'react-router-dom';

export default function AbilitiesPage(): JSX.Element {
  const abilities = [
    {
      name: "Cursed Energy",
      type: "Fundamental",
      description: "The life force derived from negative human emotions. All jujutsu sorcerers use cursed energy to cast techniques and combat curses."
    },
    {
      name: "Jujutsu Techniques",
      type: "Combat",
      description: "Specialized combat methods that allow sorcerers to channel cursed energy for various offensive and defensive purposes."
    },
    {
      name: "Infinity",
      type: "Limitless Technique",
      description: "Gojo Satoru's signature ability. Creates an infinite distance between objects, making him virtually untouchable. Can be used for both defense and offense."
    },
    {
      name: "Ten Shadows Technique",
      type: "Inherited Technique",
      description: "Megumi's powerful ability to summon divine beasts from shadows. Each shadow can be customized and upgraded with cursed energy."
    },
    {
      name: "Cursed Tool Creation",
      type: "Crafting",
      description: "The ability to imbue objects with cursed energy to create weapons and tools. These artifacts can possess various properties and effects."
    },
    {
      name: "Domain Expansion",
      type: "Advanced Technique",
      description: "A powerful technique that manifests the sorcerer's inner world as a tangible space, allowing full control over cursed energy in that domain."
    },
    {
      name: "Reverse Cursed Technique",
      type: "Healing",
      description: "The reverse application of cursed energy that allows sorcerers to heal injuries instead of causing damage. Very difficult to master."
    },
    {
      name: "Sukuna's Powers",
      type: "Cursed Spirit",
      description: "The King of Curses possesses immense destructive power, including Cleave, Dismantle, and Malevolent Shrine. Unmatched in raw strength."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
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
              rgba(239,68,68,0),
              rgba(239,68,68,0.95),
              rgba(239,68,68,0)
            );
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

          .logo-glow {
            animation: logo-glow 3.6s ease-in-out infinite;
          }

          .slide-left { animation: slide-in-left 0.7s ease-out; }
          .fade-in { animation: fade-in 1s ease-out; }

          .ability-card {
            animation: fade-in 0.6s ease-out backwards;
          }
          .ability-card:nth-child(1) { animation-delay: 0.1s; }
          .ability-card:nth-child(2) { animation-delay: 0.2s; }
          .ability-card:nth-child(3) { animation-delay: 0.3s; }
          .ability-card:nth-child(4) { animation-delay: 0.4s; }
          .ability-card:nth-child(5) { animation-delay: 0.5s; }
          .ability-card:nth-child(6) { animation-delay: 0.6s; }
          .ability-card:nth-child(7) { animation-delay: 0.7s; }
          .ability-card:nth-child(8) { animation-delay: 0.8s; }
        `}
      </style>

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

          <div
            className="mx-auto flex gap-16"
            style={{
              fontFamily: "Jujutsu Kaisen",
              fontSize: "1.25rem",
              fontWeight: 400,
              letterSpacing: "0.3em",
            }}
          >
            <Link to="/" className="nav-link text-gray-200 hover:text-red-300">Home</Link>
            <Link to="/story" className="nav-link text-gray-200 hover:text-red-300">Story</Link>
            <Link to="/characters" className="nav-link text-gray-200 hover:text-red-300">Characters</Link>
            <Link to="/abilities" className="nav-link text-gray-200 hover:text-red-300">Abilities</Link>
          </div>
        </div>
      </nav>

      <div className="slide-left px-8 lg:px-16 py-16">
        <h1
          className="text-5xl lg:text-6xl mb-12"
          style={{
            fontFamily: "Jujutsu Kaisen",
            fontWeight: 600,
            background: "linear-gradient(180deg, #b41e1eff, #ff0015ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Abilities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
          {abilities.map((ability, index) => (
            <div key={index} className="ability-card bg-slate-900/40 border border-red-900/30 rounded-lg p-6 hover:border-red-700/50 transition-colors">
              <h2 className="text-xl font-bold text-red-300 mb-2">{ability.name}</h2>
              <p className="text-sm text-red-200 mb-4 font-semibold">{ability.type}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{ability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
