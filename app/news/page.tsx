import news from "@/data/news.json";

export default function NewsPage() {
  return (
    <main className="max-w-5xl mx-auto px-10 py-12">
      <h1 className="text-xl font-semibold text-gray-900 mb-8">News</h1>

      <div className="space-y-0">
        {news.map((item, i) => (
          <div key={i} className="flex gap-6 py-3 border-b border-gray-100 last:border-0">
            <span className="text-xs text-gray-400 shrink-0 w-24 pt-0.5">{item.date}</span>
            <p
              className="text-sm text-gray-700 leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-blue-800"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
