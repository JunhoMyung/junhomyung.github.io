"use client";

import { useState } from "react";
import publications from "@/data/publications.json";

type Publication = typeof publications[number];

const TYPES = ["All", "Conference", "Workshop, Demos & Posters", "Journal", "Preprint"] as const;

const WORKSHOP_TYPES = new Set(["Workshop", "Work in Progress"]);

const linkClass = "flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function HuggingFaceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FFD21E" />
      <ellipse cx="8.5" cy="10.5" rx="1.2" ry="1.4" fill="#1a1a1a" />
      <ellipse cx="15.5" cy="10.5" rx="1.2" ry="1.4" fill="#1a1a1a" />
      <path d="M7.5 14.5c1.2 2 7.8 2 9 0" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ExternalLinks({ pub }: { pub: Publication }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {pub.paperUrl && (
        <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
          Paper
        </a>
      )}
      {pub.codeUrl && <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className={linkClass}><GitHubIcon />Code</a>}
      {pub.dataUrl && <a href={pub.dataUrl} target="_blank" rel="noopener noreferrer" className={linkClass}><HuggingFaceIcon />Data</a>}
      {pub.projectUrl && (
        <a href={pub.projectUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Project Website
        </a>
      )}
    </div>
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split(/(Junho Myung\*?)/);
  return (
    <p className="text-xs text-gray-500 mt-1 italic">
      {parts.map((part, i) =>
        part.startsWith("Junho Myung") ? <strong key={i} className="text-gray-700 not-italic">{part}</strong> : part
      )}
    </p>
  );
}

export default function PublicationsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All"
    ? publications
    : filter === "Workshop, Demos & Posters"
    ? publications.filter((p) => WORKSHOP_TYPES.has(p.type))
    : publications.filter((p) => p.type === filter);

  const byYear = filtered.reduce<Record<string, typeof filtered>>((acc, pub) => {
    (acc[pub.year] ??= []).push(pub);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="max-w-5xl mx-auto px-10 py-12">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Publications</h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filter === t
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">{year}</p>
            <div className="space-y-6">
              {byYear[year].map((pub, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-4">
                  <p className="text-sm leading-snug text-gray-800">{pub.title}</p>
                  <Authors text={pub.authors} />
                  <p className="text-xs text-gray-500 mt-0.5">
                    {pub.venue}
                    <span className="ml-2 inline-block px-1.5 py-0.5 bg-gray-100 rounded">{pub.type}</span>
                  </p>
                  {pub.award && (
                    <p className="text-xs text-amber-600 mt-0.5 font-medium">🏆 {pub.award}</p>
                  )}
                  <ExternalLinks pub={pub} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
