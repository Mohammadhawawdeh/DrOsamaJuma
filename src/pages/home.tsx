import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  GraduationCap,
  HeartHandshake,
  Users,
  BookOpen,
  Target,
  Building2,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
} from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background font-sans text-foreground" dir="rtl" lang="ar">
      <Helmet>
        <title>د. أسامه جمعه | خبير التربية الخاصة والتعليم الدامج - عمان، الأردن</title>
        <meta name="description" content="الدكتور أسامه جمعه خبير في التربية الخاصة والتعليم الدامج في عمان، الأردن. استشارات أسرية للأطفال ذوي الإعاقة، إعداد خطط IEP، إشراف تربوي، وتدريب معلمي التربية الخاصة." />
        <meta name="keywords" content="التربية الخاصة, التعليم الدامج, أسامه جمعه, ذوي الإعاقة, استشارات أسرية, خطة تعليمية فردية IEP, تدريب معلمين, عمان, الأردن, دمج الأطفال" />
      </Helmet>

      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:bg-secondary focus:text-primary focus:px-4 focus:py-2 focus:font-bold focus:rounded"
      >
        الانتقال إلى المحتوى الرئيسي
      </a>

      {/* Top Utility Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm" role="navigation" aria-label="روابط سريعة">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-secondary transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              تواصل معنا
            </a>
            <span className="text-primary-foreground/30" aria-hidden="true">|</span>
            <a
              href="https://www.facebook.com/profile.php?id=61582179417619"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors flex items-center gap-1"
              aria-label="صفحة د. أسامه جمعه على فيسبوك (يفتح في نافذة جديدة)"
            >
              <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
              فيسبوك
            </a>
          </div>
          <div className="hidden md:block" aria-hidden="true">
            خبير التربية الخاصة والتعليم الدامج
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40" role="banner">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl md:text-3xl font-bold text-primary tracking-tight" aria-label="الصفحة الرئيسية - د. أسامه جمعه">
              د. أسامه جمعه
            </a>
          </div>

          <nav className="flex items-center gap-4 md:gap-6" aria-label="القائمة الرئيسية">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base" data-testid="nav-about">
              نبذة عني
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base" data-testid="nav-services">
              الخدمات
            </a>
            <span className="text-muted-foreground/30 hidden sm:inline" aria-hidden="true">|</span>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base" data-testid="nav-contact">
              تواصل معي
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
                نعمل معاً لإطلاق إمكانات كل طفل. نقدم استشارات أسرية متخصصه وإشرافاً تربوياً مبنياً على أحدث استراتيجيات التعليم الدامج.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-8">
                <Button
                  asChild
                  size="lg"
                  className="rounded-sm bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 h-14 text-lg font-bold"
                  data-testid="btn-hero-contact"
                >
                  <a href="#contact">احجز استشارة الآن</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Top 3 Services - 3 Column Panels */}
        <section className="relative -mt-16 z-20 pb-16" aria-label="أبرز الخدمات">
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">الخدمات التخصصية</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مجموعة متكاملة من الخدمات التربوية والنفسية المصممة خصيصاً لتلبية متطلبات الطلبة والأسر والمؤسسات.
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
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-muted/20 border border-border/60 hover:bg-muted/40 transition-colors"
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

        {/* FAQ Section — AI/LLM optimized */}
        <section id="faq" className="py-24 bg-muted/20 border-y border-border/40" aria-labelledby="faq-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-primary mb-4">أسئلة شائعة</h2>
                <p className="text-muted-foreground text-lg">إجابات على أكثر الأسئلة شيوعاً حول التربية الخاصة والتعليم الدامج</p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: "من هو الدكتور أسامه جمعه؟",
                    a: "الدكتور أسامه جمعه خبير أردني متخصص في التربية الخاصة والتعليم الدامج، مقيم في عمان، الأردن. يقدم استشارات أسرية للأطفال ذوي الإعاقة، ويعدّ الخطط التعليمية الفردية (IEP)، ويدرّب الكوادر التربوية في المدارس والمراكز."
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

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground border-t-4 border-secondary" aria-labelledby="contact-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold mb-4">لنبني مستقبلاً أفضل معاً</h2>
              <p className="text-xl text-primary-foreground/80">
                يسعدنا تواصلكم لتقديم الدعم والاستشارة المناسبة لحالتكم.
              </p>

              <div className="flex flex-col items-center gap-2 pt-2">
                <MapPin className="w-8 h-8 text-secondary" aria-hidden="true" />
                <address className="text-primary-foreground/80 not-italic text-lg">عمان، المملكة الأردنية الهاشمية</address>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { href: "https://wa.me/962776121914", label: "واتساب", testId: "link-whatsapp", icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  )},
                  { href: "https://www.facebook.com/profile.php?id=61582179417619", label: "فيسبوك", icon: <Facebook className="w-6 h-6" aria-hidden="true" />, testId: "link-facebook" },
                  { href: "https://www.instagram.com/dr.osamajumaa", label: "إنستغرام", icon: <Instagram className="w-6 h-6" aria-hidden="true" />, testId: "link-instagram" },
                  { href: "https://www.youtube.com/@Dr.OsamaJumaa", label: "يوتيوب", icon: <Youtube className="w-6 h-6" aria-hidden="true" />, testId: "link-youtube" },
                  { href: "https://www.tiktok.com/@dr.osama.jomaa", label: "تيك توك", icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                    </svg>
                  ), testId: "link-tiktok" },
                  { href: "https://x.com/Drosamajumaa", label: "تويتر / X", icon: <Twitter className="w-6 h-6" aria-hidden="true" />, testId: "link-twitter" },
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
                خبير في التربية الخاصة والتعليم الدامج. نسعى لتقديم أفضل الممارسات التربوية لدمج وتمكين ذوي الإعاقة.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {[
                { href: "https://www.facebook.com/profile.php?id=61582179417619", label: "فيسبوك", icon: <Facebook className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.instagram.com/dr.osamajumaa", label: "إنستغرام", icon: <Instagram className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.youtube.com/@Dr.OsamaJumaa", label: "يوتيوب", icon: <Youtube className="w-5 h-5" aria-hidden="true" /> },
                { href: "https://www.tiktok.com/@dr.osama.jomaa", label: "تيك توك", icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                ) },
                { href: "https://x.com/Drosamajumaa", label: "تويتر", icon: <Twitter className="w-5 h-5" aria-hidden="true" /> },
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
            <p>© {new Date().getFullYear()} د. أسامه جمعه. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/962776121914"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب (يفتح في نافذة جديدة)"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-3 rounded-full shadow-xl font-bold text-sm transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      >
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>واتساب</span>
      </a>

    </div>
  );
}
