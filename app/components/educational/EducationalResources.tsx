"use client";

import Image from "next/image";
import { BookOpen, MonitorPlay, FileText, ArrowUpRight } from "lucide-react";

const miniResources = [
  {
    title: "Digital Study Modules",
    description:
      "Interactive learning materials designed for self-paced study, revision, and blended classroom support.",
    icon: MonitorPlay,
  },
  {
    title: "Reference & Reading Sets",
    description:
      "Curated supplementary readings, source collections, and academic references for deeper subject exploration.",
    icon: FileText,
  },
];

export default function EducationalResources() {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f2] py-20 md:py-28">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:82px_82px]" />
      <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2f7d6b]">
            Educational Resources
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#24463d] sm:text-5xl md:text-6xl">
            A richer academic
            <span className="block">learning resource library</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#66707b] md:text-lg">
            Beyond books, explore premium educational resources that extend
            learning, strengthen classroom understanding, and support academic
            success across institutions and independent study environments.
          </p>
        </div>

        {/* Main editorial layout */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Featured large card */}
          <article className="overflow-hidden rounded-[2rem] border border-[#e8dfcf] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              {/* Image */}
              <div className="relative min-h-[320px] md:min-h-[100%]">
                <Image
                  src="/resource-feature.jpg"
                  alt="Educational resources for academic learning"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-[#eef6f3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f7d6b]">
                    Featured Resource Collection
                  </span>

                  <h3 className="mt-6 font-serif text-3xl leading-snug text-[#24313d] md:text-4xl">
                    Comprehensive learning materials for modern education
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#66707b]">
                    Access study guides, companion content, visual learning
                    assets, academic references, and flexible support materials
                    designed to make learning more structured, accessible, and
                    engaging across disciplines.
                  </p>

                  <div className="mt-6 flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f3e8]">
                      <BookOpen className="h-6 w-6 text-[#c98d2c]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#24313d]">
                        Built for students, institutions, and blended learning
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#66707b]">
                        Carefully structured resources for academic continuity
                        and better engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                    Explore Resource Library
                  </button>

                  <button className="rounded-full border border-[#d8c9ab] bg-white px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-[#fffdfa]">
                    View All Formats
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-8">
            {miniResources.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="group rounded-[1.75rem] border border-[#e8dfcf] bg-white/95 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f3e8]">
                      <Icon className="h-7 w-7 text-[#c98d2c]" strokeWidth={1.8} />
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef6f3] text-[#2f7d6b] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl leading-snug text-[#24313d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#66707b]">
                    {item.description}
                  </p>

                  <button className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-[#d39a33] transition group-hover:text-[#b57f20]">
                    Learn More
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-10 grid gap-6 rounded-[2rem] border border-[#eadfcb] bg-[#fcfaf6] p-8 shadow-[0_18px_50px_rgba(40,40,40,0.04)] md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl text-[#24313d]">200+</p>
            <p className="mt-2 text-sm leading-6 text-[#66707b]">
              curated learning resources across academic categories
            </p>
          </div>

          <div>
            <p className="font-serif text-4xl text-[#24313d]">Print + Digital</p>
            <p className="mt-2 text-sm leading-6 text-[#66707b]">
              accessible formats for classroom, library, and self-study use
            </p>
          </div>

          <div>
            <p className="font-serif text-4xl text-[#24313d]">Institution Ready</p>
            <p className="mt-2 text-sm leading-6 text-[#66707b]">
              aligned for academic delivery, support, and extended learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}