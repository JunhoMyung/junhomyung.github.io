import Link from "next/link";
import news from "@/data/news.json";

export default function NewsSection() {
  const recent = news.slice(0, 5);

  return (
    <section className="py-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-5">
          News
        </p>

        <div className="space-y-0">
          {recent.map((item, i) => (
            <div key={i} className="flex gap-8 py-3.5 border-b border-gray-200 last:border-0">
              <span className="text-sm text-gray-400 shrink-0 w-28 pt-0.5">{item.date}</span>
              <p
                className="text-sm text-gray-700 leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-blue-800"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/news"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            See all news →
          </Link>
        </div>
      </div>
    </section>
  );
}
