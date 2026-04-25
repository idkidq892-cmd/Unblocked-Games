import { CATEGORIES } from '../constants';

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 py-4">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`border-4 border-brand-ink px-6 py-2 font-display text-2xl uppercase transition-all ${
            selected === category
              ? 'bg-brand-ink text-brand-bg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
              : 'bg-brand-accent text-brand-ink hover:bg-brand-bg'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
