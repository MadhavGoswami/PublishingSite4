"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The collaboration brought clarity, consistency, and academic rigor to our course materials. Their publishing process felt thoughtful, responsive, and institution-first.",
    name: "Dr. Meera S.",
    role: "Academic Dean",
    institution: "North Valley University",
    bg: "bg-[#f1dde2]",
  },
  {
    quote:
      "Their team helped us develop a custom publishing program aligned to our curriculum goals. The turnaround, editorial quality, and support exceeded expectations.",
    name: "Prof. Arjun P.",
    role: "Head of Curriculum",
    institution: "Crestline College",
    bg: "bg-[#ece9df]",
  },
  {
    quote:
      "From faculty coordination to distribution planning, the partnership was seamless. The final academic resources were polished, relevant, and highly usable in classrooms.",
    name: "Ananya Rao",
    role: "Director of Learning Resources",
    institution: "BrightPath Institute",
    bg: "bg-[#dcecf7]",
  },
  {
    quote:
      "We needed a trusted publishing partner for scalable institutional adoption, and they delivered with precision. The quality of content and collaboration stood out immediately.",
    name: "Rahul Menon",
    role: "Library & Publications Lead",
    institution: "Scholars’ Forum Academy",
    bg: "bg-[#f3e7b8]",
  },
];

export default function InstitutionReviews() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f2] py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* heading */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2f7d6b]">
              Institutional Reviews
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#24463d] sm:text-5xl md:text-6xl">
              What partner institutions say
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#66707b] md:text-lg">
              Feedback from academic institutions, administrators, and education
              leaders who have partnered with us on publishing, content
              development, and curriculum support.
            </p>
          </div>

          {/* visual arrows only for premium look */}
          <div className="flex items-center gap-4">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7d6b] text-white transition hover:bg-[#256757]">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7d6b] text-white transition hover:bg-[#256757]">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* review cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <article
              key={index}
              className={`${review.bg} min-h-[320px] rounded-sm p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1`}
            >
              <div className="flex gap-1 text-[#d89422]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-[#24313d]">
                “Highly reliable”
              </h3>

              <p className="mt-4 text-[15px] leading-8 text-[#4f5b67]">
                {review.quote}
              </p>

              <div className="mt-8">
                <p className="font-semibold text-[#24313d]">{review.name}</p>
                <p className="mt-1 text-sm text-[#5d6773]">
                  {review.role}
                </p>
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