import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, HeartHandshake, Users, BookOpen, Target, Building2, CheckCircle, Star, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  const springTransition = { type: "spring", stiffness: 100, damping: 20 };
  const quickHover = { scale: 1.02, y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: springTransition
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.08, ...springTransition }
  };

  const services = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "استشارات أسرية ونفسية",
      description: "تقديم التوجيه والدعم النفسي للأسرة لمساعدتهم في التعامل مع التحديات التي تواجه أبنائهم بفعالية وإيجابية."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "إشراف تربوي",
      description: "متابعة وإشراف على الطلبة ذوي الإعاقة الملتحقين في المدارس والمراكز لضمان حصولهم على أفضل مستوى تعليمي."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "تدريب الكوادر التربوية",
      description: "تأهيل العاملين في المؤسسات التعليمية والأسر على استراتيجيات التعليم الخاصة والحديثة."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "توجيه وإعداد الخطط",
      description: "توجيه الأسر للبديل التربوي المناسب وإعداد والإشراف على الخطط التعليمية الفردية (IEPs)."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "بحث علمي وتحكيم",
      description: "تحكيم ومراجعة وإعداد البحوث والدراسات الأكاديمية الخاصة بتعليم الأشخاص ذوي الإعاقة."
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />,
      title: "خدمات مؤسسية",
      description: "إدارة المدارس الدامجة وتطوير خططها ضمن سياسة التعليم الدامج، وتأهيل المؤسسات التعليمية لتطبيق معايير الدمج الفعّال."
    },
  ];

  const stats = [
    { number: "+٨", label: "سنوات خبرة" },
    { number: "+١٠٠٠", label: "أسرة" },
    { number: "+٢٠٠", label: "مؤسسة" },
    { number: "+٢٠٠٠", label: "معلم" },
  ];

  const conditions = [
    {
      title: "اضطراب طيف التوحد (ASD)",
      description: "خبرة واسعة في تقييم الأطفال ذوي اضطراب طيف التوحد وإعداد خطط تدخل فردية تشمل الدعم السلوكي والتواصلي والاجتماعي.",
      keywords: "متخصص توحد عمان، دعم أطفال التوحد الأردن",
    },
    {
      title: "اضطراب نقص الانتباه وفرط الحركة (ADHD)",
      description: "استراتيجيات تربوية متخصصة لإدارة سلوك الأطفال ذوي ADHD داخل الفصل وفي المنزل، وتحسين تركيزهم وأدائهم الأكاديمي.",
      keywords: "خبير ADHD الأردن، متخصص فرط حركة عمان",
    },
    {
      title: "صعوبات التعلم (Learning Disabilities)",
      description: "تشخيص ودعم الأطفال ذوي صعوبات القراءة (الديسلكسيا) والكتابة والحساب، وإعداد خطط تعليمية فردية مناسبة لكل حالة.",
      keywords: "دعم صعوبات التعلم، ديسلكسيا الأردن",
    },
    {
      title: "التأخر في النمو والنطق",
      description: "تقييم حالات التأخر الكلامي واللغوي والنمائي، وتوجيه الأسر للتدخل المبكر المناسب بالتنسيق مع فريق متعدد التخصصات.",
      keywords: "تأخر كلامي عمان، تدخل مبكر الأردن",
    },
    {
      title: "الإعاقة الفكرية",
      description: "دعم الطلاب ذوي الإعاقة الفكرية من خلال مناهج تعليمية مُكيَّفة وبيئات تعلم شاملة تعزز استقلاليتهم وإندماجهم المجتمعي.",
      keywords: "إعاقة فكرية عمان، دعم التعليم الخاص",
    },
    {
      title: "الإعاقة الجسدية والحسية",
      description: "استشارات وخطط تعليمية للطلاب ذوي الإعاقات الحركية والبصرية والسمعية لضمان وصولهم الكامل إلى فرص التعليم الدامج.",
      keywords: "إعاقة حسية عمان، تعليم دامج الأردن",
    },
  ];

  const testimonials = [
    {
      text: "بفضل الاستشارة مع الدكتور أسامه، فهمنا كيف نتعامل مع ابننا ذي التوحد بشكل صحيح. تغيّر كل شيء في المنزل والمدرسة خلال أشهر قليلة.",
      author: "أم محمد",
      role: "أم طفل ذي اضطراب طيف التوحد — عمان",
    },
    {
      text: "الدكتور أسامه ساعدنا في إعداد خطة IEP لبنتي وتابعها مع المدرسة. النتائج كانت أفضل بكثير مما توقعناه في أول فصل دراسي.",
      author: "أبو سارة",
      role: "والد طالبة ذات صعوبات تعلم — الزرقاء",
    },
    {
      text: "حضرنا دورة التدريب التي أشرف عليها الدكتور أسامه. غيّرت نظرتنا لأساليب التعليم الدامج تماماً، وطبّقنا ما تعلمناه مع طلابنا مباشرة.",
      author: "معلمة تربية خاصة",
      role: "مدرسة دامجة — عمان",
    },
  ];

  const whatsappBase = "https://wa.me/962776121914";
  const whatsappMsg = (msg: string) => `${whatsappBase}?text=${encodeURIComponent(msg)}`;

  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formConcern, setFormConcern] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `السلام عليكم دكتور أسامه،\n\n` +
      `اسمي: ${formName}\n` +
      `عمر طفلي: ${formAge}\n` +
      (formConcern ? `الاستفسار: ${formConcern}\n\n` : `\n`) +
      `أرجو التواصل معي للحصول على استشارتكم. شكراً جزيلاً.`;
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground" dir="rtl" lang="ar">
      <Helmet>
        <title>د. أسامه جمعه | خبير التربية الخاصة والتعليم الدامج - عمان، الأردن</title>
        <meta name="description" content="احجز استشارة مع د. أسامه جمعه، خبير التربية الخاصة والتعليم الدامج في عمان. متخصص في دعم أطفال التوحد وADHD وصعوبات التعلم. خطط IEP، إشراف تربوي، وتدريب معلمين. تواصل الآن عبر واتساب." />
        <meta name="keywords" content="التربية الخاصة, التعليم الدامج, أسامه جمعه, ذوي الإعاقة, استشارات أسرية, خطة تعليمية فردية IEP, تدريب معلمين, عمان, الأردن, دمج الأطفال, متخصص توحد عمان, اضطراب طيف التوحد الأردن, ADHD الأردن, صعوبات التعلم, ديسلكسيا, تأخر كلامي, إعاقة فكرية, تدخل مبكر, إشراف تربوي عمان, استشارة تربية خاصة" />
        <meta name="author" content="الدكتور أسامه جمعه" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:bg-secondary focus:text-primary focus:px-4 focus:py-2 focus:font-bold focus:rounded"
      >
        الانتقال إلى المحتوى الرئيسي
      </a>


      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40" role="banner">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl md:text-3xl font-bold text-primary tracking-tight" aria-label="الصفحة الرئيسية - د. أسامه جمعه">
              د. أسامه جمعه
            </a>
          </div>

          <nav className="flex items-center gap-2 md:gap-3 flex-wrap justify-center" aria-label="القائمة الرئيسية">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm" data-testid="nav-about">
              نبذة عني
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/autism" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              التوحد
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/adhd" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              ADHD
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="/iep" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              خطة IEP
            </a>
            <span className="text-muted-foreground/30 hidden lg:inline" aria-hidden="true">|</span>
            <a href="/taleem-damej" className="text-foreground hover:text-primary transition-colors font-medium text-sm hidden lg:inline">
              التعليم الدامج
            </a>
            <span className="text-muted-foreground/30 hidden lg:inline" aria-hidden="true">|</span>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium text-sm hidden lg:inline" data-testid="nav-services">
              الخدمات
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="#book" className="bg-secondary text-primary hover:bg-secondary/80 transition-colors font-bold text-sm px-4 py-2 rounded-sm" data-testid="nav-book">
              احجز استشارة
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[600px] h-[80vh] flex items-center justify-center text-center" aria-labelledby="hero-title">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              src="/hero.png"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          </div>

          <div className="container relative z-10 px-6 py-12 md:py-24 max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              animate="whileInView"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1 id="hero-title" variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                الدكتور أسامه جمعه
              </motion.h1>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-medium text-secondary">
                خبير التربية الخاصة والتعليم الدامج
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed pt-4">
                نعمل معاً لإطلاق إمكانات كل طفل. نقدم استشارات أسرية متخصصة وإشرافاً تربوياً مبنياً على أحدث استراتيجيات التعليم الدامج في عمان، الأردن.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-sm bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 h-14 text-lg font-bold"
                  data-testid="btn-hero-contact"
                >
                  <a href="#book">احجز استشارة مجانية</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="rounded-sm bg-[#25D366] border-2 border-[#25D366] text-white hover:bg-[#1ebe5b] transition-colors px-8 h-14 text-lg font-bold"
                >
                  <a href={whatsappMsg("أهلاً دكتور أسامه، أود حجز استشارة مجانية")} target="_blank" rel="noopener noreferrer">
                    واتساب مباشر
                  </a>
                </Button>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-sm text-white/70 pt-2 flex flex-wrap gap-x-5 gap-y-1 justify-center">
                <span>✓ الاستشارة الأولى مجانية</span>
                <span>✓ رد خلال ساعة عبر واتساب</span>
                <span>✓ خبرة +٨ سنوات</span>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary text-primary-foreground py-10" aria-label="إنجازات د. أسامه جمعه">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top 3 Services - 3 Column Panels */}
        <section className="relative z-20 pt-16 pb-16" aria-label="أبرز الخدمات">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6" role="list">
              {services.slice(0, 3).map((service, index) => (
                <motion.article
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.1 }}
                  className="bg-white shadow-lg border border-border border-r-4 border-r-secondary p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30 border-y border-border/50" aria-labelledby="about-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                {/* Doctor Photo */}
                <motion.div variants={fadeInUp} className="shrink-0">
                  <div className="relative">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                      <img
                        src="/dr-osama.jpg"
                        alt="الدكتور أسامه جمعه - خبير التربية الخاصة والتعليم الدامج في عمان، الأردن"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        width="288"
                        height="288"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary px-4 py-2 font-bold text-sm shadow-lg rounded-sm">
                      خبير التربية الخاصة
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="text-center md:text-right flex-1 space-y-6">
                  <motion.p variants={fadeInUp} className="text-secondary font-bold tracking-widest text-sm">
                    خبير التربية الخاصة والتعليم الدامج — عمان، الأردن
                  </motion.p>
                  <motion.h2 id="about-heading" variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                    دعم متخصص للأطفال ذوي الإعاقة وذوي الاحتياجات الخاصة
                  </motion.h2>
                  <div className="w-24 h-1 bg-secondary md:mr-0 mx-auto" aria-hidden="true"></div>
                  <motion.p variants={fadeInUp} className="text-lg text-foreground/80 leading-relaxed">
                    الدكتور أسامه جمعه خبير متخصص في التربية الخاصة والتعليم الدامج، يقدم خدماته للأسر والمؤسسات التعليمية في الأردن. يؤمن بأن كل طفل — بغض النظر عن قدراته — يمتلك إمكانات فريدة تستحق الاكتشاف والدعم.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
                    من خلال الاستشارات الأسرية المتخصصة، وإعداد الخطط التعليمية الفردية (IEP)، وتدريب المعلمين على استراتيجيات التعليم الدامج، يعمل على بناء جسور نحو مستقبل مشرق لكل طفل ذي إعاقة.
                  </motion.p>
                  {/* Credentials */}
                  <motion.ul variants={fadeInUp} className="space-y-2 text-right" aria-label="المؤهلات والخبرات">
                    {[
                      "خبرة أكاديمية وميدانية في مجال التربية الخاصة والتعليم الدامج",
                      "متخصص في إعداد الخطط التعليمية الفردية (IEP) ومتابعة تطبيقها",
                      "محكّم أكاديمي ومشرف على الأبحاث في مجال الإعاقة والتعليم الدامج",
                      "مدرّب معتمد للكوادر التربوية في المدارس الدامجة",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div variants={fadeInUp} className="pt-2">
                    <a
                      href={whatsappMsg("أهلاً دكتور أسامه، أود الاستفسار عن خدماتكم")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 font-bold transition-colors rounded-sm"
                      aria-label="تواصل مع د. أسامه جمعه عبر واتساب"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      احجز استشارتك الآن
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specializations / Conditions Section */}
        <section id="specializations" className="py-24 bg-white" aria-labelledby="specializations-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="specializations-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">التخصصات والحالات</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                خبرة متعمقة في دعم الأطفال والطلاب ذوي الاحتياجات الخاصة المتنوعة، مع نهج فردي يناسب كل حالة.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
              {conditions.map((condition, index) => (
                <motion.article
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.08 }}
                  className="p-6 border border-border/60 bg-muted/10 hover:bg-muted/30 hover:border-secondary/40 transition-all"
                >
                  <h3 className="text-lg font-bold text-primary mb-3">{condition.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{condition.description}</p>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href={whatsappMsg("أهلاً دكتور أسامه، لديّ استفسار حول دعم طفلي")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold transition-colors rounded-sm text-lg"
              >
                استشر الدكتور أسامه مجاناً عبر واتساب
              </a>
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section id="services" className="py-24 bg-muted/20" aria-labelledby="services-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">الخدمات التخصصية</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مجموعة متكاملة من الخدمات التربوية والنفسية المصممة خصيصاً لتلبية متطلبات الطلبة والأسر والمؤسسات في عمان والأردن.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" role="list">
              {services.slice(3).map((service, index) => (
                <motion.article
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white border border-border/60 hover:bg-muted/10 transition-colors"
                >
                  <div className="bg-primary/5 p-4 rounded-full shrink-0" aria-hidden="true">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA Banner */}
        <section className="py-16 bg-secondary" aria-label="احجز استشارة">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                هل طفلك يحتاج إلى دعم تربوي متخصص؟
              </h2>
              <p className="text-primary/80 text-lg">
                لا تتردد. التدخل المبكر هو المفتاح. الاستشارة الأولى <strong>مجانية تماماً</strong> — تواصل مع الدكتور أسامه جمعه الآن.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappMsg("أهلاً دكتور أسامه، أريد حجز استشارة مجانية لطفلي")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold transition-colors rounded-sm text-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  احجز استشارتك المجانية الآن
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-bold transition-colors rounded-sm text-lg"
                >
                  اقرأ الأسئلة الشائعة
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">ماذا يقول أولياء الأمور والمعلمون</h2>
              <p className="text-muted-foreground text-lg">تجارب حقيقية من أسر وكوادر تربوية استفادت من خدمات الدكتور أسامه جمعه</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" role="list">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  role="listitem"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: i * 0.1 }}
                  className="bg-muted/20 border border-border/50 border-r-4 border-r-secondary p-8 space-y-4"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-1" aria-label="تقييم 5 من 5 نجوم">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-sm italic" itemProp="reviewBody">"{t.text}"</p>
                  <footer>
                    <cite className="not-italic">
                      <strong className="text-primary text-sm block" itemProp="author">{t.author}</strong>
                      <span className="text-muted-foreground text-xs">{t.role}</span>
                    </cite>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Testimonials Quick CTA */}
        <div className="py-10 bg-secondary/15 border-y border-secondary/25 text-center">
          <div className="container mx-auto px-6">
            <p className="text-primary font-bold text-lg mb-4">هل أنتَ أيضاً في نفس الموقف؟ الدكتور أسامه جمعه جاهز لمساعدتك</p>
            <a
              href={whatsappMsg("أهلاً دكتور أسامه، قرأت تجارب الأسر وأريد استشارة مجانية لطفلي")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-4 font-bold text-lg transition-all rounded-sm shadow"
              aria-label="ابدأ استشارتك المجانية عبر واتساب"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ابدأ استشارتك المجانية الآن
            </a>
          </div>
        </div>

        {/* FAQ Section — AI/LLM optimized */}
        <section id="faq" className="py-24 bg-muted/20 border-y border-border/40" aria-labelledby="faq-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">أسئلة شائعة</h2>
                <p className="text-muted-foreground text-lg">إجابات على أكثر الأسئلة شيوعاً حول التربية الخاصة والتعليم الدامج في الأردن</p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: "من هو الدكتور أسامه جمعه؟",
                    a: "الدكتور أسامه جمعه خبير أردني متخصص في التربية الخاصة والتعليم الدامج، مقيم في عمان، الأردن. يقدم استشارات أسرية للأطفال ذوي الإعاقة، ويعدّ الخطط التعليمية الفردية (IEP)، ويدرّب الكوادر التربوية في المدارس والمراكز، وتمتد خبرته لأكثر من ٨ سنوات في هذا المجال."
                  },
                  {
                    q: "ما هي خدمات التربية الخاصة التي يقدمها د. أسامه جمعه؟",
                    a: "يقدم الدكتور أسامه جمعه: استشارات أسرية ونفسية، إشراف تربوي على الطلبة ذوي الإعاقة، تدريب الكوادر التربوية، إعداد الخطط التعليمية الفردية (IEP)، بحث علمي وتحكيم أكاديمي، وخدمات مؤسسية للمدارس الدامجة."
                  },
                  {
                    q: "ما هو التعليم الدامج وكيف يختلف عن التربية الخاصة؟",
                    a: "التعليم الدامج هو نهج تعليمي يدمج الأطفال ذوي الإعاقة مع أقرانهم في الفصول العادية مع توفير الدعم المناسب. أما التربية الخاصة فهي مجموعة الخدمات والبرامج المخصصة للأطفال ذوي الاحتياجات الخاصة. الدكتور أسامه جمعه متخصص في كليهما ويعمل على تكاملهما لتحقيق أفضل النتائج."
                  },
                  {
                    q: "ما هي الخطة التعليمية الفردية (IEP) وكيف يمكن إعدادها؟",
                    a: "الخطة التعليمية الفردية (IEP) وثيقة مخصصة لكل طفل ذي إعاقة تحدد أهدافه التعليمية، الخدمات الداعمة، وأساليب التقييم المناسبة. يتخصص الدكتور أسامه جمعه في إعداد هذه الخطط والإشراف على تطبيقها بالتنسيق مع الأسرة والمدرسة."
                  },
                  {
                    q: "كيف يمكن التواصل مع الدكتور أسامه جمعه لحجز استشارة؟",
                    a: "يمكن التواصل مع الدكتور أسامه جمعه عبر واتساب على الرقم 962776121914+، أو عبر صفحاته على فيسبوك وإنستغرام ويوتيوب وتيك توك وتويتر. يقدم خدماته في عمان، المملكة الأردنية الهاشمية."
                  },
                  {
                    q: "هل يقدم الدكتور أسامه جمعه خدمات لأطفال التوحد تحديداً؟",
                    a: "نعم، يمتلك الدكتور أسامه جمعه خبرة واسعة في دعم الأطفال ذوي اضطراب طيف التوحد (ASD). يشمل ذلك إعداد خطط تدخل سلوكي وتواصلي، وتوجيه الأسر في التعامل مع الطفل في المنزل والمدرسة، وتدريب المعلمين على استراتيجيات الدمج الفعّال لهؤلاء الأطفال."
                  },
                  {
                    q: "هل يدعم الدكتور أسامه جمعه الأطفال ذوي ADHD وصعوبات التعلم؟",
                    a: "نعم، يقدم الدكتور أسامه جمعه استشارات ودعماً تربوياً متخصصاً للأطفال ذوي اضطراب نقص الانتباه وفرط الحركة (ADHD) وصعوبات التعلم كالديسلكسيا. يشمل الدعم استراتيجيات إدارة الفصل، وتعديل المناهج، وإعداد خطط IEP مناسبة."
                  },
                  {
                    q: "ما هو التدخل المبكر وما أهميته لطفلي؟",
                    a: "التدخل المبكر هو تقديم الدعم التربوي والعلاجي للأطفال ذوي الإعاقة أو الذين يُشتبه بوجود تأخر نمائي لديهم في أقرب وقت ممكن، عادةً قبل سن السادسة. الأبحاث تثبت أن التدخل المبكر يحسن النتائج التعليمية والاجتماعية بشكل جوهري. يرشد الدكتور أسامه جمعه الأسر لأفضل مسار للتدخل المبكر المناسب لحالة طفلهم."
                  },
                  {
                    q: "كيف أعرف إذا كان طفلي بحاجة لدعم التربية الخاصة؟",
                    a: "إذا لاحظتَ تأخراً في نطق طفلك، صعوبة في التعلم، سلوكيات غير معتادة، أو إذا أُبلغتَ من المدرسة بوجود مشكلة في التحصيل أو التفاعل الاجتماعي، فقد يحتاج طفلك لتقييم متخصص. الدكتور أسامه جمعه يمكنه توجيهك خطوة بخطوة لتحديد احتياجات طفلك وأفضل الحلول المتاحة."
                  },
                  {
                    q: "هل يقدم الدكتور أسامه جمعه تدريبات للمدارس والمراكز التربوية؟",
                    a: "نعم، يقدم الدكتور أسامه جمعه برامج تدريبية متخصصة للمدارس الدامجة والمراكز التربوية، تشمل: تأهيل المعلمين على استراتيجيات التعليم الدامج، بناء بيئة صفية شاملة، إعداد وتطبيق خطط IEP، وتطوير سياسات الدمج المؤسسي وفق المعايير الدولية."
                  },
                ].map(({ q, a }, i) => (
                  <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: i * 0.07 }}
                    className="group bg-white border border-border rounded-sm p-6 cursor-pointer open:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex items-center justify-between gap-4 font-bold text-primary text-base md:text-lg list-none select-none" itemProp="name">
                      {q}
                      <span className="text-secondary text-2xl font-light shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="mt-4 text-muted-foreground leading-relaxed" itemProp="text">{a}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements / Credentials Section */}
        <section id="achievements" className="py-20 bg-primary text-primary-foreground" aria-labelledby="achievements-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={springTransition}
                className="text-center mb-12"
              >
                <h2 id="achievements-heading" className="text-3xl md:text-4xl font-bold mb-3">
                  الخبرة والمؤهلات
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  خلفية أكاديمية راسخة وخبرة ميدانية عملية في خدمة الأطفال ذوي الإعاقة وأسرهم
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "مؤهلات أكاديمية عليا",
                    items: [
                      "دكتوراه في التربية الخاصة وتعليم ذوي الإعاقة",
                      "تخصص في التعليم الدامج وإعداد الخطط التعليمية الفردية",
                      "خبرة أكاديمية وبحثية في مجال الإعاقة التعلمية",
                      "محكّم في مجلات أكاديمية متخصصة في تعليم ذوي الإعاقة",
                    ],
                  },
                  {
                    title: "إنجازات وخبرات ميدانية",
                    items: [
                      "خبرة عملية في التربية الخاصة والتعليم الدامج",
                      "إعداد وإشراف على مئات من خطط IEP لأطفال في الأردن",
                      "شراكات مع أكثر من 60 مدرسة ومركز تربوي في المملكة الأردنية",
                      "تدريب أكثر من 500 معلم ومعلمة على استراتيجيات التعليم الدامج",
                    ],
                  },
                  {
                    title: "مجالات التخصص الدقيق",
                    items: [
                      "اضطراب طيف التوحد (ASD) — تقييم ودعم سلوكي وتواصلي",
                      "اضطراب نقص الانتباه وفرط الحركة (ADHD) — إدارة صفية وأسرية",
                      "صعوبات التعلم والديسلكسيا — تدخل وتعديل مناهج",
                      "التأخر الكلامي والنمائي — توجيه للتدخل المبكر",
                    ],
                  },
                  {
                    title: "المنهجية والنهج المهني",
                    items: [
                      "نهج متكامل: الطفل + الأسرة + المدرسة في آنٍ واحد",
                      "استراتيجيات مبنية على أحدث الأبحاث الدولية في التربية الخاصة",
                      "خطط تعليمية فردية (IEP) مُكيَّفة وفق الاحتياج الفعلي لكل طفل",
                      "متابعة دورية وتقييم مستمر لضمان تقدم الطفل",
                    ],
                  },
                ].map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: i * 0.08 }}
                    className="bg-white/8 border border-white/15 p-6 space-y-4"
                  >
                    <h3 className="text-secondary font-bold text-lg">{block.title}</h3>
                    <ul className="space-y-2">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Articles / Tips Section */}
        <section id="articles" className="py-24 bg-muted/10" aria-labelledby="articles-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-secondary font-bold tracking-widest text-sm mb-3">نصائح وإرشادات الخبير</p>
              <h2 id="articles-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
                مقالات متخصصة في التربية الخاصة
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                إرشادات عملية من الدكتور أسامه جمعه لمساعدة الأسر والمعلمين في فهم ودعم الأطفال ذوي الإعاقة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  tag: "التوحد",
                  heading: "7 علامات تدل على أن طفلك قد يعاني من اضطراب طيف التوحد",
                  body: "تشمل العلامات المبكرة لاضطراب طيف التوحد: عدم الاستجابة عند مناداة الطفل باسمه بعد عمر السنة، تجنّب التواصل البصري، غياب الابتسامة الاجتماعية، تأخر في الكلام أو فقدانه المفاجئ، التكرار في الحركات (كالرفرفة)، والانشغال المفرط بأشياء بعينها. إذا لاحظتَ ثلاثة أو أكثر من هذه العلامات قبل عمر السنتين، يُنصح بالتقييم المبكر فوراً. التدخل المبكر في مرحلة ما قبل المدرسة يحقق نتائج أفضل بكثير مقارنةً بالانتظار.",
                  cta: "اسأل الدكتور أسامه عن تقييم التوحد",
                },
                {
                  tag: "التدخل المبكر",
                  heading: "متى يجب البدء بالتدخل المبكر لطفلي؟ والفرق الذي يصنعه",
                  body: "التدخل المبكر هو تقديم الدعم التربوي والعلاجي للأطفال ذوي الإعاقة أو التأخر النمائي قبل سن السادسة — والأبحاث تؤكد أن هذه المرحلة هي الأكثر استجابةً للتدخل. الدماغ في هذه السن يتشكّل بسرعة، ما يجعل الدعم فيها أضعاف التأثير. إذا كنتَ قلقاً من تأخر طفلك في الكلام أو السلوك أو التفاعل الاجتماعي، لا تنتظر حتى يكبر. الخطوة الأولى هي تقييم متخصص لتحديد طبيعة الاحتياج واختيار برنامج الدعم المناسب.",
                  cta: "احصل على توجيه مبكر عبر واتساب",
                },
                {
                  tag: "صعوبات التعلم",
                  heading: "كيف تعرف إذا كان طفلك يعاني من صعوبات التعلم؟",
                  body: "صعوبات التعلم ليست كسلاً أو قلّة ذكاء — هي اختلاف في طريقة معالجة الدماغ للمعلومات. علاماتها تشمل: صعوبة في تمييز الحروف والأرقام، قلب الحروف عند الكتابة، ضعف في القراءة رغم الجهد، صعوبة في الحساب الذهني، وعدم الانتباه في القراءة. إذا كان طفلك يبذل جهداً مضاعفاً دون نتائج تناسب عمره، قد يحتاج تقييماً لصعوبات التعلم وخطة IEP تُكيِّف طريقة تعلّمه.",
                  cta: "استشر الدكتور أسامه في صعوبات التعلم",
                },
                {
                  tag: "ADHD",
                  heading: "5 استراتيجيات عملية لمساعدة طفلك ذي ADHD في المنزل والمدرسة",
                  body: "الأطفال ذوو اضطراب ADHD لا يفتقرون للقدرة — بل يفتقرون إلى البيئة الصحيحة. أبرز الاستراتيجيات الفعّالة: تقسيم المهام إلى خطوات قصيرة، تحديد روتين يومي ثابت ومرئي، تقليل مشتتات الانتباه في بيئة الدراسة، التعزيز الإيجابي الفوري عند التركيز، وإعطاء فترات حركة قصيرة بين الأنشطة. التعاون بين الأسرة والمعلم وفق خطة موحدة هو مفتاح النجاح مع هؤلاء الأطفال.",
                  cta: "اطلب خطة ADHD مخصصة لطفلك",
                },
                {
                  tag: "خطة IEP",
                  heading: "ما هي خطة التعليم الفردية IEP وكيف تحصل عليها لطفلك؟",
                  body: "خطة التعليم الفردية (IEP) وثيقة مخصصة تُبنى لكل طفل ذي احتياجات تعليمية خاصة. تشمل: تقييم مستوى الطفل الحالي، أهداف تعليمية ذكية قابلة للقياس، الخدمات الداعمة المطلوبة (معالج نطق، دعم سلوكي...)، وطريقة تقييم التقدم. خطوات الحصول عليها: تقييم متخصص من خبير تربية خاصة، اجتماع مع فريق المدرسة، كتابة الخطة ومتابعة تطبيقها بشكل دوري. الدكتور أسامه جمعه متخصص في إعداد وتطبيق هذه الخطط في الأردن.",
                  cta: "اطلب إعداد خطة IEP لطفلك",
                },
                {
                  tag: "التعليم الدامج",
                  heading: "هل مدرسة الدمج مناسبة لطفلي ذي الإعاقة؟ دليل الأسرة",
                  body: "التعليم الدامج لا يناسب كل طفل بشكل تلقائي — يعتمد على طبيعة الإعاقة، مستوى الدعم المتوفر في المدرسة، واستعداد الكادر التعليمي. الدمج الناجح يحتاج: تقييم دقيق لاحتياجات الطفل، خطة IEP محكمة، كادر مدرَّب، ودعم مستمر من متخصص تربية خاصة. قبل اتخاذ قرار التسجيل في مدرسة دامجة، يُنصح بالتشاور مع خبير متخصص لضمان أن البيئة التعليمية مناسبة وداعمة لنمو طفلك.",
                  cta: "اسأل عن خيارات التعليم المناسبة لطفلك",
                },
              ].map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: i * 0.07 }}
                  className="bg-white border border-border/60 p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary leading-snug" itemProp="headline">
                    {article.heading}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1" itemProp="description">
                    {article.body}
                  </p>
                  <a
                    href={whatsappMsg(`أهلاً دكتور أسامه، قرأت مقالك عن "${article.tag}" وأود الاستفسار`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#1ebe5b] transition-colors mt-auto"
                    aria-label={article.cta}
                    itemProp="url"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {article.cta} ←
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Lead Form Section */}
        <section id="book" className="py-24 bg-white border-y border-border/40" aria-labelledby="form-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={springTransition}
                className="text-center mb-10"
              >
                <p className="text-secondary font-bold tracking-widest text-sm mb-3">خطوة واحدة فقط</p>
                <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  احجز استشارتك الآن
                </h2>
                <p className="text-muted-foreground text-lg">
                  أملأ النموذج وسيُرسَل مباشرةً إلى واتساب الدكتور أسامه جمعه مع كل التفاصيل — لا حاجة لكتابة أي شيء.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleFormSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: 0.1 }}
                className="bg-muted/20 border border-border rounded-sm p-8 md:p-10 space-y-6"
                aria-label="نموذج حجز استشارة"
                noValidate
              >
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="block font-bold text-primary text-sm">
                    اسمك الكريم <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="مثال: أم محمد"
                    className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition rounded-sm text-right"
                    aria-required="true"
                  />
                </div>

                {/* Child's Age */}
                <div className="space-y-2">
                  <label htmlFor="form-age" className="block font-bold text-primary text-sm">
                    عمر طفلك <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="form-age"
                    required
                    value={formAge}
                    onChange={(e) => setFormAge(e.target.value)}
                    className="w-full border border-border bg-white px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition rounded-sm text-right appearance-none"
                    aria-required="true"
                  >
                    <option value="" disabled>اختر الفئة العمرية</option>
                    <option value="أقل من سنتين">أقل من سنتين</option>
                    <option value="2-4 سنوات">2–4 سنوات</option>
                    <option value="5-7 سنوات">5–7 سنوات</option>
                    <option value="8-10 سنوات">8–10 سنوات</option>
                    <option value="11-14 سنة">11–14 سنة</option>
                    <option value="15 سنة فأكثر">15 سنة فأكثر</option>
                  </select>
                </div>

                {/* Concern */}
                <div className="space-y-2">
                  <label htmlFor="form-concern" className="block font-bold text-primary text-sm">
                    ما الذي تودّ الاستفسار عنه؟{" "}
                    <span className="text-muted-foreground font-normal text-xs">(اختياري)</span>
                  </label>
                  <textarea
                    id="form-concern"
                    rows={4}
                    value={formConcern}
                    onChange={(e) => setFormConcern(e.target.value)}
                    placeholder="مثال: طفلي عمره 5 سنوات ويعاني من تأخر في الكلام، نريد معرفة الخطوات المناسبة..."
                    className="w-full border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition rounded-sm text-right resize-none"
                  />
                </div>

                {/* Privacy note */}
                <p className="text-xs text-muted-foreground text-right">
                  🔒 بياناتك لا تُحفظ على أي خادم. تُرسَل مباشرةً إلى واتساب الدكتور أسامه فقط.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!formName || !formAge}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 font-bold text-lg transition-all rounded-sm shadow-md hover:shadow-lg"
                  aria-label="إرسال النموذج عبر واتساب"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {formSent ? "✅ تم الفتح! أرسل الرسالة في واتساب" : "أرسل عبر واتساب الآن"}
                </button>

                {formSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm px-4 py-3 text-center text-sm font-bold text-[#1a7a42]"
                    role="status"
                    aria-live="polite"
                  >
                    تم فتح واتساب بالرسالة المُعدَّة. ما عليك سوى الضغط على إرسال! 🎉
                  </motion.div>
                )}
              </motion.form>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                {[
                  "رد خلال ساعة أو أقل",
                  "الاستشارة الأولى مجانية",
                  "+300 أسرة استفادت",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground border-t-4 border-secondary" aria-labelledby="contact-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold mb-4">لنبني مستقبلاً أفضل معاً</h2>
              <p className="text-xl text-primary-foreground/80">
                يسعدنا تواصلكم لتقديم الدعم والاستشارة المناسبة لحالتكم. التواصل مجاني والاستجابة سريعة.
              </p>

              <div className="flex flex-col items-center gap-2 pt-2">
                <MapPin className="w-8 h-8 text-secondary" aria-hidden="true" />
                <address className="text-primary-foreground/80 not-italic text-lg">عمان، المملكة الأردنية الهاشمية</address>
              </div>

              {/* Primary WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={whatsappMsg("أهلاً دكتور أسامه، أود الاستفسار عن خدماتكم")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 font-bold text-xl transition-all rounded-sm shadow-lg hover:shadow-xl"
                  aria-label="تواصل مع الدكتور أسامه جمعه عبر واتساب الآن"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  راسلنا على واتساب الآن
                </a>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { href: whatsappMsg("أهلاً دكتور أسامه، أود الاستفسار عن خدماتكم"), label: "واتساب", testId: "link-whatsapp", icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )},
                  { href: "https://www.facebook.com/profile.php?id=61582179417619", label: "فيسبوك", icon: <FaFacebook className="w-6 h-6" aria-hidden="true" />, testId: "link-facebook" },
                  { href: "https://www.instagram.com/dr.osamajumaa", label: "إنستغرام", icon: <FaInstagram className="w-6 h-6" aria-hidden="true" />, testId: "link-instagram" },
                  { href: "https://www.youtube.com/@Dr.OsamaJumaa", label: "يوتيوب", icon: <FaYoutube className="w-6 h-6" aria-hidden="true" />, testId: "link-youtube" },
                  { href: "https://www.tiktok.com/@dr.osama.jomaa", label: "تيك توك", icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                    </svg>
                  ), testId: "link-tiktok" },
                  { href: "https://x.com/Drosamajumaa", label: "تويتر / X", icon: <FaTwitter className="w-6 h-6" aria-hidden="true" />, testId: "link-twitter" },
                ].map(({ href, label, icon, testId }) => (
                  <motion.a
                    key={testId}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={testId}
                    aria-label={`${label} (يفتح في نافذة جديدة)`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-secondary hover:text-primary border border-primary-foreground/20 hover:border-secondary px-5 py-4 font-bold transition-all"
                  >
                    {icon}
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2638] text-white pt-16 pb-8 border-t border-white/10" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">د. أسامه جمعه</h2>
              <p className="text-white/60 max-w-md">
                خبير في التربية الخاصة والتعليم الدامج. نسعى لتقديم أفضل الممارسات التربوية لدمج وتمكين ذوي الإعاقة في عمان والأردن.
              </p>
              <nav className="mt-4 flex flex-wrap gap-4 text-sm text-white/50" aria-label="روابط التذييل">
                <a href="#about" className="hover:text-secondary transition-colors">نبذة عني</a>
                <a href="#specializations" className="hover:text-secondary transition-colors">التخصصات</a>
                <a href="#services" className="hover:text-secondary transition-colors">الخدمات</a>
                <a href="#achievements" className="hover:text-secondary transition-colors">المؤهلات</a>
                <a href="#articles" className="hover:text-secondary transition-colors">مقالات</a>
                <a href="#faq" className="hover:text-secondary transition-colors">أسئلة شائعة</a>
                <a href="#contact" className="hover:text-secondary transition-colors">تواصل معي</a>
              </nav>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {[
                { href: "https://www.facebook.com/profile.php?id=61582179417619", label: "فيسبوك", icon: <FaFacebook className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.instagram.com/dr.osamajumaa", label: "إنستغرام", icon: <FaInstagram className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.youtube.com/@Dr.OsamaJumaa", label: "يوتيوب", icon: <FaYoutube className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.tiktok.com/@dr.osama.jomaa", label: "تيك توك", icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                ) },
                { href: "https://x.com/Drosamajumaa", label: "تويتر", icon: <FaTwitter className="w-5 h-5" aria-hidden="true" /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all"
                  aria-label={`${label} (يفتح في نافذة جديدة)`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} د. أسامه جمعه. جميع الحقوق محفوظة. | خبير التربية الخاصة والتعليم الدامج — عمان، الأردن</p>
          </div>
        </div>
      </footer>


    </div>
  );
}
