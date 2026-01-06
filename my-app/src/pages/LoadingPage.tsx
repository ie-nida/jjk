export default function LoadingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        <h1
          className="text-7xl md:text-8xl animate-pulse-slow"
          style={{
            fontFamily: "Jujutsu Kaisen",
            letterSpacing: "0.05em",
            background: "linear-gradient(180deg, #1D101A 20%, #5A191D 50%, #B41A26 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.3",
            padding: "10px 0",
          }}
        >
          Jujutsu Kaisen
        </h1>

        <h2 className="text-white text-2xl tracking-[0.5em] font-light">
          LOADING
        </h2>
      </div>
    </div>
  );
}
