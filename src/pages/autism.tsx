import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import PageLayout, { waMsg, WA_DEFAULT, WaIcon } from "@/components/layout/PageLayout";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const signs = [
  "لا يستجيب عند مناداته باسمه بعد عمر 12 شهراً",
  "يتجنّب التواصل البصري أو لا يُحافظ عليه",
  "تأخر في الكلام أو فقدانه المفاجئ بعد اكتسابه",
  "تكرار حركات بعينها (رفرفة اليدين، التأرجح)",
  "انشغال مفرط بأشياء محددة أو روتين صارم",
  "ضعف في التفاعل الاجتماعي مع الأقران والبالغين",
  "حساسية مفرطة أو نقص في الاستجابة للأصوات أو اللمس",
  "غياب الابتسامة الاجتماعية أو مشاركة الاهتمام مع الآخرين",
];

const services = [
  { title: "تقييم شامل لاضطراب طيف التوحد", desc: "تقييم دقيق لتحديد مستوى الطفل الحالي في مجالات التواصل والسلوك والتفاعل الاجتماعي، وفق أحدث المعايير الدولية." },
  { title: "إعداد خطة تدخل فردية (IEP)", desc: "بناء خطة تعليمية مخصصة تشمل أهدافاً تواصلية وسلوكية واجتماعية قابلة للقياس ومتابعة التقدم بشكل دوري." },
  { title: "توجيه الأسرة والتدريب على الاستراتيجيات", desc: "تدريب عملي للوالدين على أساليب التعامل مع الطفل في المنزل، وتعزيز مهارات التواصل والسلوك الإيجابي." },
  { title: "التنسيق مع المدرسة والكادر التعليمي", desc: "التواصل المباشر مع معلمي الطفل وإدارة المدرسة لضمان بيئة تعليمية داعمة ومتسقة مع خطة الدعم." },
  { title: "الإشراف على برامج الدمج الصفي", desc: "متابعة ميدانية لعملية الدمج في الفصل الدراسي، وتعديل الاستراتيجيات بحسب احتياجات الطفل الفعلية." },
  { title: "استشارات نفسية وأسرية مستمرة", desc: "دعم الأسرة نفسياً وعملياً لتجاوز التحديات اليومية وبناء روتين منزلي يدعم تطور الطفل." },
];

const faqs = [
  {
    q: "ما الفرق بين التوحد البسيط والحاد؟",
    a: "اضطراب طيف التوحد (ASD) يشمل طيفاً واسعاً من الحالات. التوحد الخفيف (المستوى 1) يظهر فيه الطفل قدرة على التواصل لكن بصعوبات في التفاعل الاجتماعي. التوحد الحاد (المستوى 3) يحتاج دعماً مكثفاً في التواصل والسلوك. الدكتور أسامه جمعه يُجري تقييماً دقيقاً لتحديد المستوى ووضع خطة مناسبة لكل حالة."
  },
  {
    q: "كيف يُشخَّص التوحد عند الأطفال في الأردن؟",
    a: "التشخيص يتم من خلال تقييم متعدد التخصصات يشمل ملاحظة سلوك الطفل، مقابلات مع الأسرة، واستخدام أدوات تقييم معتمدة دولياً. الدكتور أسامه جمعه يُجري تقييماً تربوياً شاملاً ويوجه الأسرة للحصول على التشخيص الطبي الكامل من الجهات المختصة في عمان."
  },
  {
    q: "في أي عمر يظهر التوحد وهل التدخل المبكر مهم؟",
    a: "تظهر علامات التوحد عادةً قبل سن الثلاث سنوات. التدخل المبكر — قبل سن السادسة — هو الأكثر تأثيراً لأن الدماغ في هذه المرحلة يمتلك أعلى قدرة على التكيف والتعلم. كلما بدأ الدعم مبكراً، كانت النتائج أفضل."
  },
  {
    q: "هل يمكن لطفل التوحد أن يلتحق بمدرسة عادية؟",
    a: "نعم، كثير من الأطفال ذوي اضطراب طيف التوحد يستطيعون الاندماج في الفصول العادية مع توفير الدعم المناسب. الدكتور أسامه جمعه متخصص في التعليم الدامج ويُساعد في تحديد البيئة التعليمية الأنسب لكل طفل وإعداد خطة الدمج."
  },
  {
    q: "ما التوقعات الواقعية بعد برنامج الدعم؟",
    a: "النتائج تختلف من طفل لآخر حسب مستوى التوحد وعمر بدء التدخل. غالباً تتحسن مهارات التواصل وإدارة السلوك والاندماج الاجتماعي بشكل ملحوظ. الدكتور أسامه جمعه يضع أهدافاً واقعية وقابلة للقياس لكل خطة دعم."
  },
];

export default function AutismPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>متخصص اضطراب طيف التوحد في عمان | د. أسامه جمعه</title>
        <meta name="description" content="د. أسامه جمعه متخصص في دعم الأطفال ذوي اضطراب طيف التوحد (ASD) في عمان، الأردن. تقييم شامل، خطط IEP، توجيه أسري، وإشراف تربوي. استشارة مجانية عبر واتساب." />
        <meta name="keywords" content="متخصص توحد عمان, اضطراب طيف التوحد الأردن, تقييم التوحد, دعم أطفال التوحد, ASD الأردن, خبير توحد عمان, علاج التوحد الأردن, تشخيص التوحد عمان" />
        <link rel="canonical" href="https://drosamajuma.com/autism" />
        <meta property="og:title" content="متخصص اضطراب طيف التوحد في عمان | د. أسامه جمعه" />
        <meta property="og:description" content="تقييم شامل ودعم متخصص للأطفال ذوي اضطراب طيف التوحد في عمان. خبرة +٨ سنوات. استشارة مجانية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drosamajuma.com/autism" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "متخصص اضطراب طيف التوحد في عمان — د. أسامه جمعه",
          "url": "https://drosamajuma.com/autism",
          "description": "صفحة متخصصة في دعم الأطفال ذوي اضطراب طيف التوحد في عمان والأردن.",
          "about": { "@type": "MedicalCondition", "name": "اضطراب طيف التوحد", "alternateName": "Autism Spectrum Disorder ASD" },
          "author": { "@type": "Person", "name": "الدكتور أسامه جمعه", "url": "https://drosamajuma.com" },
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://drosamajuma.com/" },
            { "@type": "ListItem", "position": 2, "name": "متخصص التوحد", "item": "https://drosamajuma.com/autism" }
          ]}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="autism-h1">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/60 text-sm mb-6" aria-label="مسار التنقل">
            <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary font-bold">متخصص التوحد</span>
          </nav>
          <motion.div {...fade} className="space-y-6">
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">اضطراب طيف التوحد — ASD</span>
            <h1 id="autism-h1" className="text-4xl md:text-6xl font-bold leading-tight">
              متخصص دعم الأطفال ذوي التوحد في عمان، الأردن
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              الدكتور أسامه جمعه يقدم تقييماً شاملاً وخطط دعم فردية للأطفال ذوي اضطراب طيف التوحد. خبرة تزيد عن ٨ سنوات في العمل مع الأسر والمدارس في الأردن.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={waMsg("أهلاً دكتور أسامه، طفلي مشخص بالتوحد وأود الاستفسار عن الدعم المتاح")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                <WaIcon size={6} />
                احجز استشارة مجانية الآن
              </a>
              <a href="#signs" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                تعرف على العلامات
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 pt-2">
              <span>✓ الاستشارة الأولى مجانية</span>
              <span>✓ خبرة +٨ سنوات مع أطفال التوحد</span>
              <span>✓ رد خلال ساعة عبر واتساب</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signs Section */}
      <section id="signs" className="py-20 bg-white" aria-labelledby="signs-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="signs-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              8 علامات مبكرة لاضطراب طيف التوحد
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              إذا لاحظتَ ثلاثة أو أكثر من هذه العلامات في طفلك قبل سن ثلاث سنوات، يُنصح بطلب تقييم متخصص فوراً.
            </p>
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
          <motion.div {...fade} className="mt-10 bg-secondary/10 border border-secondary/30 p-6 text-center rounded-sm">
            <p className="text-primary font-bold text-lg mb-4">
              لاحظتَ بعض هذه العلامات في طفلك؟ لا تنتظر — التقييم المبكر هو المفتاح.
            </p>
            <a href={waMsg("أهلاً دكتور أسامه، لاحظت على طفلي بعض علامات التوحد وأريد تقييماً")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              اطلب تقييماً الآن عبر واتساب
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/20" aria-labelledby="autism-services-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="autism-services-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              خدمات دعم أطفال التوحد
            </h2>
            <p className="text-lg text-muted-foreground">خدمات متكاملة تشمل الطفل والأسرة والمدرسة في آنٍ واحد</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-7 border border-border/60 border-r-4 border-r-secondary hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div {...fade} className="space-y-6">
            <h2 className="text-3xl font-bold">طفلك يستحق أفضل دعم ممكن</h2>
            <p className="text-xl text-primary-foreground/80">الاستشارة الأولى مجانية. تواصل مع الدكتور أسامه جمعه الآن وابدأ رحلة الدعم الصحيح.</p>
            <a href={waMsg("أهلاً دكتور أسامه، أود الاستفسار عن دعم طفلي ذي اضطراب طيف التوحد")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 font-bold text-xl rounded-sm transition-colors shadow-lg">
              <WaIcon size={7} />
              راسلنا على واتساب الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-labelledby="autism-testimonials-heading">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="autism-testimonials-heading" className="text-3xl font-bold text-primary mb-4">تجارب حقيقية من أسر أطفال التوحد</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "بفضل الاستشارة مع الدكتور أسامه، فهمنا كيف نتعامل مع ابننا ذي التوحد بشكل صحيح. تغيّر كل شيء في المنزل والمدرسة خلال أشهر قليلة.", author: "أم محمد", role: "عمان — طفل ذي اضطراب طيف التوحد" },
              { text: "الدكتور أسامه أعدّ لابني خطة IEP متكاملة وتواصل مع مدرسته. رأينا تحسناً واضحاً في الكلام والتفاعل مع زملائه خلال فصل دراسي واحد.", author: "أبو يوسف", role: "الزرقاء — طفل ذي توحد مستوى 2" },
            ].map((t, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-muted/20 border border-border/50 border-r-4 border-r-secondary p-8 space-y-4">
                <div className="flex gap-1" aria-label="تقييم 5 من 5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />)}
                </div>
                <p className="text-foreground/80 italic text-sm leading-relaxed">"{t.text}"</p>
                <footer>
                  <strong className="text-primary text-sm block">{t.author}</strong>
                  <span className="text-muted-foreground text-xs">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20" aria-labelledby="autism-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="autism-faq-heading" className="text-3xl font-bold text-primary mb-4">أسئلة شائعة حول التوحد</h2>
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
            <p className="text-muted-foreground mb-4">لديك سؤال آخر؟ تواصل مع الدكتور أسامه مباشرةً</p>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              اسأل الدكتور أسامه الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">اطلع أيضاً على</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/adhd", title: "ADHD وفرط الحركة", desc: "استراتيجيات تربوية متخصصة" },
              { href: "/iep", title: "خطة IEP", desc: "إعداد وإشراف على الخطط الفردية" },
              { href: "/taleem-damej", title: "التعليم الدامج", desc: "دمج طفلك في المدرسة العادية" },
              { href: "/tamhid-mubakir", title: "التدخل المبكر", desc: "أهمية البدء المبكر" },
            ].map(({ href, title, desc }) => (
              <a key={href} href={href}
                className="block p-5 bg-muted/20 border border-border/60 hover:border-secondary hover:bg-secondary/5 transition-all rounded-sm group">
                <p className="font-bold text-primary group-hover:text-primary text-sm mb-1">{title}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
