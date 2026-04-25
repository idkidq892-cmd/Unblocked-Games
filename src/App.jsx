import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import gamesData from './games.json';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import CategoryFilter from './components/CategoryFilter';
import GamePlayer from './components/GamePlayer';
import { APP_DESCRIPTION } from './constants';
import { Zap, TrendingUp, Clock } from 'lucide-react';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  const handleHome = () => {
    setSelectedGame(null);
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-ink selection:text-brand-bg">
      <Navbar onSearch={setSearchQuery} onHome={handleHome} />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <AnimatePresence mode="wait">
          {selectedGame ? (
            <GamePlayer 
              key="player"
              game={selectedGame} 
              onBack={() => setSelectedGame(null)} 
            />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Hero Section */}
              {searchQuery === '' && selectedCategory === 'All' && (
                <section className="relative overflow-hidden border-4 border-brand-ink bg-brand-accent p-12 md:p-24 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <div className="relative z-10 max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-6 inline-flex items-center gap-2 border-2 border-brand-ink bg-brand-bg px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-brand-ink"
                    >
                      <Zap className="h-4 w-4 fill-current" />
                      Live & Unblocked // Stable
                    </motion.div>
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="font-display text-[80px] uppercase leading-[0.85] text-brand-ink md:text-[140px] lg:text-[180px]"
                    >
                      Unblocked <br />
                      <span className="bg-brand-ink text-brand-bg px-4">Arcade.</span>
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-10 max-w-xl text-xl font-bold uppercase leading-tight tracking-tight text-brand-ink/60 md:text-2xl"
                    >
                      {APP_DESCRIPTION} V2.4.0 Engine // Ultra-low latency gameplay for precision gaming.
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-12 flex flex-wrap gap-6"
                    >
                      <button 
                         onClick={() => games.length > 0 && setSelectedGame(games[0])}
                        className="border-4 border-brand-ink bg-brand-ink px-10 py-5 font-display text-2xl uppercase text-brand-bg transition-all hover:scale-105 active:scale-95 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                      >
                        Play Now
                      </button>
                      <button className="border-4 border-brand-ink bg-brand-accent px-10 py-5 font-display text-2xl uppercase text-brand-ink transition-all hover:bg-brand-bg">
                        Random Game
                      </button>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* Browse Section */}
              <section className="space-y-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-4 border-brand-ink pb-8">
                  <div>
                    <h2 className="flex items-center gap-4 font-display text-5xl uppercase text-brand-ink md:text-7xl">
                      <TrendingUp className="h-10 w-10 text-brand-ink" />
                      Explorer
                    </h2>
                    <p className="mt-2 font-black uppercase tracking-[0.2em] text-brand-ink/40 text-xs">Awaiting Command // User Active</p>
                  </div>
                  <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <AnimatePresence mode="popLayout">
                    {filteredGames.length > 0 ? (
                      filteredGames.map((game) => (
                        <GameCard
                          key={game.id}
                          game={game}
                          onClick={setSelectedGame}
                        />
                      ))
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full border-4 border-brand-ink bg-brand-accent py-24 text-center"
                      >
                        <div className="mx-auto flex h-24 w-24 items-center justify-center border-4 border-brand-ink bg-brand-bg text-brand-ink">
                          <Clock className="h-12 w-12" />
                        </div>
                        <h3 className="mt-6 font-display text-4xl uppercase text-brand-ink">Archive Empty</h3>
                        <p className="mt-2 font-bold uppercase text-brand-ink/40 tracking-widest text-xs">Try searching a different frequency.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>

              {/* Footer Meta */}
              <footer className="border-t-4 border-brand-ink py-16 flex flex-col md:flex-row justify-between gap-8">
                 <div>
                   <p className="font-display text-4xl uppercase text-brand-ink">Nova Arcade</p>
                   <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-brand-ink/40">
                     Built for the next generation of web gaming.
                   </p>
                 </div>
                 <div className="flex flex-col gap-2 text-right md:items-end">
                   <div className="flex gap-4">
                     <span className="border-2 border-brand-ink px-2 py-1 text-[10px] font-black uppercase text-brand-ink">Terms</span>
                     <span className="border-2 border-brand-ink px-2 py-1 text-[10px] font-black uppercase text-brand-ink">Privacy</span>
                     <span className="border-2 border-brand-ink px-2 py-1 text-[10px] font-black uppercase text-brand-ink">Contact</span>
                   </div>
                   <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/20">
                     &copy; 2026 Nova Arcade // Precision Code
                   </p>
                 </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
