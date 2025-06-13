import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-12 font-sans">
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Chronochain</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Une capsule temporelle communautaire, financée par la blockchain et dédiée aux générations futures.
        </p>
        <a href="#" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-all inline-block">
          Lire le whitepaper
        </a>
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Transparence Financière</h2>
          <p className="text-gray-400">
            Tous les flux sont tracés on-chain. Les décisions sont régies par des smart contracts et votées par la DAO.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Communauté au cœur</h2>
          <p className="text-gray-400">
            Chaque membre peut proposer, voter et co-créer le contenu des capsules. Le projet est 100% participatif.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Pensé pour le futur</h2>
          <p className="text-gray-400">
            Les capsules physiques seront enfouies avec des messages, objets et souvenirs que les générations futures pourront découvrir.
          </p>
        </div>
      </section>

      <footer className="mt-24 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Chronochain. Conçu pour l'avenir.
      </footer>
    </main>
  );
}
