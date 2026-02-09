import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import romanticHero from "@/assets/romantic-hero.jpg";

const YesScreen = () => {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!place.trim()) return;
    const data = { place: place.trim(), date: date?.toISOString() || null };
    localStorage.setItem("valentine-suggestion", JSON.stringify(data));
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
      {/* Celebration emoji */}
      <div className="text-5xl mb-4 animate-bounce-soft" aria-hidden="true">
        🎉
      </div>

      <div className="card-romantic max-w-2xl w-full text-center">
        {/* Hero image */}
        <div className="relative rounded-xl overflow-hidden mb-8 animate-fade-up">
          <img
            src={romanticHero}
            alt="A romantic sunset scene in Kenya with a couple holding hands"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <p className="absolute bottom-4 left-0 right-0 font-display text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg">
            She said Yes! 💕
          </p>
        </div>

        <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-8 animate-fade-up delay-200">
          Thank you for saying yes! Get ready for a day full of love, laughter,
          and unforgettable memories just for us. ❤️
        </p>

        <div className="border-t border-border/50 pt-8 animate-fade-up delay-300">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            One more thing... 🗺️
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mb-6">
            Now, just for fun, if you could pick any place{" "}
            <span className="font-semibold text-foreground">within Kenya</span>{" "}
            for us to visit this Valentine's Day, where would it be?
            <br />
            <span className="italic text-xs">(This is a joke... or maybe not 😉)</span>
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
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground 
                           font-body font-semibold glow-primary hover:scale-[1.02] active:scale-95 transition-all duration-300
                           focus:outline-none focus:ring-4 focus:ring-ring/50 disabled:opacity-50"
                disabled={!place.trim()}
              >
                <Send className="w-4 h-4" />
                Submit Suggestion
              </button>
            </form>
          ) : (
            <div className="animate-fade-up bg-secondary/30 rounded-xl p-6">
              <p className="text-4xl mb-3" aria-hidden="true">🥰</p>
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                Thanks for your suggestion!
              </p>
              <p className="font-body text-muted-foreground">
                Can't wait to make it happen 😊
              </p>
              {place && (
                <p className="mt-3 font-body text-sm text-foreground/70">
                  📍 {place} {date && `• 📅 ${format(date, "PPP")}`}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YesScreen;
