import { useState, useEffect } from "react";
import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import sadPuppy from "@/assets/sad-puppy.jpg";

interface NoScreenProps {
  onReconsider: () => void;
  onBack: () => void;
}

// Replace with your FormSpree form ID after creating at https://formspree.io
const FORMSPREE_URL = "https://formspree.io/f/xjgknzgp";

const NoScreen = ({ onReconsider, onBack }: NoScreenProps) => {
  const [reason, setReason] = useState("");
  const [reasonSubmitted, setReasonSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("valentine-no-reason");
    if (saved) {
      setReasonSubmitted(true);
    }
  }, []);

  const handleSubmitReason = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;
    
    setSubmitting(true);
    
    // Save to localStorage
    localStorage.setItem("valentine-no-reason", reason.trim());
    
    // Send to FormSpree (if configured)
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: reason,
          type: "Reason for saying No",
          response: "No, I won't be your Valentine"
        }),
      });
    } catch (error) {
      console.log("FormSpree submission skipped");
    }
    
    setSubmitting(false);
    setReasonSubmitted(true);
  };

  const handleClearReason = () => {
    localStorage.removeItem("valentine-no-reason");
    setReasonSubmitted(false);
    setReason("");
  };

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

      {/* Flower decorations */}
      <div className="absolute top-10 left-10 text-3xl animate-pulse-gentle">🥀</div>
      <div className="absolute top-20 right-16 text-3xl animate-pulse-gentle" style={{ animationDelay: '0.5s' }}>🌹</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }}>🩷</div>
      <div className="absolute bottom-32 right-12 text-3xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}>💔</div>

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
          Oh no, June Njeri! 💔
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

        {/* Give a Reason section */}
        <div className="border-t border-border/50 pt-6 mb-6 animate-fade-up delay-400">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">Want to Tell Me Why?</h3>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-4">
            If you'd like, you can share your reason. I'll understand. 💙
          </p>

          {!reasonSubmitted ? (
            <form onSubmit={handleSubmitReason} className="space-y-3">
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell me why..."
                className="w-full p-3 rounded-xl bg-secondary/50 border border-border 
                           text-foreground placeholder:text-muted-foreground font-body
                           focus:outline-none focus:ring-2 focus:ring-ring transition-all
                           resize-none h-24"
                aria-label="Tell me why you said no"
              />
              <button
                type="submit"
                disabled={!reason.trim() || submitting}
                className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground 
                           font-body font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300
                           focus:outline-none focus:ring-4 focus:ring-ring/50 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Reason 💌"}
              </button>
            </form>
          ) : (
            <div className="animate-fade-up bg-secondary/30 rounded-xl p-4">
              <p className="font-body text-sm text-foreground mb-2">
                📝 <span className="font-semibold">Your reason:</span>
              </p>
              <p className="font-body text-sm text-muted-foreground italic">
                "{reason}"
              </p>
              <button
                onClick={handleClearReason}
                className="mt-3 text-xs text-muted-foreground hover:text-foreground underline"
              >
                Change my reason
              </button>
            </div>
          )}
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
          I loved you yesterday, I love you still. I always have, I always will.
        </p>

        <p className="font-body text-sm text-muted-foreground mb-6 animate-fade-up delay-500">
          I'll always be here for you, hoping and believing. 💕
        </p>

        <button
          onClick={onReconsider}
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold
                     glow-primary hover:scale-105 active:scale-95
                     transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/50
                     animate-fade-up delay-500"
          aria-label="Reconsider and say yes"
        >
          I've Changed My Mind 💕
        </button>
      </div>
    </div>
  );
};

export default NoScreen;
