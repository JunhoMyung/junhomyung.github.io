import publications from "@/data/publications.json";
import PrintButton from "@/components/PrintButton";
import { bio, education, awards, service, teaching } from "@/data/cv";

const conferencePubs = publications.filter((p) =>
  ["Conference", "Journal"].includes(p.type)
);
const workshopPubs = publications.filter((p) =>
  ["Workshop", "Preprint"].includes(p.type)
);

function truncateAuthors(text: string): string {
  const list = text.split(", ");
  if (list.length <= 15) return text;
  const first = list.slice(0, 3);
  const last = list.slice(-3);
  const junhoIdx = list.findIndex((a) => a.includes("Junho Myung"));
  const inFirst = junhoIdx < 3;
  const inLast = junhoIdx >= list.length - 3;
  if (inFirst || inLast) {
    return [...first, `(+ ${list.length - 6} authors)`, ...last].join(", ");
  }
  const junho = list[junhoIdx];
  const before = junhoIdx - 3;
  const after = list.length - junhoIdx - 1 - 3;
  const parts = [...first];
  if (before > 0) parts.push(`(+ ${before} authors)`);
  parts.push(junho);
  if (after > 0) parts.push(`(+ ${after} authors)`);
  parts.push(...last);
  return parts.join(", ");
}

function Authors({ text }: { text: string }) {
  const truncated = truncateAuthors(text);
  const parts = truncated.split(/(Junho Myung\*?)/);
  return (
    <p className="text-xs text-gray-700 italic">
      {parts.map((part, i) =>
        part.startsWith("Junho Myung") ? <strong key={i}>{part}</strong> : part
      )}
    </p>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-base font-bold border-b border-gray-400 pb-0.5 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex-1">{left}</div>
      <span className="text-sm shrink-0 text-gray-600">{right}</span>
    </div>
  );
}

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          nav, footer, header { display: none !important; }
          * { -webkit-print-color-adjust: exact; }
          .sticky { position: static !important; }
          body { font-size: 7.5pt; line-height: 1.35; }
          h1 { font-size: 16pt !important; }
          h2 { font-size: 10pt !important; }
          p, span, div { line-height: 1.35; }
          @page { margin: 1cm 1.5cm; }
        }
      `}</style>

      <div className="no-print flex justify-end max-w-3xl mx-auto px-8 pt-6">
        <PrintButton />
      </div>

<main className="max-w-3xl mx-auto px-8 py-6 font-serif text-gray-900 text-sm leading-relaxed">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Junho Myung</h1>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-gray-600 mt-1 text-sm">
            <span>junho.myung@kaist.ac.kr</span>
            <span>·</span>
            <a href="https://scholar.google.com/citations?user=Rs6U7rgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline">Google Scholar</a>
            <span>·</span>
            <a href="https://twitter.com/JunhoMyung_" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/junho-myung-481690322" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
          </div>
        </div>

        {/* Bio */}
        <Section title="About">
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="space-y-3">
            {education.map((e, i) => (
              <Row
                key={i}
                right={e.period}
                left={
                  <div>
                    <p className="font-medium">{e.institution}</p>
                    {e.details.map((d, j) => (
                      <p key={j} className="italic text-gray-700">{d}</p>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <p className="font-medium mb-2">Conference &amp; Journal Papers</p>
          <div className="space-y-3">
            {conferencePubs.map((pub, i) => (
              <div key={i} className="flex gap-2 items-baseline break-inside-avoid">
                <span className="shrink-0 text-gray-500 w-8 text-right">[c.{conferencePubs.length - i}]</span>
                <div>
                  <p className="font-medium leading-snug">{pub.title}</p>
                  <Authors text={pub.authors} />
                  <p className="text-xs italic text-gray-600">{pub.venue} {pub.year}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-medium mt-4 mb-2">Workshop &amp; Preprint Papers</p>
          <div className="space-y-3">
            {workshopPubs.map((pub, i) => (
              <div key={i} className="flex gap-2 items-baseline break-inside-avoid">
                <span className="shrink-0 text-gray-500 w-8 text-right">[p.{workshopPubs.length - i}]</span>
                <div>
                  <p className="font-medium leading-snug">{pub.title}</p>
                  <Authors text={pub.authors} />
                  <p className="text-xs italic text-gray-600">{pub.venue} {pub.year}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section title="Awards">
          <div className="space-y-1">
            {awards.map((a, i) => (
              <Row key={i} left={<span>{a.title}</span>} right={a.year} />
            ))}
          </div>
        </Section>

        {/* Academic Service */}
        <Section title="Academic Service">
          <div className="space-y-1.5">
            {service.map((group) => (
              <Row
                key={group.role}
                left={
                  <span>
                    <span className="font-medium">{group.role}: </span>
                    {group.entries.map((e) => `${e.venue} (${e.year})`).join(", ")}
                  </span>
                }
                right=""
              />
            ))}
          </div>
        </Section>

        {/* Teaching */}
        <Section title="Teaching">
          <div className="space-y-2">
            {teaching.map((t, i) => (
              <Row
                key={i}
                right={t.period}
                left={
                  <div>
                    <p className="font-medium">{t.course}</p>
                    <p className="italic text-gray-600">{t.role}</p>
                    {"award" in t && t.award && (
                      <p className="italic text-gray-600">🏆 {t.award}</p>
                    )}
                  </div>
                }
              />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
