import { ProductCategory, FeaturedProduct, Testimonial, FaqItem } from "@/types";

export const categories: ProductCategory[] = [
  {
    id: "rings",
    title: "انگشتر",
    description: "تلفیق ظرافت و اقتدار در هر قطعه",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    count: "۴۸ طرح",
  },
  {
    id: "necklaces",
    title: "گردنبند",
    description: "روایتی طلایی بر گردی گردن",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    count: "۳۶ طرح",
  },
  {
    id: "bracelets",
    title: "دستبند",
    description: "زنجیره‌ای از سلیقه و اصالت",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
    count: "۲۹ طرح",
  },
  {
    id: "earrings",
    title: "گوشواره",
    description: "درخششی که چهره را کامل می‌کند",
    image:
      "https://images.unsplash.com/photo-1633810542706-3af4a1f8c58e?q=80&w=1200&auto=format&fit=crop",
    count: "۴۲ طرح",
  },
  {
    id: "coins",
    title: "سکه طلا",
    description: "سرمایه‌ای ماندگار، سنتی جاودان",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
    count: "۱۸ نوع",
  },
  {
    id: "wedding",
    title: "ست عروس",
    description: "برای روزی که تکرار نمی‌شود",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
    count: "۲۲ ست",
  },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "p1",
    name: "انگشتر آفتاب پارسی",
    category: "انگشتر طلای ۱۸ عیار",
    weight: "۴.۲ گرم",
    description:
      "الهام‌گرفته از نقش‌برجسته‌های تخت جمشید، با تراش خورشیدی مرکزی و حاشیه‌ای از نگین‌های ریز دست‌چین.",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "گردنبند بانوی شیراز",
    category: "گردنبند طلای ۱۸ عیار",
    weight: "۹.۸ گرم",
    description:
      "زنجیری ظریف با آویزی به شکل گل نیلوفر، ساخته‌شده با تکنیک ریخته‌گری دستی استادکاران اصفهانی.",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "دستبند رود سیمین",
    category: "دستبند طلای ۱۸ عیار",
    weight: "۷.۵ گرم",
    description:
      "طراحی موج‌گونه که جریان آب را در طلا به تصویر می‌کشد؛ نرم، سیال و بی‌وزن روی مچ.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "گوشواره ستاره شرق",
    category: "گوشواره طلای ۱۸ عیار",
    weight: "۳.۱ گرم",
    description:
      "آویزهایی سبک با طرح شش‌پر، برگرفته از کاشی‌کاری‌های مسجد شیخ‌لطف‌الله.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "سکه طلای اطلس",
    category: "سکه طلای ۲۴ عیار",
    weight: "۸.۱۳۶ گرم",
    description:
      "ضرب‌شده با استانداردهای بین‌المللی؛ انتخابی مطمئن برای حفظ ارزش و هدیه‌ای ماندگار.",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "ست عروس مرمر سفید",
    category: "ست کامل طلای ۱۸ عیار",
    weight: "۲۶.۴ گرم",
    description:
      "شامل گردنبند، دستبند، گوشواره و انگشتر؛ هماهنگ در طرح، برای شبی که برای همیشه به یاد می‌ماند.",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "نگار احمدی",
    city: "تهران",
    quote:
      "کیفیت کار و ظرافت طرح‌ها واقعاً در سطح برندهای جهانی بود. انگشتری که سفارش دادم دقیقاً همون چیزی بود که توی ذهنم داشتم.",
    rating: 5,
  },
  {
    id: "t2",
    name: "علی رستمی",
    city: "اصفهان",
    quote:
      "ست عروس همسرم رو از زرین اطلس گرفتیم. از لحظه‌ی سفارش تا تحویل، همه چیز حرفه‌ای و محترمانه بود.",
    rating: 5,
  },
  {
    id: "t3",
    name: "مریم کریمی",
    city: "شیراز",
    quote:
      "گردنبندی که خریدم بعد از یک سال هنوز مثل روز اول می‌درخشه. اصالت طلا و دقت ساخت کاملاً مشهوده.",
    rating: 5,
  },
  {
    id: "t4",
    name: "حسین طاهری",
    city: "مشهد",
    quote:
      "برای سرمایه‌گذاری سکه خریدم، هم قیمت منصفانه بود هم اعتماد کامل به اصالت کالا. حتماً باز هم خرید می‌کنم.",
    rating: 5,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "آیا عیار طلای محصولات شما تضمین می‌شود؟",
    answer:
      "بله، تمامی محصولات زرین اطلس دارای مهر عیارسنجی رسمی و گواهی اصالت هستند. هر قطعه پیش از تحویل توسط کارشناسان مستقل آزمایش می‌شود.",
  },
  {
    id: "f2",
    question: "امکان سفارش طرح اختصاصی وجود دارد؟",
    answer:
      "بله، تیم طراحی ما آماده‌ی همکاری برای ساخت طرح‌های سفارشی بر اساس سلیقه و درخواست شماست. کافیست از طریق واتساپ یا تلگرام با ما در ارتباط باشید.",
  },
  {
    id: "f3",
    question: "آیا امکان تعویض یا بازخرید محصولات هست؟",
    answer:
      "تمامی محصولات مطابق با نرخ روز طلا قابل بازخرید یا تعویض هستند. شرایط دقیق در زمان خرید و بر اساس فاکتور رسمی توضیح داده می‌شود.",
  },
  {
    id: "f4",
    question: "ارسال به شهرستان‌ها چگونه انجام می‌شود؟",
    answer:
      "ارسال به سراسر کشور از طریق پست پیشتاز بیمه‌شده انجام می‌شود و بسته‌بندی محصولات کاملاً ایمن و بدون درز است.",
  },
  {
    id: "f5",
    question: "آیا می‌توان قبل از خرید محصول را از نزدیک دید؟",
    answer:
      "بله، مشتریان عزیز می‌توانند با هماهنگی قبلی از نمایشگاه ما در تهران بازدید کرده و محصولات را از نزدیک مشاهده کنند.",
  },
];
