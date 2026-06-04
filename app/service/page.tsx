"use client";

import { useEffect, useState } from "react";
import { fetchService, ServiceItem } from "@/lib/sheets";

const SHEET_CSV_URL = process.env.NEXT_PUBLIC_SERVICE_CSV_URL ?? "";

export default function ServicePage() {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!SHEET_CSV_URL) {
      setError("Service sheet URL not configured. Set NEXT_PUBLIC_SERVICE_CSV_URL.");
      setLoading(false);
      return;
    }
    fetchService(SHEET_CSV_URL)
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const grouped = items.reduce<Record<string, ServiceItem[]>>((acc, item) => {
    (acc[item.role] ??= []).push(item);
    return acc;
  }, {});

  return (
    <main className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-xl font-semibold text-gray-900 mb-8">Academic Service</h1>

      {loading && <p className="text-sm text-gray-400">Loading...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="space-y-8">
        {Object.entries(grouped).map(([role, entries]) => (
          <div key={role}>
            <h2 className="text-sm font-medium text-gray-900 mb-3">{role}</h2>
            <div className="space-y-1">
              {entries.map((e, i) => (
                <div key={i} className="flex justify-between text-sm text-gray-600">
                  <span>{e.venue}</span>
                  <span className="text-gray-400">{e.year}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
