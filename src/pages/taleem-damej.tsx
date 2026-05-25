import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import PageLayout, { waMsg, WA_DEFAULT, WaIcon } from "@/components/layout/PageLayout";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const benefits = [
  { title: "التطور الاجتماعي", desc: "تعلّم التفاعل مع الأقران العاديين يطوّر المهارات الاجتماعية والتواصلية بشكل طبيعي وفعّال." },
  { title: "نماذج سلوكية إيجابية", desc: "الطفل يتعلم من أقرانه، ويكتسب سلوكيات ملائمة في بيئة تعليمية طبيعية ومحفّزة." },
  { title: "احترام الذات والثقة", desc: "المشاركة في أنشطة المدرسة العادية تعزز شعور الطفل بانتمائه وقيمته ضمن المجتمع." },
  { title: "تحضير للمجتمع", desc: "الدمج المدرسي يُعدّ الطفل للاندماج في المجتمع والحياة العملية بشكل أكثر فاعلية." },
  { title: "تحفيز أكاديمي أعلى", desc: "البيئة التعليمية العادية تُوفّر توقعات أعلى وتدفع الطفل للتطور أكاديمياً وفق إمكاناته." },
  { title: "دعم للمجتمع كله", desc: "الدمج يُعلّم جميع الطلبة قيم التنوع والقبول والتعاون، مما يُثري البيئة المدرسية بأكملها." },
];

const requirements = [
  "تقييم دقيق لاحتياجات الطفل ومستواه قبل اتخاذ قرار الدمج",
  "وجود خطة IEP محكمة تُحدد الأهداف والتسهيلات المطلوبة",
  "كادر تعليمي مُدرَّب على استراتيجيات التعليم الدامج",
  "دعم تربوي مستمر من متخصص تربية خاصة",
  "تواصل منتظم بين الأسرة والمدرسة والمتخصص",
  "تعديلات في بيئة الفصل لتناسب احتياجات الطفل",
];

const faqs = [
  {
    q: "هل التعليم الدامج مناسب لكل طفل ذي إعاقة؟",
    a: "التعليم الدامج لا يناسب كل طفل تلقائياً — يعتمد على طبيعة الإعاقة ودرجتها، مستوى الدعم المتاح في المدرسة، واستعداد الكادر التعليمي. الدكتور أسامه جمعه يُجري تقييماً شاملاً لتحديد هل الدمج الكامل أو الجزئي أو البيئة المتخصصة هي الأنسب لطفلك."
  },
  {
    q: "ما الفرق بين الدمج الكامل والجزئي؟",
    a: "الدمج الكامل: الطفل يقضي كامل يومه الدراسي في الفصل العادي مع تسهيلات داعمة. الدمج الجزئي: يقضي جزءاً من اليوم في فصل التربية الخاصة والجزء الآخر مع أقرانه. الاختيار يعتمد على طبيعة احتياجات الطفل وما يخدم تطوره بشكل أفضل."
  },
  {
    q: "كيف أعرف إذا كانت مدرسة طفلي تُطبّق الدمج بشكل صحيح؟",
    a: "المدرسة الدامجة الجيدة تمتلك: كادراً مُدرَّباً على التعليم الدامج، خطط IEP فعّالة، بيئة مادية مُهيَّأة، وتواصل منتظم مع الأسرة. الدكتور أسامه جمعه يُقدم تقييماً لمدارس الدمج ويُساعد الأسر في اختيار البيئة المناسبة."
  },
  {
    q: "كيف يُساعد الدكتور أسامه في دمج طفلي؟",
    a: "يُقدم الدكتور أسامه جمعه: تقييماً أولياً للطفل، إعداد خطة IEP ملائمة للدمج، تدريب كادر المدرسة على الاستراتيجيات اللازمة، متابعة ميدانية دورية، واستشارات للأسرة طوال رحلة الدمج."
  },
  {
    q: "ما تحديات التعليم الدامج وكيف يمكن تجاوزها؟",
    a: "أبرز التحديات: عدم كفاية تدريب المعلمين، غياب الدعم المتخصص، ومقاومة البيئة المدرسية. الحل يبدأ باختيار المدرسة المناسبة، إعداد خطة IEP قوية، وضمان وجود مشرف تربوي متخصص. الدكتور أسامه جمعه يُساعدك في تجاوز كل هذه التحديات."
  },
];

export default function TaleemDamejPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>التعليم الدامج للأطفال ذوي الإعاقة في الأردن | د. أسامه جمعه</title>
        <meta name="description" content="الدكتور أسامه جمعه خبير التعليم الدامج في عمان، الأردن. يساعدك في دمج طفلك بالمدرسة العادية مع الدعم الكافي. إعداد IEP، تدريب المعلمين، ومتابعة ميدانية." />
        <meta name="keywords" content="التعليم الدامج الأردن, مدارس دامجة عمان, دمج ذوي الإعاقة, التعليم الشامل الأردن, دمج الأطفال ذوي الاحتياجات الخاصة, خبير تعليم دامج عمان" />
        <link rel="canonical" href="https://drosamajuma.com/taleem-damej" />
        <meta property="og:title" content="التعليم الدامج في الأردن | د. أسامه جمعه" />
        <meta property="og:description" content="خبير التعليم الدامج في عمان. يساعدك على دمج طفلك في المدرسة العادية مع الدعم الكامل." />
        <meta property="og:url" content="https://drosamajuma.com/taleem-damej" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "التعليم الدامج في الأردن — د. أسامه جمعه",
          "url": "https://drosamajuma.com/taleem-damej",
          "description": "خبير التعليم الدامج وإدماج الأطفال ذوي الإعاقة في المدارس العادية في عمان والأردن.",
          "author": { "@type": "Person", "name": "الدكتور أسامه جمعه", "url": "https://drosamajuma.com" },
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://drosamajuma.com/" },
            { "@type": "ListItem", "position": 2, "name": "التعليم الدامج", "item": "https://drosamajuma.com/taleem-damej" }
          ]}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="damej-h1">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/60 text-sm mb-6" aria-label="مسار التنقل">
            <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary font-bold">التعليم الدامج</span>
          </nav>
          <motion.div {...fade} className="space-y-6">
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">التعليم الدامج والتعليم الشامل</span>
            <h1 id="damej-h1" className="text-4xl md:text-6xl font-bold leading-tight">
              التعليم الدامج في الأردن — كيف تدمج طفلك بنجاح؟
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              التعليم الدامج حق لكل طفل — لكنه يحتاج تخطيطاً محكماً وخبرة متخصصة. الدكتور أسامه جمعه يُرافقك في كل خطوة لضمان دمج ناجح ومستدام لطفلك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={waMsg("أهلاً دكتور أسامه، أريد الاستفسار عن دمج طفلي في مدرسة عادية")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                <WaIcon size={6} />
                استشر الدكتور أسامه مجاناً
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                فوائد التعليم الدامج
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 pt-2">
              <span>✓ خبرة +60 مدرسة دامجة في الأردن</span>
              <span>✓ تدريب كادر تعليمي</span>
              <span>✓ متابعة ميدانية</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is inclusive education */}
      <section className="py-20 bg-white" aria-labelledby="what-damej">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fade} className="max-w-3xl mx-auto text-center space-y-6">
            <h2 id="what-damej" className="text-3xl md:text-4xl font-bold text-primary">ما هو التعليم الدامج؟</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              التعليم الدامج هو نهج تعليمي يُمكّن الأطفال ذوي الإعاقة أو الاحتياجات الخاصة من التعلم جنباً إلى جنب مع أقرانهم في الفصول الدراسية العادية، مع توفير الدعم والتعديلات المناسبة لضمان مشاركتهم الفعّالة.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              التعليم الدامج الناجح لا يعني "إلقاء الطفل في الفصل العادي" — بل يعني تهيئة البيئة التعليمية، وإعداد المعلمين، وبناء خطة دعم فردية تُراعي احتياجات الطفل الخاصة.
            </p>
            <a href={waMsg("أهلاً دكتور أسامه، أريد معرفة هل التعليم الدامج مناسب لطفلي")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              هل الدمج مناسب لطفلك؟ اسأل الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-muted/20" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">فوائد التعليم الدامج لطفلك</h2>
            <p className="text-lg text-muted-foreground">الأبحاث الدولية تُؤكد: التعليم الدامج المُدعَّم يُحقق نتائج أفضل للأطفال ذوي الإعاقة</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-7 border border-border/60 border-t-4 border-t-secondary hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white" aria-labelledby="requirements-heading">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fade} className="space-y-6">
              <h2 id="requirements-heading" className="text-3xl font-bold text-primary">شروط نجاح التعليم الدامج</h2>
              <p className="text-foreground/80 leading-relaxed">الدمج الناجح ليس صدفة — يحتاج هذه العناصر الأساسية:</p>
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 rounded-sm">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-8 space-y-6">
              <h3 className="text-2xl font-bold">الدكتور أسامه جمعه يُقدم:</h3>
              {["تقييم شامل لجاهزية الطفل للدمج",
                "إعداد خطة IEP ملائمة للبيئة الدامجة",
                "تدريب المعلمين على استراتيجيات الدمج",
                "متابعة ميدانية في المدرسة",
                "استشارات دورية للأسرة",
                "تقييم مستمر لنجاح تجربة الدمج"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                  <span className="text-primary-foreground/90 text-sm">{item}</span>
                </div>
              ))}
              <a href={waMsg("أهلاً دكتور أسامه، أريد دعم تربوي لدمج طفلي في المدرسة")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold rounded-sm transition-colors w-full justify-center mt-2">
                <WaIcon />
                ابدأ الآن
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.blockquote {...fade} className="bg-white border border-border/50 border-r-4 border-r-secondary p-8 space-y-4">
            <div className="flex gap-1" aria-label="تقييم 5 من 5">
              {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />)}
            </div>
            <p className="text-foreground/80 italic leading-relaxed">
              "حضرنا دورة التدريب التي أشرف عليها الدكتور أسامه. غيّرت نظرتنا لأساليب التعليم الدامج تماماً، وطبّقنا ما تعلمناه مع طلابنا مباشرة. مدرستنا أصبحت مرجعاً للدمج الناجح في المنطقة."
            </p>
            <footer>
              <strong className="text-primary block text-sm">معلمة تربية خاصة</strong>
              <span className="text-muted-foreground text-xs">مدرسة دامجة — عمان</span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20" aria-labelledby="damej-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="damej-faq-heading" className="text-3xl font-bold text-primary mb-4">أسئلة شائعة حول التعليم الدامج</h2>
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
              { href: "/adhd", title: "ADHD وفرط الحركة", desc: "استراتيجيات تربوية" },
              { href: "/iep", title: "خطة IEP", desc: "إعداد الخطط الفردية" },
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
