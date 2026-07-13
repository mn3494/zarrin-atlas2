import { Gem, MessageCircle, Instagram, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-600/15 bg-obsidian-500">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#hero" className="flex items-center gap-2 font-display text-xl text-ivory">
              <Gem className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
              <span>{siteConfig.name}</span>
            </a>
            <p className="mt-4 text-sm leading-7 text-muted">
              میراث زرگری ایرانی، بازآفرینی‌شده برای امروز.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساپ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/25 text-gold-400 transition-colors hover:border-gold-400"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">دسترسی سریع</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {siteConfig.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-gold-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">دسته‌بندی‌ها</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {["انگشتر", "گردنبند", "دستبند", "گوشواره", "سکه طلا"].map((c) => (
                <li key={c}>
                  <a href="#categories" className="text-sm text-muted transition-colors hover:text-gold-400">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-ivory">ارتباط با ما</h3>
            <p className="mt-5 text-sm text-muted" dir="ltr">
              {siteConfig.contact.phone}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {siteConfig.contact.address}
            </p>
          </div>
        </div>

        <div className="gold-thread mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. تمامی حقوق محفوظ است.</p>
          <p>ساخته‌شده با عشق به هنر ایرانی</p>
        </div>
      </div>
    </footer>
  );
}
