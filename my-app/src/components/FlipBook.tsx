import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

interface StoryPage {
  title: string;
  content: string[];
}

const storyPages: StoryPage[] = [
  {
    title: "The World of Curses",
    content: [
      "In the shadows of our world, unseen by ordinary eyes, malevolent spirits known as curses lurk in the darkness. Born from the collective fear and negative emotions of humanity, these supernatural entities pose a grave threat to the living.",
      "Only those who can manipulate cursed energy—jujutsu sorcerers—stand between humanity and total annihilation. These warriors train in secret, mastering ancient techniques passed down through generations."
    ]
  },
  {
    title: "The Vessel",
    content: [
      "Yuji Itadori was an ordinary high school student with extraordinary physical abilities. His life changed forever on a fateful night when his school became the target of a curse attack.",
      "To save his friends, Yuji consumed the finger of Ryomen Sukuna, the King of Curses—a being of unimaginable power sealed away a thousand years ago. Instead of being consumed, Yuji became Sukuna's vessel while maintaining control of his body."
    ]
  },
  {
    title: "Tokyo Jujutsu High",
    content: [
      "Under the guidance of the enigmatic Satoru Gojo, the strongest jujutsu sorcerer alive, Yuji enters Tokyo Jujutsu High. Here, he trains alongside fellow first-years Megumi Fushiguro and Nobara Kugisaki.",
      "Each possesses unique abilities: Megumi's Ten Shadows Technique allows him to summon shikigami, while Nobara wields cursed energy through her hammer and nails with deadly precision."
    ]
  },
  {
    title: "The Cursed Womb Arc",
    content: [
      "Their first major mission takes an unexpected turn when they encounter a special grade curse—a threat far beyond their capabilities. In this dire moment, Yuji makes the ultimate sacrifice.",
      "The incident reveals the harsh reality of the jujutsu world: death walks beside every sorcerer, and even the most talented can fall in an instant."
    ]
  },
  {
    title: "The Kyoto Goodwill Event",
    content: [
      "The annual exchange event between Tokyo and Kyoto Jujutsu High schools becomes a stage for political intrigue. Hidden agendas and assassination plots threaten to tear apart the fragile unity of the jujutsu society.",
      "During the chaos, a powerful cursed spirit named Hanami attacks, revealing a coordinated effort by curse users to overthrow the current order. The students must band together to survive."
    ]
  },
  {
    title: "The Shibuya Incident",
    content: [
      "Halloween night in Shibuya becomes ground zero for the most devastating attack on jujutsu society. A carefully orchestrated plan traps civilians and sorcerers alike in a deadly game.",
      "The curtain falls, sealing Gojo Satoru in the Prison Realm. With their strongest defender removed, the jujutsu world faces its darkest hour as ancient curses and curse users strike with devastating force."
    ]
  },
  {
    title: "The Culling Game",
    content: [
      "In the aftermath of Shibuya, a twisted game begins across Japan. Non-sorcerers are forcibly awakened to cursed techniques and forced to fight for survival in a battle royale designed by the ancient sorcerer Kenjaku.",
      "Yuji and his allies must navigate this deadly game, forging alliances with new players while searching for a way to free Gojo and stop Kenjaku's ultimate plan."
    ]
  },
  {
    title: "The Path Forward",
    content: [
      "As the final confrontation looms, the young sorcerers have grown into formidable warriors. They carry the weight of their fallen comrades and the hopes of humanity on their shoulders.",
      "The battle between curses and sorcerers reaches its climax. In this crucible of conflict, heroes will rise, sacrifices will be made, and the fate of both the jujutsu world and humanity itself hangs in the balance."
    ]
  }
];

type FlipBookRef = HTMLFlipBook;

const FlipBook = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const bookRef = useRef<FlipBookRef | null>(null);

  return (
    <div ref={ref as React.Ref<HTMLDivElement>}>
      <style>{`
        .bflip-book {
          margin: 0 auto;
          border-radius: 10px;
          box-shadow: 0 20px 70px rgba(0,0,0,.55), 0 0 55px rgba(139,92,246,.18);
          overflow: hidden;
        }
        .jjk-page {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          background: linear-gradient(145deg, #faf8f3 0%, #f5f0e8 100%);
        }
        .page-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 22px;
        }
        .page-title {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: .06em;
          background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        .page-divider {
          height: 2px;
          background: linear-gradient(90deg, rgba(139,92,246,0), rgba(139,92,246,.55), rgba(139,92,246,0));
          margin-bottom: 12px;
        }
        .page-text {
          flex: 1;
          overflow: auto;
          font-size: .95rem;
          line-height: 1.65;
          color: #243041;
          font-family: Georgia, serif;
        }
        .page-text p {
          margin-bottom: 10px;
          text-align: justify;
        }
        .page-number {
          margin-top: 10px;
          text-align: center;
          font-size: .8rem;
          letter-spacing: .08em;
          color: #64748b;
        }
      `}</style>
      <HTMLFlipBook
        ref={bookRef}
        className="bflip-book"
        width={470}
        height={620}
        size="stretch"
        minWidth={470}
        maxWidth={1200}
        minHeight={620}
        maxHeight={900}
        showCover={false}
        drawShadow={true}
        maxShadowOpacity={0.55}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={60}
        showPageCorners={true}
        disableFlip={false}
        mobileScrollSupport={true}
        usePortrait={false}
      >
        {storyPages.map((page, index) => (
          <div key={index} className="jjk-page">
            <div className="page-content">
              <div>
                <div className="page-title">{page.title}</div>
                <div className="page-divider" />
              </div>
              <div className="page-text">
                {page.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="page-number">{index + 1}</div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
});

FlipBook.displayName = "FlipBook";

export default FlipBook;
