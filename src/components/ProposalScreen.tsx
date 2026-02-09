interface ProposalScreenProps {
  onYes: () => void;
  onNo: () => void;
}

const ProposalScreen = ({ onYes, onNo }: ProposalScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
      {/* Decorative top hearts */}
      <div className="text-5xl md:text-6xl mb-4 animate-bounce-soft" aria-hidden="true">
        💖
      </div>

      <div className="card-romantic max-w-xl w-full text-center animate-fade-up">
        {/* Greeting */}
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-3">
          A Special Message For You
        </p>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-romance leading-tight mb-4">
          Hey Liz Njoki!
        </h1>

        <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-6" aria-hidden="true" />

        <p className="font-display text-xl md:text-2xl text-foreground/80 italic mb-4">
          Will you be my Valentine this year? 💖
        </p>

        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          From the very first moment I met you, my world changed. Your smile lights up 
          even my darkest days, and your laughter is the sweetest melody I've ever heard.
        </p>

        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          Every day with you feels like a gift, and I wouldn't trade a single second 
          of it for anything. You make me want to be a better person — and you make 
          every ordinary moment feel extraordinary. ✨
        </p>

        <p className="font-display text-base md:text-lg text-foreground/60 italic mb-8">
          "In all the world, there is no heart for me like yours."
          <span className="block text-xs mt-1 not-italic text-muted-foreground">— Maya Angelou</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onYes}
            className="group relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg 
                       glow-primary hover:scale-105 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-ring/50"
            aria-label="Yes, I'll be your Valentine"
          >
            <span className="relative z-10">Yes! 💕</span>
          </button>

          <button
            onClick={onNo}
            className="px-10 py-4 rounded-full border-2 border-primary/30 text-foreground/70 font-body font-medium text-lg
                       hover:bg-secondary hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-ring/50"
            aria-label="No, maybe next time"
          >
            No 😢
          </button>
        </div>
      </div>

      {/* Bottom decorative */}
      <p className="mt-8 text-muted-foreground text-sm font-body animate-fade-up delay-500">
        Choose wisely... your answer means the world to me 😉
      </p>
    </div>
  );
};

export default ProposalScreen;
