import { ChevronLeft, Maximize2, Share2, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function GamePlayer({ game, onBack }) {
  const toggleFullScreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col gap-8"
    >
      <div className="flex items-center justify-between border-b-4 border-brand-ink pb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-display text-2xl uppercase text-brand-ink transition-transform hover:-translate-x-2"
        >
          <ChevronLeft className="h-6 w-6" />
          <span>Back to Arcade</span>
        </button>

        <div className="flex items-center gap-3">
          <button 
             title="Share"
             className="flex h-12 w-12 items-center justify-center border-4 border-brand-ink bg-brand-accent text-brand-ink hover:bg-brand-bg md:h-14 md:w-14"
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button 
            title="Info"
             className="flex h-12 w-12 items-center justify-center border-4 border-brand-ink bg-brand-accent text-brand-ink hover:bg-brand-bg md:h-14 md:w-14"
          >
            <Info className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden border-4 border-brand-ink bg-brand-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <iframe
          id="game-iframe"
          src={game.iframeUrl}
          className="h-full w-full border-0"
          title={game.title}
          allowFullScreen
          referrerPolicy="no-referrer"
        />
        
        <button
          onClick={toggleFullScreen}
          className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center border-4 border-brand-ink bg-brand-bg text-brand-ink transition-transform hover:scale-110 active:scale-95"
        >
          <Maximize2 className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-8 border-b-4 border-brand-ink">
        <div className="max-w-3xl">
          <div className="mb-2 flex items-center gap-4">
             <span className="border-4 border-brand-ink bg-brand-accent px-4 py-1 font-display text-xl uppercase text-brand-ink">
               {game.category}
             </span>
             <span className="font-bold text-brand-ink/40 tracking-widest uppercase text-sm">
               Online // Stable
             </span>
          </div>
          <h1 className="font-display text-6xl uppercase leading-none text-brand-ink md:text-8xl">
            {game.title}
          </h1>
          <p className="mt-6 text-xl font-bold leading-relaxed text-brand-ink/70">
            {game.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {game.tags.map(tag => (
            <span key={tag} className="border-2 border-brand-ink px-4 py-1 text-sm font-black uppercase tracking-widest text-brand-ink">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="border-4 border-brand-ink bg-brand-accent p-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-brand-ink/40">Status</h4>
            <p className="font-display text-3xl uppercase text-brand-ink mt-1">Operational</p>
        </div>
        <div className="border-4 border-brand-ink bg-brand-accent p-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-brand-ink/40">Latency</h4>
            <p className="font-display text-3xl uppercase text-brand-ink mt-1">24ms</p>
        </div>
        <div className="border-4 border-brand-ink bg-brand-accent p-6">
            <h4 className="font-display text-xl uppercase tracking-wider text-brand-ink/40">Storage</h4>
            <p className="font-display text-3xl uppercase text-brand-ink mt-1">JSON / CLOUD</p>
        </div>
      </div>
    </motion.div>
  );
}
