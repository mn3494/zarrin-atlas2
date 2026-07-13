"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import AnimatedCounter from "../AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-charcoal">
      <div className="mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-gold-lg">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop"
              alt="استادکار زرگر ایرانی در حال ساخت زیورآلات طلا"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-500/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute -bottom-8 -right-6 rounded-2xl px-8 py-6 shadow-gold sm:-right-10"
          >
            <p className="font-display text-3xl text-gradient-gold">۲۸+</p>
            <p className="mt-1 text-xs text-muted">سال تجربه استادکاران</p>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="eyebrow">درباره زرین اطلس</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              جایی که هنر پارسی، شکل طلا به خود می‌گیرد
            </h2>
            <div className="mt-6 h-px w-24 bg-gold-gradient" />
            <p className="mt-8 text-base leading-8 text-bone sm:text-lg">
              زرین اطلس بیش از دو دهه است که میراث زرگری ایرانی را با نگاهی مدرن
              بازآفرینی می‌کند. هر قطعه در کارگاه ما با دست استادکارانی ساخته
              می‌شود که این هنر را نسل به نسل آموخته‌اند؛ از نقش‌های الهام‌گرفته
              از معماری اصفهان تا خطوط مینیمال متناسب با سلیقه‌ی امروز.
            </p>
            <p className="mt-4 text-base leading-8 text-bone sm:text-lg">
              ما باور داریم طلا فقط یک فلز نیست؛ روایتی است که از نسلی به نسل
              دیگر منتقل می‌شود. برای همین در هر مرحله، از انتخاب طلای خالص تا
              آخرین پرداخت، اصالت و دقت را قربانی سرعت نمی‌کنیم.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-gold-600/15 pt-10"
          >
            <AnimatedCounter target={28} suffix="+" label="سال تجربه" />
            <AnimatedCounter target={12000} suffix="+" label="مشتری راضی" />
            <AnimatedCounter target={195} suffix="" label="طرح اختصاصی" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
