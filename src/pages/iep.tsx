import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Target, FileText, Users, Star } from "lucide-react";
import PageLayout, { waMsg, WA_DEFAULT, WaIcon } from "@/components/layout/PageLayout";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const steps = [
  { icon: <FileText className="w-8 h-8 text-primary" aria-hidden="true" />, title: "التقييم الشامل", desc: "تقييم مستوى الطفل الحالي في المجالات الأكاديمية والتواصلية والسلوكية والاجتماعية لتحديد نقاط القوة والاحتياجات." },
  { icon: <Target className="w-8 h-8 text-primary" aria-hidden="true" />, title: "وضع الأهداف الذكية", desc: "صياغة أهداف تعليمية محددة وقابلة للقياس وواقعية ومحددة بإطار زمني، مناسبة لمستوى الطفل وقدراته." },
  { icon: <Users className="w-8 h-8 text-primary" aria-hidden="true" />, title: "اجتماع الفريق", desc: "اجتماع يضم الوالدين والمعلمين والمتخصصين لمراجعة الخطة والتوقيع عليها وتوزيع المسؤوليات." },
  { icon: <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />, title: "التطبيق والمتابعة", desc: "تطبيق الخطة في الفصل والمنزل مع متابعة دورية كل 6-8 أسابيع وتعديل الأهداف بحسب تقدم الطفل الفعلي." },
];

const whoNeeds = [
  "أطفال اضطراب طيف التوحد (ASD)",
  "أطفال ADHD واضطراب نقص الانتباه",
  "الأطفال ذوو صعوبات التعلم والديسلكسيا",
  "الأطفال ذوو التأخر الكلامي واللغوي",
  "الأطفال ذوو الإعاقة الفكرية",
  "الأطفال ذوو الإعاقات الحسية والجسدية",
  "أي طفل يحتاج تعديلاً في المنهج أو طريقة التدريس",
];

const faqs = [
  {
    q: "ما هي الخطة التعليمية الفردية IEP بالضبط؟",
    a: "الخطة التعليمية الفردية (Individualized Education Program - IEP) وثيقة قانونية وتربوية مكتوبة تُعدّ لكل طفل ذي احتياجات تعليمية خاصة. تحدد: مستواه الحالي، أهدافه التعليمية السنوية، الخدمات الداعمة المطلوبة، وطريقة قياس التقدم. تُراجَع وتُحدَّث بشكل منتظم."
  },
  {
    q: "من يُعدّ خطة IEP ومن يُشارك في كتابتها؟",
    a: "تُعدّ خطة IEP من قِبَل فريق متعدد التخصصات يشمل: الوالدين، معلم التربية الخاصة، معلم الفصل العادي، ومتخصصين آخرين (معالج نطق، أخصائي سلوك...). الدكتور أسامه جمعه يُشرف على إعداد الخطة ويدير اجتماعات الفريق بخبرة تربوية واسعة."
  },
  {
    q: "كم مرة تُراجَع خطة IEP؟",
    a: "يُنصح بمراجعة الخطة كل فصل دراسي على الأقل، ومراجعة سنوية شاملة. إذا لم يُحقق الطفل الأهداف المحددة أو إذا طرأت تغييرات في وضعه، يمكن استدعاء اجتماع مراجعة في أي وقت."
  },
  {
    q: "هل خطة IEP إلزامية للمدارس في الأردن؟",
    a: "وزارة التربية والتعليم الأردنية تُلزم المدارس الحكومية الدامجة بإعداد خطط تعليمية فردية للطلبة ذوي الإعاقة. بعض المدارس الخاصة تتبنّى هذا النهج طوعياً. الدكتور أسامه جمعه يساعدك في التفاوض مع المدرسة للحصول على الحقوق التربوية الكاملة لطفلك."
  },
  {
    q: "ما تكلفة إعداد خطة IEP وكم تستغرق؟",
    a: "إعداد خطة IEP يتطلب تقييماً أولياً للطفل ثم صياغة الخطة واجتماع مع الفريق. المدة عادةً 2-4 أسابيع من التقييم حتى اكتمال الوثيقة. للاستفسار عن التكلفة التواصل مباشرة مع الدكتور أسامه جمعه عبر واتساب."
  },
];

export default function IepPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>إعداد خطة IEP التعليمية الفردية في الأردن | د. أسامه جمعه</title>
        <meta name="description" content="الدكتور أسامه جمعه متخصص في إعداد الخطط التعليمية الفردية IEP للأطفال ذوي الإعاقة في عمان والأردن. تقييم شامل، أهداف ذكية، ومتابعة منتظمة. استشارة مجانية." />
        <meta name="keywords" content="خطة IEP الأردن, خطة تعليمية فردية عمان, IEP ذوي الإعاقة, إعداد IEP الأردن, خطة تعليم خاص, خطة فردية للأطفال ذوي الاحتياجات الخاصة" />
        <link rel="canonical" href="https://drosamajuma.com/iep" />
        <meta property="og:title" content="إعداد خطة IEP التعليمية الفردية في الأردن | د. أسامه جمعه" />
        <meta property="og:description" content="خبير إعداد خطط IEP للأطفال ذوي الإعاقة في عمان. تقييم شامل وأهداف واقعية ومتابعة منتظمة." />
        <meta property="og:url" content="https://drosamajuma.com/iep" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "إعداد خطة IEP التعليمية الفردية — د. أسامه جمعه",
          "url": "https://drosamajuma.com/iep",
          "description": "خدمة إعداد والإشراف على الخطط التعليمية الفردية IEP للأطفال ذوي الإعاقة في عمان والأردن.",
          "author": { "@type": "Person", "name": "الدكتور أسامه جمعه", "url": "https://drosamajuma.com" },
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://drosamajuma.com/" },
            { "@type": "ListItem", "position": 2, "name": "خطة IEP", "item": "https://drosamajuma.com/iep" }
          ]}
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="iep-h1">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-primary-foreground/60 text-sm mb-6" aria-label="مسار التنقل">
            <a href="/" className="hover:text-secondary transition-colors">الرئيسية</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-secondary font-bold">خطة IEP</span>
          </nav>
          <motion.div {...fade} className="space-y-6">
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">الخطة التعليمية الفردية — IEP</span>
            <h1 id="iep-h1" className="text-4xl md:text-6xl font-bold leading-tight">
              إعداد خطة IEP احترافية لطفلك في عمان، الأردن
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              خطة IEP المُعدَّة بشكل صحيح تُحدث فارقاً حقيقياً في مسيرة طفلك التعليمية. الدكتور أسامه جمعه يُعدّ مئات الخطط الفردية سنوياً بالتنسيق مع الأسر والمدارس في الأردن.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={waMsg("أهلاً دكتور أسامه، أريد إعداد خطة IEP لطفلي")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                <WaIcon size={6} />
                اطلب إعداد خطة IEP الآن
              </a>
              <a href="#steps" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-bold text-lg rounded-sm transition-colors">
                كيف يتم إعداد الخطة؟
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 pt-2">
              <span>✓ استشارة أولى مجانية</span>
              <span>✓ خبرة في مئات من خطط IEP</span>
              <span>✓ تنسيق مع المدرسة</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is IEP */}
      <section className="py-20 bg-white" aria-labelledby="what-iep">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fade} className="space-y-6">
              <h2 id="what-iep" className="text-3xl font-bold text-primary">ما هي خطة IEP ولماذا طفلك يحتاجها؟</h2>
              <p className="text-foreground/80 leading-relaxed">
                الخطة التعليمية الفردية (IEP) ليست مجرد وثيقة ورقية — هي خريطة طريق مخصصة تُبنى حول احتياجات طفلك الفريدة. كل طفل ذي إعاقة أو احتياجات خاصة يستحق أن يُعامَل كما هو: فرداً مستقلاً بإمكانات تستحق الاكتشاف.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                خطة IEP مُعدَّة بشكل صحيح تُحدد بوضوح: أين طفلك الآن، أين نريده أن يصل، وكيف سنصل إلى هناك معاً — أنت كوالد، المعلم، والمتخصص.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-muted/30 border border-border/50 p-8 space-y-4">
              <h3 className="text-lg font-bold text-primary mb-4">خطة IEP تشمل:</h3>
              {["تقييم شامل للمستوى الحالي للطفل",
                "أهداف تعليمية ذكية قابلة للقياس",
                "الخدمات الداعمة المطلوبة (نطق، سلوك، دعم أكاديمي)",
                "تعديلات على المنهج وأساليب التقييم",
                "جدول زمني للتطبيق والمراجعة الدورية",
                "أدوار ومسؤوليات الأسرة والمدرسة"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-20 bg-muted/20" aria-labelledby="steps-heading">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="steps-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">4 خطوات لإعداد خطة IEP ناجحة</h2>
            <p className="text-lg text-muted-foreground">منهجية علمية مُجرَّبة مع مئات من الأطفال في الأردن</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-border/60 border-t-4 border-t-secondary hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-secondary text-primary font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                  {s.icon}
                  <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs IEP */}
      <section className="py-20 bg-white" aria-labelledby="who-needs-iep">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fade} className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="who-needs-iep" className="text-3xl font-bold text-primary mb-6">من يحتاج خطة IEP؟</h2>
              <div className="space-y-3">
                {whoNeeds.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/20 rounded-sm">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary text-primary-foreground p-8 space-y-6">
              <h3 className="text-2xl font-bold">جاهز لبدء رحلة IEP؟</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                تواصل مع الدكتور أسامه جمعه اليوم. الاستشارة الأولى مجانية ونبدأ بتقييم شامل لوضع طفلك.
              </p>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />رد خلال ساعة عبر واتساب</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />تنسيق مع المدرسة</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />متابعة دورية لتقدم الطفل</li>
              </ul>
              <a href={waMsg("أهلاً دكتور أسامه، أريد الاستفسار عن إعداد خطة IEP لطفلي")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold rounded-sm transition-colors w-full justify-center">
                <WaIcon />
                ابدأ الآن عبر واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20" aria-labelledby="iep-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fade} className="text-center mb-12">
            <h2 id="iep-faq-heading" className="text-3xl font-bold text-primary mb-4">أسئلة شائعة حول خطة IEP</h2>
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
              { href: "/taleem-damej", title: "التعليم الدامج", desc: "الدمج في المدرسة" },
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
