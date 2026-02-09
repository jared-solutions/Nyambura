import { useState, useEffect } from "react";
import juneNjeri from "@/assets/june njeri.jpeg";

interface ProposalScreenProps {
  onYes: () => void;
  onNo: () => void;
}

const ProposalScreen = ({ onYes, onNo }: ProposalScreenProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const valentinesDay = new Date("2026-02-14T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = valentinesDay - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
      {/* Flower decorations */}
      <div className="absolute top-10 left-10 text-3xl animate-pulse-gentle" style={{ animationDelay: '0s' }}>🌸</div>
      <div className="absolute top-20 right-16 text-3xl animate-pulse-gentle" style={{ animationDelay: '0.5s' }}>🌺</div>
      <div className="absolute top-32 left-20 text-2xl animate-pulse-gentle" style={{ animationDelay: '1s' }}>🌷</div>
      <div className="absolute top-16 right-8 text-3xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}>🌹</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-pulse-gentle" style={{ animationDelay: '2s' }}>💐</div>
      <div className="absolute bottom-32 right-12 text-3xl animate-pulse-gentle" style={{ animationDelay: '2.5s' }}>🌻</div>
      <div className="absolute bottom-16 left-1/4 text-2xl animate-pulse-gentle" style={{ animationDelay: '3s' }}>🌼</div>

      {/* June's photo */}
      <div className="mb-6 animate-fade-up">
        <img
          src={juneNjeri}
          alt="June Njeri"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-primary/20"
        />
      </div>

      {/* Decorative hearts & flowers */}
      <div className="text-5xl md:text-6xl mb-4 animate-bounce-soft" aria-hidden="true">
        💕🌸💖
      </div>

      <div className="card-romantic max-w-xl w-full text-center animate-fade-up">
        {/* Greeting */}
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
          A Special Message For You
        </p>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-romance leading-tight mb-4">
          Hey June Njeri!
        </h1>

        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-6" aria-hidden="true" />

        {/* Countdown Timer */}
        <div className="mb-6 p-4 bg-secondary/30 rounded-xl">
          <p className="font-body text-xs text-muted-foreground mb-3">Valentine's Day Countdown</p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{timeLeft.days}</p>
              <p className="font-body text-xs text-muted-foreground">Days</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{timeLeft.hours}</p>
              <p className="font-body text-xs text-muted-foreground">Hours</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{timeLeft.minutes}</p>
              <p className="font-body text-xs text-muted-foreground">Minutes</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{timeLeft.seconds}</p>
              <p className="font-body text-xs text-muted-foreground">Seconds</p>
            </div>
          </div>
        </div>

        <p className="font-display text-xl md:text-2xl text-foreground/80 italic mb-4">
          Will you be my Valentine? 💕🌸
        </p>

        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          From the very first moment I met you, my world changed. Your smile lights up 
          even my darkest days, and your laughter is the sweetest melody I've ever heard.
        </p>

        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          Every day with you feels like a gift, and I wouldn't trade a single second 
          of it for anything. You make me want to be a better person — and you make 
          every ordinary moment feel extraordinary. ✨🌹
        </p>

        <p className="font-display text-base md:text-lg text-foreground/60 italic mb-8">
          In all the world, there is no heart for me like yours. 💐
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onYes}
            className="group relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg 
                       glow-primary hover:scale-105 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-ring/50"
            aria-label="Yes, I'll be your Valentine"
          >
            <span className="relative z-10">Yes! 💕🌸</span>
          </button>

          <button
            onClick={onNo}
            className="px-10 py-4 rounded-full border-2 border-primary/30 text-foreground/70 font-body font-medium text-lg
                       hover:bg-secondary hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-ring/50"
            aria-label="No"
          >
            No 🌹
          </button>
        </div>
      </div>

      {/* Bottom decorative */}
      <p className="mt-8 text-muted-foreground text-sm font-body animate-fade-up delay-500">
        Your answer means everything to me 💖🌸
      </p>
    </div>
  );
};

export default ProposalScreen;
