import { ArrowLeft, Heart } from "lucide-react";
import sadPuppy from "@/assets/sad-puppy.jpg";

interface NoScreenProps {
  onReconsider: () => void;
  onBack: () => void;
}

const NoScreen = ({ onReconsider, onBack }: NoScreenProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 relative z-10">
      {/* Back button */}
      <div className="w-full max-w-lg mb-4 animate-fade-up">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors focus:outline-none"
          aria-label="Go back to proposal"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      <div className="card-romantic max-w-lg w-full text-center">
        {/* Sad puppy image */}
        <div className="rounded-xl overflow-hidden mb-6 animate-fade-up">
          <img
            src={sadPuppy}
            alt="A cute sad puppy with big eyes holding a broken heart"
            className="w-full h-56 md:h-72 object-cover"
          />
        </div>

        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-up delay-200">
          Oh no, Liz Njoki! 💔
        </h1>

        <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-4 animate-fade-up delay-300">
          Looks like I'm heartbroken... but you know what? Even a "no" could never 
          change the way I feel about you.
        </p>

        <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-4 animate-fade-up delay-300">
          I'll still be here — loving you, cheering you on, and being grateful for 
          every single moment I get to spend near you. 💕
        </p>

        {/* Love declaration section */}
        <div className="bg-secondary/20 rounded-xl p-6 mb-6 text-left animate-fade-up delay-400">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">Even So, I Want You to Know...</h3>
          </div>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-3">
            You are the most incredible person I've ever met. Your strength, your warmth, 
            and your kindness make this world a better place. I'm honored just to know you.
          </p>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-3">
            Whether you're my Valentine or not, nothing changes these facts: you are 
            loved, you are appreciated, and you are absolutely irreplaceable in my life.
          </p>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
            I'll keep showing up, keep making you laugh, and keep loving you in every 
            way I know how. Because that's what you deserve — someone who never gives up on you. 🌹
          </p>
        </div>

        {/* Reasons I love you */}
        <div className="mb-6 animate-fade-up delay-400">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4">
            Just a Few Reasons I Love You 💖
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3 bg-secondary/15 rounded-lg p-3">
              <span className="text-lg" aria-hidden="true">🌟</span>
              <p className="font-body text-sm text-foreground/70">
                Your smile can brighten even the cloudiest day — it's the most beautiful thing I've ever seen
              </p>
            </div>
            <div className="flex items-start gap-3 bg-secondary/15 rounded-lg p-3">
              <span className="text-lg" aria-hidden="true">🤗</span>
              <p className="font-body text-sm text-foreground/70">
                The way you care about the people around you — your heart is genuinely made of gold
              </p>
            </div>
            <div className="flex items-start gap-3 bg-secondary/15 rounded-lg p-3">
              <span className="text-lg" aria-hidden="true">😂</span>
              <p className="font-body text-sm text-foreground/70">
                Your laugh is my favorite sound in the entire world — I'd do anything to hear it
              </p>
            </div>
            <div className="flex items-start gap-3 bg-secondary/15 rounded-lg p-3">
              <span className="text-lg" aria-hidden="true">💪</span>
              <p className="font-body text-sm text-foreground/70">
                Your strength and resilience inspire me to be better every single day
              </p>
            </div>
          </div>
        </div>

        <p className="font-display text-base text-foreground/50 italic mb-6 animate-fade-up delay-500">
          "I loved you yesterday, I love you still. I always have, I always will."
          <span className="block text-xs mt-1 not-italic text-muted-foreground">— Elaine Davis</span>
        </p>

        <p className="font-body text-sm text-muted-foreground mb-6 animate-fade-up delay-500">
          Maybe next time? I'll be right here waiting with open arms and a heart full of love. 😊
        </p>

        <button
          onClick={onReconsider}
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold
                     glow-primary hover:scale-105 active:scale-95
                     transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/50
                     animate-fade-up delay-500"
          aria-label="Reconsider and say yes"
        >
          Wait... let me reconsider! 🤔💕
        </button>
      </div>
    </div>
  );
};

export default NoScreen;
