import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export const WA_NUMBER = "962776121914";
export const waMsg = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
export const WA_DEFAULT = waMsg("أهلاً دكتور أسامه، أريد استشارة مجانية");

export function WaIcon({ size = 5 }: { size?: number }) {
  return (
    <svg className={`w-${size} h-${size}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const TikTokIcon = ({ size = 5 }: { size?: number }) => (
  <svg className={`w-${size} h-${size}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground" dir="rtl" lang="ar">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:bg-secondary focus:text-primary focus:px-4 focus:py-2 focus:font-bold focus:rounded">
        الانتقال إلى المحتوى الرئيسي
      </a>

      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm" role="navigation" aria-label="روابط سريعة">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/#contact" className="hover:text-secondary transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              تواصل معنا
            </a>
            <span className="text-primary-foreground/30" aria-hidden="true">|</span>
            <a href="https://www.facebook.com/profile.php?id=61582179417619" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors flex items-center gap-1" aria-label="فيسبوك">
              <FaFacebook className="w-3.5 h-3.5" aria-hidden="true" />
              فيسبوك
            </a>
            <span className="text-primary-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors hidden sm:flex items-center gap-1" aria-label="واتساب">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              +962776121914
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-border sticky top-0 z-40" role="banner">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <a href="/" className="text-2xl md:text-3xl font-bold text-primary tracking-tight" aria-label="الرئيسية - د. أسامه جمعه">
            د. أسامه جمعه
          </a>
          <nav className="flex items-center gap-2 md:gap-3 flex-wrap justify-center" aria-label="القائمة الرئيسية">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">الرئيسية</a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/autism" className="text-foreground hover:text-primary transition-colors font-medium text-sm">التوحد</a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/adhd" className="text-foreground hover:text-primary transition-colors font-medium text-sm">ADHD</a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/iep" className="text-foreground hover:text-primary transition-colors font-medium text-sm">خطة IEP</a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/taleem-damej" className="text-foreground hover:text-primary transition-colors font-medium text-sm hidden lg:inline">التعليم الدامج</a>
            <span className="text-muted-foreground/30 hidden lg:inline" aria-hidden="true">|</span>
            <a href="/tamhid-mubakir" className="text-foreground hover:text-primary transition-colors font-medium text-sm hidden lg:inline">التدخل المبكر</a>
            <span className="text-muted-foreground/30 hidden lg:inline" aria-hidden="true">|</span>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              className="bg-secondary text-primary hover:bg-secondary/80 transition-colors font-bold text-sm px-4 py-2 rounded-sm">
              احجز استشارة
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="bg-[#1a2638] text-white pt-14 pb-8 border-t border-white/10" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8 border-b border-white/10 pb-8">
            <div>
              <p className="text-2xl font-bold mb-2">د. أسامه جمعه</p>
              <p className="text-white/60 max-w-sm text-sm leading-relaxed">خبير في التربية الخاصة والتعليم الدامج. نسعى لتقديم أفضل الممارسات التربوية لدمج وتمكين ذوي الإعاقة في عمان والأردن.</p>
              <nav className="mt-4 flex flex-wrap gap-3 text-sm text-white/50" aria-label="روابط التذييل">
                <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
                <a href="/autism" className="hover:text-secondary transition-colors">متخصص التوحد</a>
                <a href="/adhd" className="hover:text-secondary transition-colors">ADHD وفرط الحركة</a>
                <a href="/iep" className="hover:text-secondary transition-colors">خطة IEP</a>
                <a href="/taleem-damej" className="hover:text-secondary transition-colors">التعليم الدامج</a>
                <a href="/tamhid-mubakir" className="hover:text-secondary transition-colors">التدخل المبكر</a>
                <a href="/#contact" className="hover:text-secondary transition-colors">تواصل معي</a>
              </nav>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-3">تابعنا على</p>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { href: "https://www.facebook.com/profile.php?id=61582179417619", label: "فيسبوك", icon: <FaFacebook className="w-5 h-5" aria-hidden="true" /> },
                  { href: "https://www.instagram.com/dr.osamajumaa", label: "إنستغرام", icon: <FaInstagram className="w-5 h-5" aria-hidden="true" /> },
                  { href: "https://www.youtube.com/@Dr.OsamaJumaa", label: "يوتيوب", icon: <FaYoutube className="w-5 h-5" aria-hidden="true" /> },
                  { href: "https://www.tiktok.com/@dr.osama.jomaa", label: "تيك توك", icon: <TikTokIcon /> },
                  { href: "https://x.com/Drosamajumaa", label: "تويتر", icon: <FaTwitter className="w-5 h-5" aria-hidden="true" /> },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all"
                    aria-label={`${label} (يفتح في نافذة جديدة)`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-white/40">
            <p>© {new Date().getFullYear()} د. أسامه جمعه. جميع الحقوق محفوظة. | خبير التربية الخاصة والتعليم الدامج — عمان، الأردن</p>
          </div>
        </div>
      </footer>

      <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
        aria-label="احجز استشارة مجانية عبر واتساب (يفتح في نافذة جديدة)"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-full shadow-xl font-bold text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50">
        <WaIcon size={5} />
        <span>استشارة مجانية</span>
      </a>
    </div>
  );
}
