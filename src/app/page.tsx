"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Server {
  name: string;
  icon: string;
  description: string;
  members: number;
  reviews: number;
  analytics: { bumps: number; rating: number };
}

export default function Home() {
  const [servers, setServers] = useState<Server[]>([]);
  useEffect(() => {
    fetch("/api/servers")
      .then((res) => res.json())
      .then((data) => setServers(data.servers || []));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-neutral-900 to-black">
      <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 rounded-2xl bg-white/5 shadow-xl mt-8 mb-4 backdrop-blur-md border border-white/10">
        <Image
          src="/icon-128x128.png"
          alt="Anime Discord Logo"
          width={64}
          height={64}
          className="mb-3 rounded-full shadow-lg border border-white/20"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-neutral-100 mb-2 tracking-tight">
          Anime Discord
        </h1>
        <p className="text-base sm:text-lg text-center text-neutral-300 mb-3">
          <span className="font-bold text-pink-500">Anime Discord</span> is a
          modern Discord server listing directory with advanced features:
        </p>
        <ul className="text-neutral-300 text-sm sm:text-base mb-3 list-none text-left w-full max-w-xs mx-auto space-y-1">
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-pink-500 rounded-full"></span>
            Server analytics (bumps, ratings, member stats)
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-pink-500 rounded-full"></span>
            Community reviews & feedback
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-pink-500 rounded-full"></span>
            Mobile-first, blazing fast experience
          </li>
        </ul>
        <p className="text-xs text-neutral-400 mb-2 text-center">
          All features, servers, and user data are shared with hentaidiscord.com.
        </p>
        <a
          href="https://hentaidiscord.com"
          className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold text-lg transition text-center shadow-md"
        >
          Go to Main Site (hentaidiscord.com)
        </a>
      </div>

      <section className="w-full max-w-md mx-auto bg-white/5 rounded-2xl p-4 mb-8 shadow-lg border border-white/10 backdrop-blur-md">
        <h2 className="text-xl font-bold text-pink-400 mb-3 text-center tracking-tight">
          Featured Anime Servers
        </h2>
        {servers.length === 0 ? (
          <p className="text-neutral-400 text-center">Loading servers...</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {servers.map((server, idx) => (
              <li
                key={server.name + idx}
                className="flex items-center gap-3 bg-white/10 rounded-xl p-3 shadow-sm hover:shadow-lg transition border border-white/10"
              >
                <a
                  href={`/server/${encodeURIComponent(
                    server.name.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="flex items-center gap-3 group flex-1 min-w-0"
                >
                  <Image
                    src={server.icon}
                    alt={server.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-white/20 shadow group-hover:scale-105 transition"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-neutral-100 truncate group-hover:text-pink-400 transition">
                      {server.name}
                    </div>
                    <div className="text-xs text-neutral-300 truncate">
                      {server.description}
                    </div>
                    <div className="flex gap-2 text-xs text-neutral-400 mt-1">
                      <span>👥 {server.members} members</span>
                      <span>⭐ {server.analytics.rating}</span>
                      <span>⬆️ {server.analytics.bumps} bumps</span>
                    </div>
                  </div>
                </a>
                <span className="text-xs text-pink-400 whitespace-nowrap">
                  {server.reviews} reviews
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          {/* <a
            href="https://hentaidiscord.com/categories"
            className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold text-base transition shadow mr-2"
          >
            Browse Categories
          </a> */}
          <a
            href="https://hentaidiscord.com"
            className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold text-base transition shadow"
          >
            List Your Server / Leave a Review →
          </a>
        </div>
      </section>
      <footer className="w-full text-center text-xs text-neutral-500 py-4">
        &copy; {new Date().getFullYear()} Anime Discord. All rights reserved. Not
        affiliated with Discord Inc.
      </footer>
    </main>
  );
}
