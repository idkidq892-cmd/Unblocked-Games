import { Gamepad2, Search } from 'lucide-react';
import { APP_NAME } from '../constants';

export default function Navbar({ onSearch, onHome }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-brand-ink bg-brand-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div 
          onClick={onHome}
          className="flex cursor-pointer items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="flex h-12 w-12 items-center justify-center border-4 border-brand-ink bg-brand-accent">
            <Gamepad2 className="h-7 w-7 text-brand-ink" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-4xl font-display uppercase tracking-tighter text-brand-ink md:text-5xl">
              {APP_NAME}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/60">
              Arcade // V2.4.0
            </span>
          </div>
        </div>

        <div className="relative hidden max-w-sm flex-1 md:block">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-ink" />
          <input
            type="text"
            placeholder="Search games..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full border-4 border-brand-ink bg-brand-accent py-3 pl-12 pr-4 font-bold uppercase text-brand-ink placeholder:text-brand-ink/30 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-black uppercase tracking-widest text-brand-ink hover:underline md:block">
            Support
          </button>
          <button className="border-4 border-brand-ink bg-brand-ink px-8 py-3 text-sm font-black uppercase tracking-widest text-brand-bg transition-transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
