import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import PageLayout, { waMsg, WA_DEFAULT, WaIcon } from "@/components/layout/PageLayout";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const warningSignsByAge = [
  {
    age: "قبل عمر 12 شهراً",
    signs: [
      "لا يستجيب للأصوات أو عند النداء باسمه",
      "لا يُصدر أصواتاً ومناغاة",
      "لا يبتسم أو يُعبّر بوجهه",
    ]
  },
  {
    age: "بين 12 و 24 شهراً",
    signs: [
      "لم يقل كلمة واحدة بعمر 16 شهراً",
      "لا يُشير بإصبعه للأشياء",
      "لا يُقلّد الآخرين أو لا يلعب ألعاب التظاهر",
    ]
  },
  {
    age: "بين 2 و 3 سنوات",
    signs: [
      "لا يجمع كلمتين معاً",
      "يفقد مهارات كان اكتسبها من قبل",
      "لا يُفهم من قِبَل ذويه في معظم الوقت",
    ]
  },
  {
    age: "بين 3 و 5 سنوات",
    signs: [
      "لا يستطيع إتباع تعليمات بسيطة",
      "لا يُشارك في اللعب مع أقرانه",
      "صعوبة واضحة في فهم المفاهيم الأساسية",
    ]
  },
];

const services = [
  { title: "تقييم نمائي مبكر شامل", desc: "تقييم مستوى الطفل في مجالات اللغة والتواصل والحركة والمعرفة والتفاعل الاجتماعي، وتحديد مجالات الاحتياج بدقة." },
  { title: "توجيه الأسرة فوراً", desc: "إرشاد الوالدين بالخطوات العملية الفورية التي يمكن تطبيقها في المنزل لدعم تطور الطفل قبل انتظار الخدمات الرسمية." },
  { title: "خطة تدخل مبكرة مخصصة", desc: "إعداد برنامج دعم فردي يُحدد الأولويات والأهداف والخدمات المطلوبة (نطق، سلوكي، تعليمي) لكل طفل." },
  { title: "التنسيق مع فريق التدخل المبكر", desc: "التواصل مع معالجي النطق والمعالجين الوظيفيين وغيرهم لضمان خطة دعم متكاملة وغير متضاربة." },
  { title: "التوجيه للموارد المناسبة", desc: "إرشاد الأسرة لمراكز التدخل المبكر والمدارس والبرامج المناسبة المتوفرة في عمان والأردن." },
  { title: "متابعة التقدم الدورية", desc: "تقييم منتظم لمدى تقدم الطفل وتعديل خطة الدعم بحسب الاستجابة الفعلية لضمان استمرار التطور." },
];

const faqs = [
  {
    q: "ما هو التدخل المبكر بالضبط؟",
    a: "التدخل المبكر هو تقديم الخدمات التربوية والعلاجية للأطفال الذين يُظهرون تأخراً في النمو أو إعاقة، في أقرب وقت ممكن بعد الاكتشاف — عادةً قبل سن السادسة. يشمل: تقييم نمائي، برامج تعليمية مكثفة، معالجة نطق، دعم سلوكي، وتوجيه الأسرة."
  },
  {
    q: "لماذا التدخل المبكر أهم من التأخر حتى السن الدراسية؟",
    a: "الدراسات العلمية تُثبت بوضوح: الدماغ في السنوات الأولى (0-6 سنوات) يمتلك أعلى قدرة على التكيف والتعلم. التدخل في هذه المرحلة يُحسّن النتائج بشكل جذري — ما يستغرق شهراً في عمر سنتين قد يستغرق سنة أو أكثر في عمر 8 سنوات."
  },
  {
    q: "طفلي عمره 18 شهراً ولا يتكلم بعد — هل هذا مثير للقلق؟",
    a: "تأخر الكلام بعمر 18 شهراً يستحق تقييماً متخصصاً، خاصةً إذا رافقه ضعف في التواصل البصري أو اللعب أو التفاعل الاجتماعي. لا تنتظر حتى 'ينضج' — التقييم المبكر إما يُطمئنك أو يُمكّنك من البدء في الدعم الصحيح في الوقت الصحيح."
  },
  {
    q: "كيف أُجري تقييماً مبكراً لطفلي في عمان؟",
    a: "تواصل مع الدكتور أسامه جمعه عبر واتساب وأخبره باسم طفلك وعمره والقلق الذي لاحظته. سيرشدك لأفضل الخطوات — سواء كان تقييماً مباشراً أو إحالة لمتخصص آخر. الاستشارة الأولى مجانية."
  },
  {
    q: "هل يمكن للتدخل المبكر أن 'يُعالج' التوحد أو ADHD؟",
    a: "التدخل المبكر لا يُزيل الإعاقة لكنه يُحسّن المهارات ويُقلّل التأثيرات السلبية بشكل جوهري. الأطفال ذوو التوحد الذين تلقّوا تدخلاً مبكراً مكثفاً حققوا نتائج أكاديمية واجتماعية تفوق توقعات تشخيصهم الأولي بكثير."
  },
];

export default function TamhidMubakirPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>التدخل المبكر للأطفال ذوي الإعاقة في الأردن | د. أسامه جمعه</title>
        <meta name="description" content="الدكتور أسامه جمعه متخصص في التدخل المبكر للأطفال ذوي التأخر النمائي والإعاقة في عمان. تقييم مبكر، خطط دعم، وتوجيه أسري. الوقت هو كل شيء — تواصل الآن." />
        <meta name="keywords" content="تدخل مبكر الأردن, تدخل مبكر عمان, تأخر نمائي الأردن, تأخر كلامي عمان, برنامج تدخل مبكر, دعم مبكر الأطفال ذوي الإعاقة, تقييم نمائي عمان" />
        <link rel="canonical" href="https://drosamajuma.com/tamhid-mubakir" />
        <meta property="og:title" content="التدخل المبكر للأطفال في عمان | د. أسامه جمعه" />
        <meta property="og:description" content="تقييم مبكر وخطط دعم للأطفال ذوي التأخر النمائي في عمان. الوقت هو كل شيء — استشارة مجانية." />
        <meta property="og:url" content="https://drosamajuma.com/tamhid-mubakir" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "التدخل المبكر للأطفال ذوي الإعاقة في الأردن — د. أسامه جمعه",
          "url": "https://drosamajuma.com/tamhid-mubakir",
          "description": "خدمات التدخل المبكر والتقييم النمائي للأطفال ذوي الإعاقة أو التأخر في النمو في عمان والأردن.",
          "author": { "@type": "Person", "name": "الدكتور أسامه جمعه", "url": "https://drosamajuma.com" },
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://drosamajuma.com/" },
            { "@type": "ListItem", "position": 2, "name": "التدخل المبكر", "item": "https://drosamajuma.com/tamhid-mubakir" }
          ]}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="tamhid-h1">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/60 text-sm mb-6" aria-label="مسار التنقل">
            <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary font-bold">التدخل المبكر</span>
          </nav>
          <motion.div {...fade} className="space-y-6">
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">التدخل المبكر — Early Intervention</span>
            <h1 id="tamhid-h1" className="text-4xl md:text-6xl font-bold leading-tight">
              التدخل المبكر في الأردن — الوقت هو كل شيء
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              كل شهر يمرّ دون تدخل مبكر هو فرصة ضائعة. الدكتور أسامه جمعه يُساعدك في التقييم الفوري ووضع خطة دعم تُحدث فارقاً حقيقياً في حياة طفلك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={waMsg("أهلاً دكتور أسامه، طفلي يعاني من تأخر نمائي وأريد تقييماً مبكراً")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                <WaIcon size={6} />
                اطلب تقييماً مبكراً الآن
              </a>
              <a href="#signs" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                علامات التأخر النمائي
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 pt-2">
              <span>✓ استشارة أولى مجانية</span>
              <span>✓ تقييم سريع وشامل</span>
              <span>✓ خطة دعم فورية</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why early */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "85%", label: "نمو الدماغ", desc: "يحدث خلال السنوات الخمس الأولى من العمر — الفرصة الذهبية للتأثير الإيجابي." },
              { num: "3x", label: "أسرع تعلّماً", desc: "الطفل في عمر سنتين يتعلم بسرعة ثلاثة أضعاف مقارنةً بعمر 8 سنوات." },
              { num: "+٨", label: "سنوات خبرة", desc: "يمتلكها الدكتور أسامه جمعه في التقييم المبكر ودعم الأطفال في الأردن." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-muted/20 border border-border/50 border-t-4 border-t-secondary">
                <div className="text-5xl font-bold text-secondary mb-2">{s.num}</div>
                <div className="text-lg font-bold text-primary mb-3">{s.label}</div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs by age */}
      <section id="signs" className="py-20 bg-muted/20" aria-labelledby="signs-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="signs-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">علامات تأخر النمو حسب العمر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              لاحظتَ أياً من هذه العلامات في طفلك؟ لا تتردد — التقييم المبكر لا يضرّ، وعدمه قد يُؤخّر الدعم الضروري.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {warningSignsByAge.map((group, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-border/60 border-r-4 border-r-secondary p-7">
                <h3 className="text-lg font-bold text-primary mb-4 border-b border-border/40 pb-3">{group.age}</h3>
                <ul className="space-y-3">
                  {group.signs.map((sign, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground/80 text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade} className="mt-10 bg-secondary/10 border border-secondary/30 p-6 text-center rounded-sm">
            <p className="text-primary font-bold text-lg mb-4">
              إذا رأيتَ أياً من هذه العلامات — لا تنتظر. تواصل مع الدكتور أسامه جمعه الآن.
            </p>
            <a href={waMsg("أهلاً دكتور أسامه، لاحظت تأخراً في نمو طفلي وأريد تقييماً مبكراً")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold rounded-sm transition-colors">
              <WaIcon />
              اطلب تقييماً مبكراً الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" aria-labelledby="tamhid-services-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="tamhid-services-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">خدمات التدخل المبكر مع الدكتور أسامه جمعه</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-muted/20 border border-border/60 border-r-4 border-r-secondary p-7 hover:bg-white hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div {...fade} className="space-y-6">
            <h2 className="text-3xl font-bold">لا تنتظر أكثر</h2>
            <p className="text-xl text-primary-foreground/80">كل يوم يمر دون تقييم أو دعم هو يوم من إمكانيات طفلك تضيع. الاستشارة الأولى مجانية — تواصل الآن.</p>
            <a href={waMsg("أهلاً دكتور أسامه، أريد استشارة عاجلة حول تأخر نمو طفلي")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 font-bold text-xl rounded-sm transition-colors shadow-lg">
              <WaIcon size={7} />
              تواصل الآن — استشارة مجانية
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.blockquote {...fade} className="bg-muted/20 border border-border/50 border-r-4 border-r-secondary p-8 space-y-4">
            <div className="flex gap-1" aria-label="تقييم 5 من 5">
              {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />)}
            </div>
            <p className="text-foreground/80 italic leading-relaxed">
              "عندما لاحظنا تأخراً في كلام ابننا عمره سنتين، نصحنا الجميع بالانتظار. الدكتور أسامه أصرّ على التقييم الفوري وبدأنا الدعم فوراً. اليوم ابننا في الروضة مع أقرانه ولا فرق يُذكر."
            </p>
            <footer>
              <strong className="text-primary block text-sm">أم عبدالله</strong>
              <span className="text-muted-foreground text-xs">عمان — تأخر كلامي، بدء التدخل عمر 26 شهراً</span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20" aria-labelledby="tamhid-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="tamhid-faq-heading" className="text-3xl font-bold text-primary mb-4">أسئلة شائعة حول التدخل المبكر</h2>
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
              تواصل مع الدكتور أسامه
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
              { href: "/taleem-damej", title: "التعليم الدامج", desc: "الدمج في المدرسة" },
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
