import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import PageLayout, { waMsg, WA_DEFAULT, WaIcon } from "@/components/layout/PageLayout";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const signs = [
  "صعوبة شديدة في الجلوس أو الانتظار دوره في الفصل",
  "تشتت الانتباه بسرعة وصعوبة في إنهاء المهام",
  "فرط في الحركة والكلام بصورة غير ملائمة للسن",
  "التصرف باندفاع دون التفكير في العواقب",
  "نسيان مستمر للواجبات والأغراض المدرسية",
  "صعوبة في تنظيم الوقت والأولويات",
  "مزاجية متقلبة وانفجارات عاطفية متكررة",
  "أداء أكاديمي أقل مما يتوقعه المعلمون بكثير",
];

const strategies = [
  { title: "تقسيم المهام إلى خطوات صغيرة", desc: "بدلاً من مطالبة الطفل بإنهاء الواجب دفعة واحدة، قسّمه إلى مهام قصيرة مدتها 10-15 دقيقة مع استراحة حركية بينها." },
  { title: "روتين يومي مرئي وثابت", desc: "لوحة أو جدول مرئي على الحائط يوضح مواعيد الدراسة والأكل والنوم يُقلل القلق ويساعد الطفل على التنظيم الذاتي." },
  { title: "التعزيز الإيجابي الفوري", desc: "المدح والمكافأة الفورية عند التركيز أو إنهاء مهمة أكثر فاعلية من العقاب بعشرات المرات مع هؤلاء الأطفال." },
  { title: "تقليل مشتتات الانتباه", desc: "مكان الدراسة يجب أن يكون بعيداً عن الشاشات والضوضاء. الهدوء والترتيب في البيئة يُحسّن تركيز الطفل بشكل ملحوظ." },
  { title: "استراتيجيات الفصل الدراسي", desc: "الجلوس في المقدمة، المهام المقسّمة، الوقت الإضافي في الاختبارات، ومساعد الدعم — حقوق يعرفها الدكتور أسامه جمعه جيداً." },
  { title: "التعاون بين البيت والمدرسة", desc: "خطة موحدة يتفق عليها الوالدان والمعلم تضمن اتساق الرسائل والاستراتيجيات لتحقيق أفضل النتائج للطفل." },
];

const faqs = [
  {
    q: "هل ADHD يختفي مع الكبر؟",
    a: "ADHD ليس مرحلةً تتجاوزها تلقائياً — كثير من الأطفال يحملونه حتى المراهقة والبلوغ. لكن مع الدعم التربوي المناسب وتطوير مهارات التنظيم الذاتي، يستطيع معظمهم العيش بشكل طبيعي ومنتج. التدخل المبكر يُحدث فارقاً جوهرياً."
  },
  {
    q: "هل يحتاج طفلي ADHD إلى دواء؟",
    a: "قرار الدواء يتخذه الطبيب النفسي أو طبيب الأطفال. الدكتور أسامه جمعه يُقدم الدعم التربوي والسلوكي الذي يعمل بشكل مستقل أو مكمّل للعلاج الدوائي. كثير من الحالات تتحسن بشكل كبير بالتدخل التربوي وحده."
  },
  {
    q: "كيف أتعامل مع طفل ADHD في المنزل يومياً؟",
    a: "أهم الأسس: ثبات الروتين، وضوح التعليمات (جملة واحدة في وقت واحد)، التعزيز الفوري، فترات حركة منتظمة، وتجنب الإرهاق الجسمي قبل الدراسة. الدكتور أسامه جمعه يُدرّب الأسر على استراتيجيات تفصيلية مخصصة لكل حالة."
  },
  {
    q: "هل يحق لطفلي ADHD تسهيلات في المدرسة؟",
    a: "نعم. الأطفال ذوو ADHD يستحقون تسهيلات تربوية مثل وقت إضافي في الاختبارات، جلوس في المقدمة، تقسيم المهام. الدكتور أسامه جمعه يساعد الأسرة في التفاوض مع المدرسة والحصول على هذه الحقوق وإعداد خطة IEP مناسبة."
  },
  {
    q: "ما الفرق بين ADHD ومجرد النشاط الزائد الطبيعي؟",
    a: "كل الأطفال نشيطون — لكن ADHD يتميز بأن فرط الحركة والتشتت يؤثران سلباً ودائماً على الأداء الدراسي والعلاقات الاجتماعية في أكثر من بيئة (المنزل والمدرسة). التقييم المتخصص هو الطريقة الوحيدة للتمييز الدقيق."
  },
];

export default function AdhdPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>خبير ADHD وفرط الحركة في عمان | د. أسامه جمعه</title>
        <meta name="description" content="د. أسامه جمعه متخصص في دعم الأطفال ذوي ADHD وفرط الحركة في عمان، الأردن. استراتيجيات تربوية، خطط IEP، وتوجيه أسري. استشارة مجانية عبر واتساب." />
        <meta name="keywords" content="ADHD الأردن, فرط حركة عمان, خبير ADHD عمان, اضطراب نقص الانتباه الأردن, علاج ADHD عمان, دعم فرط الحركة, تشتت الانتباه الأردن" />
        <link rel="canonical" href="https://drosamajuma.com/adhd" />
        <meta property="og:title" content="خبير ADHD وفرط الحركة في عمان | د. أسامه جمعه" />
        <meta property="og:description" content="استراتيجيات تربوية متخصصة لأطفال ADHD في عمان. خبرة +٨ سنوات. استشارة مجانية عبر واتساب." />
        <meta property="og:url" content="https://drosamajuma.com/adhd" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "خبير ADHD وفرط الحركة في عمان — د. أسامه جمعه",
          "url": "https://drosamajuma.com/adhd",
          "about": { "@type": "MedicalCondition", "name": "اضطراب نقص الانتباه وفرط الحركة", "alternateName": "ADHD" },
          "author": { "@type": "Person", "name": "الدكتور أسامه جمعه", "url": "https://drosamajuma.com" },
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://drosamajuma.com/" },
            { "@type": "ListItem", "position": 2, "name": "ADHD وفرط الحركة", "item": "https://drosamajuma.com/adhd" }
          ]}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="adhd-h1">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/60 text-sm mb-6" aria-label="مسار التنقل">
            <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary font-bold">ADHD وفرط الحركة</span>
          </nav>
          <motion.div {...fade} className="space-y-6">
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">اضطراب نقص الانتباه وفرط الحركة — ADHD</span>
            <h1 id="adhd-h1" className="text-4xl md:text-6xl font-bold leading-tight">
              دعم الأطفال ذوي ADHD وفرط الحركة في عمان
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              طفلك لا يفتقر للقدرة — هو يحتاج البيئة الصحيحة والاستراتيجية الصحيحة. الدكتور أسامه جمعه يساعدك على بناء تلك البيئة في المنزل والمدرسة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={waMsg("أهلاً دكتور أسامه، طفلي يعاني من ADHD وأريد استشارة تربوية")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                <WaIcon size={6} />
                احجز استشارة مجانية
              </a>
              <a href="#strategies" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                استراتيجيات فورية
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 pt-2">
              <span>✓ استشارة مجانية</span>
              <span>✓ خبرة +٨ سنوات مع أطفال ADHD</span>
              <span>✓ خطط IEP متخصصة</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-20 bg-white" aria-labelledby="adhd-signs-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="adhd-signs-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">علامات ADHD عند الأطفال</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">ADHD ليس مجرد نشاط زائد — هو نمط ثابت يؤثر على الأداء الأكاديمي والاجتماعي في أكثر من بيئة</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {signs.map((sign, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-muted/20 border border-border/50 border-r-4 border-r-secondary rounded-sm">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-foreground font-medium">{sign}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section id="strategies" className="py-20 bg-muted/20" aria-labelledby="strategies-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="strategies-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">6 استراتيجيات فعّالة لدعم طفل ADHD</h2>
            <p className="text-lg text-muted-foreground">مبنية على أحدث الأبحاث ومُطبَّقة بنجاح مع مئات الأطفال في الأردن</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-7 border border-border/60 border-r-4 border-r-secondary hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-secondary text-primary font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                  <h3 className="text-lg font-bold text-primary">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade} className="mt-10 bg-secondary/10 border border-secondary/30 p-6 text-center rounded-sm">
            <p className="text-primary font-bold text-lg mb-4">تريد خطة مخصصة لطفلك؟ الدكتور أسامه يُعدّها معك خطوة بخطوة</p>
            <a href={waMsg("أهلاً دكتور أسامه، أريد خطة تربوية مخصصة لطفلي ذي ADHD")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              اطلب خطة ADHD مخصصة
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.blockquote {...fade}
            className="bg-muted/20 border border-border/50 border-r-4 border-r-secondary p-8 space-y-4 text-center">
            <div className="flex gap-1 justify-center" aria-label="تقييم 5 من 5">
              {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-secondary text-secondary" aria-hidden="true" />)}
            </div>
            <p className="text-foreground/80 italic leading-relaxed text-lg">
              "كان ابني يُخرج من الفصل كل أسبوع بسبب حركته. بعد جلستين مع الدكتور أسامه وتطبيق خطته مع المعلمة، تحسّن الوضع بشكل لم نتخيّله. الخطة كانت واقعية وعملية فعلاً."
            </p>
            <footer>
              <strong className="text-primary block">أم علي</strong>
              <span className="text-muted-foreground text-sm">عمان — طفل 8 سنوات مشخص بـ ADHD</span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20" aria-labelledby="adhd-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="adhd-faq-heading" className="text-3xl font-bold text-primary mb-4">أسئلة شائعة حول ADHD</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-border rounded-sm p-6 cursor-pointer open:shadow-md"
                itemScope itemType="https://schema.org/Question">
                <summary className="flex items-center justify-between gap-4 font-bold text-primary text-base list-none select-none" itemProp="name">
                  {q}
                  <span className="text-secondary text-2xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm" itemProp="text">{a}</p>
                </div>
              </motion.details>
            ))}
          </div>
          <motion.div {...fade} className="mt-10 text-center">
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              تواصل مع الدكتور أسامه الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">صفحات ذات صلة</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/autism", title: "متخصص التوحد", desc: "تقييم ودعم ASD" },
              { href: "/iep", title: "خطة IEP", desc: "إعداد الخطط الفردية" },
              { href: "/taleem-damej", title: "التعليم الدامج", desc: "الدمج في المدرسة العادية" },
              { href: "/tamhid-mubakir", title: "التدخل المبكر", desc: "أهمية البدء المبكر" },
            ].map(({ href, title, desc }) => (
              <a key={href} href={href} className="block p-5 bg-muted/20 border border-border/60 hover:border-secondary hover:bg-secondary/5 transition-all rounded-sm group">
                <p className="font-bold text-primary text-sm mb-1">{title}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
