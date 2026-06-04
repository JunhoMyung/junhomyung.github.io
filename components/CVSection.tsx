import { education, awards, service, teaching } from "@/data/cv";


function SubHeading({ label }: { label: string }) {
  return <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-3">{label}</p>;
}

export default function CVSection() {
  return (
    <section className="py-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-10">
          CV
        </p>

        <div className="space-y-10">
          <div>
            <SubHeading label="Education" />
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="text-sm text-gray-800">{e.institution}</p>
                    {e.details.map((d, j) => (
                      <p key={j} className="text-sm text-gray-500 italic">{d}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 shrink-0">{e.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading label="Awards" />
            <div className="space-y-2">
              {awards.map((a, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                  <p className="text-sm text-gray-800">{a.title}</p>
                  <p className="text-sm text-gray-400 shrink-0">{a.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading label="Academic Service" />
            <div className="space-y-4">
              {service.map((group) => (
                <div key={group.role} className="flex flex-col sm:flex-row sm:gap-6 gap-0.5">
                  <p className="text-sm text-gray-500 shrink-0 w-28">{group.role}</p>
                  <p className="text-sm text-gray-800">
                    {group.entries.map((e) => `${e.venue} (${e.year})`).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading label="Teaching" />
            <div className="space-y-4">
              {teaching.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                  <div>
                    <p className="text-sm text-gray-800">{t.course}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    {"award" in t && t.award && (
                      <p className="text-sm text-gray-500 italic">🏆 {t.award}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 shrink-0">{t.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
