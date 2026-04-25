import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer border-4 border-brand-ink bg-brand-accent transition-transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      onClick={() => onClick(game)}
    >
      <div className="relative aspect-video w-full overflow-hidden border-b-4 border-brand-ink">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/0 transition-colors group-hover:bg-brand-bg/20">
          <div className="flex h-14 w-14 items-center justify-center border-4 border-brand-ink bg-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
            <Play className="h-6 w-6 text-brand-ink fill-current" />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-2xl uppercase leading-none text-brand-ink">
            {game.title}
          </h3>
          <span className="shrink-0 border-2 border-brand-ink bg-brand-bg px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-brand-ink">
            {game.category}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm font-medium text-brand-ink/70">
          {game.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t-4 border-brand-ink pt-4">
          <div className="flex gap-2">
            {game.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-brand-ink/40">
                #{tag}
              </span>
            ))}
          </div>
          <div className="bg-brand-ink px-3 py-1 text-[10px] font-black uppercase text-brand-bg">
            Play Now
          </div>
        </div>
      </div>
    </motion.div>
  );
}
