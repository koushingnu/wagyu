// src/components/Common/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} 和牛ストール All Rights Reserved.
        </div>
        <div className="flex gap-4">
          {/* SNSや外部リンクをここに */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D33C19]"
          >
            Instagram
          </a>
          <a href="mailto:info@example.com" className="hover:text-[#D33C19]">
            お問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
}
