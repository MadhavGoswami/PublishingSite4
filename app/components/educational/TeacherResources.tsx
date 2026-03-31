"use client";

import {
  Presentation,
  ClipboardList,
  BookMarked,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Users,
} from "lucide-react";

const teacherResources = [
  {
    title: "Lesson Planning Guides",
    description:
      "Structured academic planning tools that help educators organise modules, learning outcomes, weekly flow, and classroom progression with greater clarity.",
    icon: ClipboardList,
    label: "Planning Support",
  },
  {
    title: "Teaching Companion Notes",
    description:
      "Instructor-focused summaries, topic references, and companion materials designed to strengthen explanation quality and academic delivery.",
    icon: BookMarked,
    label: "Classroom Delivery",
  },
  {
    title: "Presentation-Ready Content",
    description:
      "Visually organised teaching assets and ready-to-use instructional materials created for modern classrooms, workshops, and blended learning settings.",
    icon: Presentation,
    label: "Ready to Use",
  },
  {
    title: "Faculty Development Support",
    description:
      "Practical academic resources that assist institutions and educators in improving pedagogy, engagement strategies, and subject confidence.",
    icon: GraduationCap,
    label: "Institutional Growth",
  },
];

export default function TeacherResources() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/80 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#c99947]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
                Teacher Resources
              </p>
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-[#1f2937] sm:text-5xl md:text-6xl">
              Premium teaching tools
              <span className="block text-[#24463d]">for educators and institutions</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#66707b] md:text-lg">
              Support faculty with refined teaching resources designed for lesson
              preparation, classroom delivery, academic structure, and stronger
              institutional learning outcomes across modern education settings.
            </p>

            {/* Audience strip */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#e7dece] bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f3]">
                    <Users className="h-5 w-5 text-[#2f7d6b]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                      For Educators
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#66707b]">
                      Day-to-day support for clearer teaching, better preparation,
                      and more confident classroom delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-[#e7dece] bg-white/85 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f3]">
                    <Building2 className="h-5 w-5 text-[#2f7d6b]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                      For Institutions
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#66707b]">
                      Faculty-ready materials that help colleges and schools
                      improve consistency, support, and learning quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#e7dece] bg-[#fcfaf6] p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <p className="font-serif text-3xl text-[#24313d]">120+</p>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  teaching support resources
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#e7dece] bg-[#fcfaf6] p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                <p className="font-serif text-3xl text-[#24313d]">35+</p>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  subject-ready educator kits
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Aligned with academic curriculum expectations and structured teaching delivery",
                "Supports classroom clarity, engagement, and better learning continuity",
                "Useful for individual teachers, faculty teams, and institutional departments",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c99947]" />
                  <p className="text-[15px] leading-7 text-[#4f5b67]">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                Explore Teacher Resources
              </button>

              <button className="rounded-full border border-[#d8c9ab] bg-white/85 px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-white">
                Download Faculty Guide
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
                    className="group rounded-[1.8rem] border border-[#e9dfcf] bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
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

                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl leading-snug text-[#24313d]">
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
            <div className="mt-6 rounded-[1.8rem] border border-[#eadfcb] bg-[#fcfaf6]/95 p-6 shadow-[0_18px_50px_rgba(40,40,40,0.06)] backdrop-blur-md md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Faculty Support
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug text-[#24313d] md:text-[2rem]">
                Built to strengthen preparation, delivery, and academic outcomes
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#66707b]">
                Our teacher resources help educators reduce preparation time,
                improve classroom structure, and access dependable academic
                support materials that benefit both learners and institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}