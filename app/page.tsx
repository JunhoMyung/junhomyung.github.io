import Image from "next/image";
import Link from "next/link";
import NewsSection from "@/components/NewsSection";
import CVSection from "@/components/CVSection";

type Paper = {
  title: string;
  venue: string;
  paperUrl: string;
  projectUrl?: string;
  award?: string;
};

type ResearchTrack = {
  num: string;
  title: string;
  description: string;
  papers: Paper[];
};

const researchTracks: ResearchTrack[] = [
  {
    num: "01",
    title: "Culturally-Grounded LLM Evaluation",
    description:
      "Building benchmarks that capture everyday cultural knowledge across diverse languages and communities — asking whether LLMs know the world beyond the Western-centric web.",
    papers: [
      {
        title:
          "BLEnD: A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages",
        venue: "NeurIPS Datasets & Benchmarks 2024",
        paperUrl:
          "https://proceedings.neurips.cc/paper_files/paper/2024/hash/8eb88844dafefa92a26aaec9f3acad93-Abstract-Datasets_and_Benchmarks_Track.html",
        projectUrl: "https://junhomyung.github.io/BLEnD/",
        award: "Best Paper · C3NLP @ ACL 2024",
      },
      {
        title:
          "JuICE: A Benchmark for Evaluating LLM-Judge in Identifying Cultural Errors",
        venue: "arXiv 2026",
        paperUrl: "https://arxiv.org/abs/2605.26955",
        projectUrl: "https://jinjh0123.github.io/JuICE/",
      }
    ],
  },
  {
    num: "02",
    title: "Bias, Values & LLM Alignment",
    description:
      "Probing whether LLMs reflect diverse human values — examining cross-cultural biases in hate speech annotation, motivational value modeling, and sensitivity to culturally contested topics.",
    papers: [
      {
        title:
          "Exploring Cross-Cultural Differences in English Hate Speech Annotations",
        venue: "NAACL 2024",
        paperUrl: "https://aclanthology.org/2024.naacl-long.236/",
        award: "Resource Award · NAACL 2024",
      },
      {
        title:
          "Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations",
        venue: "ACL (findings) 2025",
        paperUrl: "https://aclanthology.org/2025.findings-acl.585/",
      },
    ],
  },
  {
    num: "03",
    title: "Real-World Impact of LLM Deployment",
    description:
      "Evaluating what happens when LLMs are deployed in live human contexts — surfacing unintended consequences and inequities that only emerge in practice, not in controlled benchmarks.",
    papers: [
      {
        title:
          "When Scaffolding Breaks: Student Interaction with LLM-Based Writing Support in K-12 EFL Classrooms",
        venue: "CHI 2026",
        paperUrl: "https://dl.acm.org/doi/10.1145/3772318.3791517",
        projectUrl: "https://scaffoldingbreaks.kixlab.org/",
        award: "Best Paper Award · CHI 2026",
      },
      {
        title: "RECIPE: How to Integrate ChatGPT into EFL Writing Education",
        venue: "ACM Learning @ Scale 2023 · Work in Progress",
        paperUrl: "https://dl.acm.org/doi/10.1145/3573051.3596200",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* Bio */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-10">
          <div className="flex flex-col sm:flex-row gap-12 items-start">
            <div className="shrink-0 w-44 h-44 rounded-full overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Junho Myung"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">Junho Myung</h1>
                <p className="text-gray-500 mt-1.5 text-base">PhD Student · KAIST</p>
              </div>

              <p className="text-xl italic text-gray-700 leading-snug" style={{ fontFamily: "var(--font-lora)" }}>
                LLMs trained on the web — tested against the world.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                I am a PhD student at KAIST, co-advised by Prof.{" "}
                <a
                  href="https://aliceoh9.github.io/"
                  className="underline underline-offset-2 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alice Oh
                </a>{" "}
                and Prof.{" "}
                <a
                  href="https://juhokim.com/"
                  className="underline underline-offset-2 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Juho Kim
                </a>
                . My research focuses on human-centered evaluation of large language
                models — building culturally-grounded benchmarks, probing cross-cultural
                biases and value alignment, and evaluating real-world impact when LLMs
                are deployed in live settings.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-base text-gray-500">
                <a
                  href="mailto:junho.myung@kaist.ac.kr"
                  className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                  junho.myung@kaist.ac.kr
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Rs6U7rgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5 12 0z"/>
                  </svg>
                  Google Scholar
                </a>
                <a
                  href="https://x.com/JunhoMyung_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
                <a
                  href="https://www.linkedin.com/in/junho-myung-481690322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
{/* Research */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-5">
            Selected Publications
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-3">
            Human-Centered Evaluation of Large Language Models
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-12">
            I study how LLMs perform across diverse human contexts — building culturally-grounded
            benchmarks, probing alignment with human values, and evaluating real-world impact
            when LLMs are deployed in live settings.
          </p>

          <div className="space-y-12">
            {researchTracks.map((track) => (
              <div key={track.num} className="flex gap-6">
                <span className="text-sm font-mono text-gray-300 pt-0.5 shrink-0 w-6">
                  {track.num}
                </span>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{track.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      {track.description}
                    </p>
                  </div>
                  <div className="space-y-2.5 border-l border-gray-100 pl-4">
                    {track.papers.map((paper) => (
                      <div key={paper.title}>
                        <a
                          href={paper.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-800 hover:text-gray-900 leading-snug hover:underline underline-offset-2"
                        >
                          {paper.title}
                        </a>
                        <p className="text-sm text-gray-400 mt-0.5">
                          {paper.venue}
                        </p>
                        {paper.award && (
                          <p className="text-xs text-amber-600 mt-0.5 font-medium">
                            ★ {paper.award}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/publications"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              See all publications →
            </Link>
          </div>
        </div>
      </section>

      <NewsSection />
      <CVSection />
    </main>
  );
}
