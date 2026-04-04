"use client";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const reviews = [
  {
    quote:
      "The collaboration brought clarity, consistency, and academic rigor to our course materials. Their publishing approach felt thoughtful, responsive, and genuinely aligned with institutional priorities.",
    name: "Dr. Meera S.",
    role: "Academic Dean",
    institution: "North Valley University",
    highlight: "Curriculum Excellence",
  },
  {
    quote:
      "Their team helped us create a custom publishing programme aligned with our curriculum goals. The editorial quality, responsiveness, and institutional support exceeded expectations at every stage.",
    name: "Prof. Arjun P.",
    role: "Head of Curriculum",
    institution: "Crestline College",
    highlight: "Custom Publishing",
  },
  {
    quote:
      "From faculty coordination to delivery planning, the partnership was seamless. The final academic resources were polished, relevant, and highly effective for both educators and students.",
    name: "Ananya Rao",
    role: "Director of Learning Resources",
    institution: "BrightPath Institute",
    highlight: "Faculty Support",
  },
  {
    quote:
      "We needed a dependable publishing partner for scalable institutional adoption, and they delivered with precision. The quality of the content and collaboration stood out immediately.",
    name: "Rahul Menon",
    role: "Library & Publications Lead",
    institution: "Scholars’ Forum Academy",
    highlight: "Institutional Access",
  },
];

const trustPoints = [
  {
    title: "Student Impact",
    description:
      "Resources designed to improve learning access, clarity, and academic engagement.",
    icon: GraduationCap,
  },
  {
    title: "Institutional Trust",
    description:
      "Long-term partnerships shaped around academic quality and delivery consistency.",
    icon: Building2,
  },
  {
    title: "Proven Quality",
    description:
      "Editorial standards and academic support valued by faculty and education leaders.",
    icon: Star,
  },
];

export default function InstitutionReviews() {
  return (
    <section
      id="institution-reviews"
      className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* SECTION 1: INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c99947]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
              Institutional Reviews
            </p>
          </div>

          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.02] tracking-[-0.04em] text-[#17212b] sm:text-5xl md:text-6xl">
            Trusted by academic
            <span className="mt-2 block text-[#24463d]">
              leaders and institutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#4f5b67] md:text-[17px]">
            Feedback from universities, colleges, schools, and academic
            decision-makers who have partnered with us to strengthen publishing
            quality, curriculum support, and student learning outcomes.
          </p>
        </div>

        {/* SECTION 2: WHY THESE REVIEWS MATTER */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c99947]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                  Why institutions trust the partnership
                </p>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#e7dcc9] bg-white/75 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm md:grid-cols-3 md:p-6">
              {trustPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                        <Icon className="h-5 w-5 text-[#2f7d6b]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#55616d]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 3: REVIEW CARDS */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Institutional feedback
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2a35] md:text-4xl">
              Experiences from academic partners and decision-makers
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
              Explore how institutions describe the quality, responsiveness,
              and academic value of the publishing support they received.
            </p>
          </div>

          {/* mobile/tablet interaction cue */}
          <div className="mx-auto mb-5 flex max-w-5xl items-center justify-between rounded-2xl border border-[#e3d8c5] bg-white/85 px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:px-5 xl:hidden">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                Browse Reviews
              </p>
              <p className="mt-1 text-sm leading-6 text-[#55616d]">
                Read through the cards below and use the navigation controls to
                explore more feedback.
              </p>
            </div>
            <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9ecdf] bg-[#eef6f3] text-[#2f7d6b]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review, index) => (
              <article
                key={index}
                className="group flex min-h-[370px] flex-col justify-between rounded-[1.8rem] border border-[#e9dfcf] bg-white/95 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#d39a33]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-current" />
                      ))}
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f3e8]">
                      <Quote className="h-5 w-5 text-[#c98d2c]" />
                    </div>
                  </div>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                    {review.highlight}
                  </p>

                  <h4 className="mt-3 font-serif text-2xl leading-snug text-[#1f2a35]">
                    “Highly trusted”
                  </h4>

                  <p className="mt-4 text-[15px] leading-8 text-[#4f5b67]">
                    {review.quote}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#eee5d8] pt-5">
                  <p className="font-semibold text-[#1f2a35]">{review.name}</p>
                  <p className="mt-1 text-sm text-[#5d6773]">{review.role}</p>
                  <p className="mt-1 text-sm font-medium text-[#2f7d6b]">
                    {review.institution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 4: NAVIGATION CONTROLS */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 md:mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
            Review navigation
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8c9ab] bg-white/88 text-[#2f7d6b] shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:bg-white">
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7d6b] text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition hover:-translate-y-0.5 hover:bg-[#256757]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}