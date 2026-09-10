// src/components/Card.jsx
export default function Card({ title, category, description, image, tags }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg flex flex-col">
      {image && (
        <img src={image} alt={title} className="w-full h-44 object-cover" />
      )}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-800/40">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white mt-3 mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}