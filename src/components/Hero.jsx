import { useState } from 'react';

export default function Hero() {
  const [likes, setLikes] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 relative">
      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 rounded-full border border-indigo-800/50 mb-6">
        Vite + React + Tailwind CSS
      </span>
      
      <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight mb-6 text-white">
        Selamat Datang, TiaraJS! 🪴
      </h1>
      
      <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8">
        Klik tombol di bawah for liat efek interaktif React!
      </p>

      {/* Tombol Interaktif */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition shadow-lg shadow-indigo-600/30 active:scale-95 cursor-pointer"
        >
          Mulai Sekarang
        </button>

        <button 
          onClick={() => setLikes(likes + 1)}
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg transition border border-slate-700 active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>❤️ Like</span>
          <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">{likes}</span>
        </button>
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full text-left shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">🎉 Fitur Interaktif Aktif!</h3>
            <p className="text-slate-400 text-sm mb-6">
              Pop-up ini muncul karena perubahan <code className="text-indigo-400">state</code> pada React. Kamu bisa lanjut bikin form login atau navigasi di sini.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition cursor-pointer"
            >
              Tutup Modal
            </button>
          </div>
        </div>
      )}
    </section>
  );
}