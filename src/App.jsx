import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// Impor file gambar lokal dari folder assets
import imgProject1 from './assets/EsKrim_1.jpeg';
import imgProject2 from './assets/EsKrim_2.jpeg';
import imgProject3 from './assets/EsKrim_3.jpeg';

export default function App() {
  const projectList = [
    {
      id: 1,
      title: 'Es Krim 1',
      category: 'A',
      description: 'Boleh lah🙂‍↔️',
      image: imgProject1, // Menggunakan gambar lokal dari folder assets
      tags: ['Coklat', 'Vanila', 'Strawberry']
    },
    {
      id: 2,
      title: 'Es Krim 2',
      category: 'B',
      description: 'Mayan🙂‍↔️',
      image: imgProject2, // Menggunakan gambar lokal dari folder assets
      tags: ['Vanila', 'Strawberry', 'Coklat']
    },
    {
      id: 3,
      title: 'Es Krim 3 (The Best!)',
      category: 'C',
      description: 'Pake bola-bola coklat😋',
      image: imgProject3, // Menggunakan gambar lokal dari folder assets
      tags: ['Strawberry', 'Coklat', 'Vanila']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />

      <main>
        <Hero />

        <section className="max-w-6xl mx-auto px-8 pb-16">
          <header className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              JS Kelas - B with Tiara Limbong🥰
            </h2>
            <p className="text-slate-400">
              Daftar ditampilkan menggunakan <code className="text-indigo-400">Array of Objects</code>, <code className="text-indigo-400">.map()</code>, dan <code className="text-indigo-400">Props</code>.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectList.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                tags={item.tags}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}