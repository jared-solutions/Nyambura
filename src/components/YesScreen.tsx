import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Send, ArrowLeft, Heart, Gift, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import romanticHero from "@/assets/romantic-hero.jpg";
import juneVideo from "@/assets/june video.mp4";

interface YesScreenProps {
  onBack: () => void;
}

// Replace with your FormSpree form ID after creating at https://formspree.io
const FORMSPREE_URL = "https://formspree.io/f/xjgknzgp";

const YesScreen = ({ onBack }: YesScreenProps) => {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [surpriseMessage, setSurpriseMessage] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("valentine-suggestion");
    if (saved) {
      const data = JSON.parse(saved);
      setPlace(data.place || "");
      setDate(data.date ? new Date(data.date) : undefined);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!place.trim()) return;
    
    setSubmitting(true);
    
    // Save to localStorage
    const data = { place: place.trim(), date: date?.toISOString() || null };
    localStorage.setItem("valentine-suggestion", JSON.stringify(data));
    
    // Send to FormSpree (if configured)
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `${place}${date ? ` - Date: ${format(date, "PPP")}` : ""}`,
          type: "Location Suggestion",
          response: "Yes! She said yes! 💕"
        }),
      });
    } catch (error) {
      console.log("FormSpree submission skipped");
    }
    
    setSubmitting(false);
    setSubmitted(true);
  };

  const surpriseMessages = [
    "🎉 You just made my entire year!",
    "💕 Get ready for the best Valentine's Day ever!",
    "🌟 I'm so happy right now!",
    "❤️ Get ready for lots of hugs and kisses!",
    "🥰 You're the best thing that ever happened to me!",
    "💖 I promise to love you forever!",
  ];

  const handleSurprise = () => {
    setShowSurprise(true);
    setSurpriseMessage(Math.floor(Math.random() * surpriseMessages.length));
    // Reset after 5 seconds
    setTimeout(() => setShowSurprise(false), 5000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 relative z-10">
      {/* Back button */}
      <div className="w-full max-w-2xl mb-4 animate-fade-up">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors focus:outline-none"
          aria-label="Go back to proposal"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Surprise reveal overlay */}
      {showSurprise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-up">
          <div className="bg-card p-8 rounded-2xl max-w-md mx-4 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
            <p className="font-display text-2xl font-bold text-foreground mb-4">
              {surpriseMessages[surpriseMessage]}
            </p>
            <p className="font-body text-muted-foreground">
              Thank you for saying yes! 💕
            </p>
            <button
              onClick={() => setShowSurprise(false)}
              className="mt-6 px-6 py-2 rounded-full bg-primary text-primary-foreground"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Flower decorations */}
      <div className="absolute top-10 left-10 text-3xl animate-pulse-gentle">🌸</div>
      <div className="absolute top-20 right-16 text-3xl animate-pulse-gentle" style={{ animationDelay: '0.5s' }}>🌺</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }}>🌷</div>
      <div className="absolute bottom-32 right-12 text-3xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}>🌹</div>

      {/* Celebration */}
      <div className="text-5xl mb-4 animate-bounce-soft" aria-hidden="true">
        🎉💕🌸
      </div>

      <div className="card-romantic max-w-2xl w-full text-center">
        {/* June's video */}
        <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-up">
          <video
            src={juneVideo}
            autoPlay
            loop
            playsInline
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <p className="absolute bottom-4 left-0 right-0 font-display text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg">
            She said Yes! 💕
          </p>
        </div>

        {/* Surprise button */}
        <div className="mb-6 animate-fade-up delay-100">
          <button
            onClick={handleSurprise}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-pink-500 text-primary-foreground font-body font-semibold 
                       hover:scale-105 active:scale-95 transition-all duration-300 glow-primary flex items-center gap-2 mx-auto"
          >
            <Gift className="w-5 h-5" />
            Press for a Surprise!
          </button>
        </div>

        {/* Heartfelt message */}
        <div className="mb-8 animate-fade-up delay-200">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            You've Made Me the Happiest! 🥰
          </h2>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
            Thank you for saying yes, June Njeri! You have no idea how much this means to me. 
            Get ready for a day full of love, laughter, and unforgettable memories just for us. ❤️
          </p>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
            I promise to make every moment count — from the little surprises to the grand gestures.
            You deserve nothing but the best, and I'll spend every day trying to give you exactly that.
          </p>
        </div>

        {/* Love letter section */}
        <div className="bg-secondary/20 rounded-xl p-6 mb-8 text-left animate-fade-up delay-300">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">A Little Love Note</h3>
          </div>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed italic mb-3">
            June, you are the reason I wake up smiling. You are the reason I believe in forever. 
            Your kindness, your strength, your beautiful heart — they inspire me every single day.
          </p>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed italic mb-3">
            I love the way you laugh, the way you care for everyone around you, the way you 
            make even the simplest things feel magical. Being with you isn't just happiness — 
            it's home.
          </p>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed italic">
            Here's to us — to more adventures, more inside jokes, more sunsets together, 
            and more love than we can ever imagine. I love you endlessly.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-3 text-right not-italic">
            Yours, always and forever 💕
          </p>
        </div>

        {/* What I have planned */}
        <div className="mb-8 animate-fade-up delay-300">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4">
            What I Have Planned for Us 🌹
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-secondary/20 rounded-xl p-4">
              <p className="text-2xl mb-2" aria-hidden="true">🕯️</p>
              <p className="font-body text-sm font-medium text-foreground">Candlelit Dinner</p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                A cozy evening with your favorite food, just the two of us
              </p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-4">
              <p className="text-2xl mb-2" aria-hidden="true">🎁</p>
              <p className="font-body text-sm font-medium text-foreground">Surprise Gifts</p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                A few thoughtful surprises that I know will make you smile
              </p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-4">
              <p className="text-2xl mb-2" aria-hidden="true">🌅</p>
              <p className="font-body text-sm font-medium text-foreground">Sunset Together</p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Watching the sunset while I tell you all the reasons I love you
              </p>
            </div>
          </div>
        </div>

        {/* Trip suggestion section */}
        <div className="border-t border-border/50 pt-8 animate-fade-up delay-400">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            Let's Plan Our Valentine's Date 💕
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mb-6">
            I want to make this day special for us. If you could choose any place in Kenya{" "}
            <span className="font-semibold text-foreground">where would you love to go?</span>
            <br />
            <span className="text-xs">Your wish is my command ❤️</span>
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              {/* Place input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="e.g. Diani Beach, Maasai Mara..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border 
                             text-foreground placeholder:text-muted-foreground font-body
                             focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  aria-label="Suggest a place in Kenya"
                  required
                />
              </div>

              {/* Date picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full flex items-center gap-2 pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-left font-body transition-all focus:outline-none focus:ring-2 focus:ring-ring",
                      !date && "text-muted-foreground"
                    )}
                    aria-label="Pick a date to visit"
                  >
                    <CalendarIcon className="absolute left-3 w-5 h-5 text-muted-foreground" />
                    {date ? format(date, "PPP") : "When should we go?"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* Submit */}
              <button
                type="submit"
                disabled={!place.trim() || submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground 
                           font-body font-semibold glow-primary hover:scale-[1.02] active:scale-95 transition-all duration-300
                           focus:outline-none focus:ring-4 focus:ring-ring/50 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Suggestion 💕"}
              </button>
            </form>
          ) : (
            <div className="animate-fade-up bg-secondary/30 rounded-xl p-6">
              <p className="text-4xl mb-3" aria-hidden="true">🥰</p>
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                Thanks for your suggestion!
              </p>
              <p className="font-body text-muted-foreground mb-2">
                Can't wait to make it happen 😊
              </p>
              <p className="font-body text-sm text-foreground/60">
                I'm already looking into it... this might just become our next adventure together!
              </p>
              {place && (
                <p className="mt-3 font-body text-sm text-foreground/70">
                  📍 {place} {date && `• 📅 ${format(date, "PPP")}`}
                </p>
              )}
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-secondary/50 transition-colors text-sm"
              >
                ✏️ Change Location
              </button>
            </div>
          )}
        </div>

        {/* Closing message */}
        <div className="mt-8 pt-6 border-t border-border/30 animate-fade-up delay-500">
          <p className="font-display text-base md:text-lg text-foreground/60 italic">
            I love you not only for what you are, but for what I am when I am with you.
          </p>
          <p className="font-body text-sm text-primary mt-4 font-medium">
            Happy Valentine's Day, June Njeri! 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default YesScreen;
