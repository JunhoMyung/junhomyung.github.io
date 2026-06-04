export default function PrintButton() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm px-4 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
    >
      Open PDF
    </a>
  );
}
