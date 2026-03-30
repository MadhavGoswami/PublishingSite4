"use client";

import {
  Presentation,
  ClipboardList,
  BookMarked,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const teacherResources = [
  {
    title: "Lesson Planning Guides",
    description:
      "Structured planning materials that help educators organize topics, learning objectives, and classroom flow with clarity.",
    icon: ClipboardList,
  },
  {
    title: "Teaching Companion Notes",
    description:
      "Instructor-focused notes, summaries, and academic references designed to support stronger classroom delivery.",
    icon: BookMarked,
  },
  {
    title: "Presentation-Ready Content",
    description:
      "Visually organized teaching assets and ready-to-use classroom support materials for modern instruction.",
    icon: Presentation,
  },
  {
    title: "Faculty Development Support",
    description:
      "Resources that assist institutions and educators in improving engagement, pedagogy, and subject delivery.",
    icon: GraduationCap,
  },
];

export default function TeacherResources() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-20 md:py-28">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2f7d6b]">
              Teacher Resources
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#24463d] sm:text-5xl md:text-6xl">
              Premium tools
              <span className="block">for confident teaching</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#66707b] md:text-lg">
              Support educators with refined teaching resources designed for
              lesson planning, classroom engagement, subject delivery, and
              academic consistency across institutions and learning environments.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#e7dece] bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <p className="font-serif text-3xl text-[#24313d]">120+</p>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  teaching support resources
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#e7dece] bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <p className="font-serif text-3xl text-[#24313d]">35+</p>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  subject-ready educator kits
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d39a33]" />
                <p className="text-[15px] leading-7 text-[#4f5b67]">
                  Designed to align with academic curriculum requirements
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d39a33]" />
                <p className="text-[15px] leading-7 text-[#4f5b67]">
                  Built for classroom clarity, structure, and engagement
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d39a33]" />
                <p className="text-[15px] leading-7 text-[#4f5b67]">
                  Helpful for individual educators and institutional faculty teams
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                Explore Teacher Resources
              </button>

              <button className="rounded-full border border-[#d8c9ab] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-white">
                Download Resource Guide
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PANELS */}
          <div className="relative">
            <div className="grid gap-6 sm:grid-cols-2">
              {teacherResources.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={index}
                    className="group rounded-[1.8rem] border border-[#e9dfcf] bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f3e8]">
                        <Icon
                          className="h-7 w-7 text-[#c98d2c]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6f3] text-[#2f7d6b] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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
                      View Details
                    </button>
                  </article>
                );
              })}
            </div>

            {/* floating support card */}
            <div className="mt-6 rounded-[1.8rem] border border-[#eadfcb] bg-[#fcfaf6]/95 p-6 shadow-[0_18px_50px_rgba(40,40,40,0.06)] backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Faculty Support
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug text-[#24313d]">
                Built to support better preparation and better outcomes
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#66707b]">
                Our teacher resources help faculty save preparation time,
                improve classroom structure, and access dependable academic
                support materials for everyday teaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}