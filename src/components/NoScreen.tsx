import sadPuppy from "@/assets/sad-puppy.jpg";

interface NoScreenProps {
  onReconsider: () => void;
}

const NoScreen = ({ onReconsider }: NoScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10">
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

        <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6 animate-fade-up delay-300">
          Looks like I'm heartbroken... but I'll keep loving you from afar.
          Maybe next time? 😊
        </p>

        <button
          onClick={onReconsider}
          className="px-8 py-3 rounded-full border-2 border-primary/40 text-foreground/80 font-body font-medium
                     hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95
                     transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ring/50
                     animate-fade-up delay-400"
          aria-label="Reconsider and go back"
        >
          Wait... let me reconsider 🤔
        </button>
      </div>
    </div>
  );
};

export default NoScreen;
