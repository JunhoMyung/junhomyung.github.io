export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Conference" | "Workshop" | "Journal" | "Preprint";
  paperUrl: string;
  codeUrl: string;
  dataUrl: string;
  projectUrl: string;
  highlighted: boolean;
};

export type NewsItem = {
  date: string;
  content: string;
};

export type ServiceItem = {
  role: string;
  venue: string;
  year: string;
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((ch === "\n" || (ch === "\r" && text[i + 1] === "\n")) && !inQuotes) {
      if (ch === "\r") i++;
      row.push(current.trim());
      rows.push(row);
      row = [];
      current = "";
    } else {
      current += ch;
    }
  }
  if (current || row.length) {
    row.push(current.trim());
    rows.push(row);
  }
  return rows;
}

function csvToObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.toLowerCase().replace(/\s+/g, "_"));
  return rows.slice(1).filter((r) => r.some((c) => c)).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] ?? "";
    });
    return obj;
  });
}

async function fetchSheet(url: string): Promise<Record<string, string>[]> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch sheet: ${res.status}`);
  const text = await res.text();
  return csvToObjects(parseCsv(text));
}

export async function fetchPublications(csvUrl: string): Promise<Publication[]> {
  const rows = await fetchSheet(csvUrl);
  return rows.map((r) => ({
    title: r["title"] ?? "",
    authors: r["authors"] ?? "",
    venue: r["venue"] ?? "",
    year: r["year"] ?? "",
    type: (r["type"] as Publication["type"]) ?? "Conference",
    paperUrl: r["paper_url"] ?? "",
    codeUrl: r["code_url"] ?? "",
    dataUrl: r["data_url"] ?? "",
    projectUrl: r["project_url"] ?? "",
    highlighted: r["highlighted"]?.toLowerCase() === "true",
  }));
}

export async function fetchNews(csvUrl: string): Promise<NewsItem[]> {
  const rows = await fetchSheet(csvUrl);
  return rows.map((r) => ({
    date: r["date"] ?? "",
    content: r["content"] ?? "",
  }));
}

export async function fetchService(csvUrl: string): Promise<ServiceItem[]> {
  const rows = await fetchSheet(csvUrl);
  return rows.map((r) => ({
    role: r["role"] ?? "",
    venue: r["venue"] ?? "",
    year: r["year"] ?? "",
  }));
}
