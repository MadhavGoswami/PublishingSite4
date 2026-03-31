"use client";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Building2,
  GraduationCap,
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

export default function InstitutionReviews() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/80 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#c99947]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
                Institutional Reviews
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-[#1f2937] sm:text-5xl md:text-6xl">
              Trusted by academic
              <span className="block text-[#24463d]">leaders and institutions</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#66707b] md:text-lg">
              Feedback from universities, colleges, schools, and academic
              decision-makers who have partnered with us to strengthen
              publishing quality, curriculum support, and student learning
              outcomes.
            </p>
          </div>

          {/* Premium arrows */}
          <div className="flex items-center gap-4">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8c9ab] bg-white/85 text-[#2f7d6b] shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:bg-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7d6b] text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition hover:-translate-y-0.5 hover:bg-[#256757]">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Top support strip */}
        <div className="mb-10 grid gap-4 rounded-[2rem] border border-[#e7dcc9] bg-white/70 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm md:grid-cols-3 md:p-6">
          <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f3]">
                <GraduationCap className="h-5 w-5 text-[#2f7d6b]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                  Student Impact
                </p>
                <p className="mt-1 text-sm leading-6 text-[#66707b]">
                  Resources designed to improve learning access, clarity, and
                  academic engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f3]">
                <Building2 className="h-5 w-5 text-[#2f7d6b]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                  Institutional Trust
                </p>
                <p className="mt-1 text-sm leading-6 text-[#66707b]">
                  Long-term partnerships shaped around academic quality and
                  delivery consistency.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f3]">
                <Star className="h-5 w-5 text-[#2f7d6b]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                  Proven Quality
                </p>
                <p className="mt-1 text-sm leading-6 text-[#66707b]">
                  Editorial standards and academic support valued by faculty and
                  education leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="group flex min-h-[360px] flex-col justify-between rounded-[1.8rem] border border-[#e9dfcf] bg-white/92 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
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

                <h3 className="mt-3 font-serif text-2xl leading-snug text-[#24313d]">
                  “Highly trusted”
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-[#4f5b67]">
                  {review.quote}
                </p>
              </div>

              <div className="mt-8 border-t border-[#eee5d8] pt-5">
                <p className="font-semibold text-[#24313d]">{review.name}</p>
                <p className="mt-1 text-sm text-[#5d6773]">{review.role}</p>
                <p className="mt-1 text-sm font-medium text-[#2f7d6b]">
                  {review.institution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}