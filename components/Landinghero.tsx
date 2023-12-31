"use client";
import TypewriterComponent from "typewriter-effect";

function Landinghero() {
  return (
    <>
      <div className="dark:text-white bg-[url('/ombg1.png')] bg-cover bg-center  text-stone-800/90  font-bold py-12 text-center space-y-5" 
      
      >
        <div className="text-2xl   md:text-3xl lg:text-5xl space-y-5 font-extrabold">
          <h1> The Temple Social website powered by AI</h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-900 dark:from-sky-200 dark:to-sky-800">
          <TypewriterComponent
            options={{
              strings: ["First Social Temples site.",
            "Upload Temple photos.",
            "Write on the history of temple.",
            "Upload UPI QR code for e-donations.",
            "Follow and be followed to like, repost others.",
            "AI powered to filter out spam and keep site safe."        
            
            ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Landinghero;
