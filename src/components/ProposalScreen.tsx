interface ProposalScreenProps {
  onYes: () => void;
  onNo: () => void;
}

const ProposalScreen = ({ onYes, onNo }: ProposalScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
      {/* Decorative top hearts */}
      <div className="text-5xl md:text-6xl mb-6 animate-bounce-soft" aria-hidden="true">
        💖
      </div>

      <div className="card-romantic max-w-lg w-full text-center animate-fade-up">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-romance leading-tight mb-6">
          Hey Liz Njoki!
        </h1>

        <p className="font-display text-xl md:text-2xl text-foreground/80 italic mb-8">
          Will you be my Valentine this year? 💖
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
      <p className="mt-10 text-muted-foreground text-sm font-body animate-fade-up delay-500">
        Choose wisely... 😉
      </p>
    </div>
  );
};

export default ProposalScreen;
