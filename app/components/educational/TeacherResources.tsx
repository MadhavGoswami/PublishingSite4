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
  Sparkles,
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

const benefits = [
  "Aligned with academic curriculum expectations and structured teaching delivery",
  "Supports classroom clarity, engagement, and better learning continuity",
  "Useful for individual teachers, faculty teams, and institutional departments",
];

export default function TeacherResources() {
  return (
    <section
      id="teacher-resources"
      className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-32"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* SECTION 1: INTRO / HERO PART */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c99947]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
              Teacher Resources
            </p>
          </div>

          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.02] tracking-[-0.04em] text-[#17202a] sm:text-5xl md:text-6xl">
            Premium teaching tools
            <span className="mt-2 block text-[#24463d]">
              for educators and institutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#4f5b67] md:text-[17px]">
            Support faculty with refined teaching resources designed for lesson
            preparation, classroom delivery, academic structure, and stronger
            institutional learning outcomes across modern education settings.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
              Explore Teacher Resources
            </button>

            <button className="rounded-full border border-[#d8c9ab] bg-white/90 px-7 py-3.5 text-sm font-semibold text-[#24313d] transition duration-300 hover:border-[#c1943e] hover:bg-white">
              Download Faculty Guide
            </button>
          </div>
        </div>

        {/* SECTION 2: AUDIENCE + STATS */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Built for your academic environment
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#e7dece] bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                      <Users className="h-5 w-5 text-[#2f7d6b]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                        For Educators
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#55616d]">
                        Day-to-day support for clearer teaching, stronger lesson
                        planning, and more confident classroom delivery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#e7dece] bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef6f3]">
                      <Building2 className="h-5 w-5 text-[#2f7d6b]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                        For Institutions
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#55616d]">
                        Faculty-ready academic materials that improve consistency,
                        quality, and support across departments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.5rem] border border-[#e7dece] bg-[#fcfaf6] p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                  <p className="font-serif text-3xl text-[#1c2732]">120+</p>
                  <p className="mt-2 text-sm leading-6 text-[#55616d]">
                    teaching support resources
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[#e7dece] bg-[#fcfaf6] p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
                  <p className="font-serif text-3xl text-[#1c2732]">35+</p>
                  <p className="mt-2 text-sm leading-6 text-[#55616d]">
                    subject-ready educator kits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHY IT MATTERS */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e8dcc8] bg-white/80 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8 md:p-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#c99947]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  Why this matters
                </p>
              </div>

              <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1f2a35] md:text-4xl">
                Designed to improve preparation, delivery, and outcomes
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
                These resources help educators save time, teach with greater
                clarity, and deliver more structured academic experiences across
                classrooms and institutions.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((point, index) => (
                <div
                  key={index}
                  className="rounded-[1.4rem] border border-[#eee2cf] bg-[#fcfaf6] p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#c99947]" />
                  <p className="mt-3 text-[15px] leading-7 text-[#42505c]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: RESOURCE CARDS */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Explore the collection
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2a35] md:text-4xl">
              Faculty-ready tools for modern teaching environments
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
              Browse structured resources developed to support lesson planning,
              instructional delivery, faculty development, and classroom clarity.
            </p>
          </div>

          {/* Mobile/tablet interaction cue */}
          <div className="mx-auto mb-5 flex max-w-5xl items-center justify-between rounded-2xl border border-[#e3d8c5] bg-white/80 px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:px-5 lg:hidden">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                Discover Resources
              </p>
              <p className="mt-1 text-sm leading-6 text-[#55616d]">
                Tap any card below to explore available teaching support tools.
              </p>
            </div>
            <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f3] text-[#2f7d6b]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teacherResources.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="group relative rounded-[1.8rem] border border-[#e9dfcf] bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b06b] to-transparent opacity-70" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f3e8] shadow-sm">
                      <Icon
                        className="h-7 w-7 text-[#c98d2c]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9ecdf] bg-[#eef6f3] text-[#2f7d6b] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                    {item.label}
                  </p>

                  <h4 className="mt-3 font-serif text-[1.6rem] leading-[1.2] text-[#1f2a35]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-[15px] leading-7 text-[#55616d]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.16em] text-[#c78c28] transition group-hover:text-[#a87115]">
                      View Details
                    </button>

                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7b8794] sm:hidden">
                      Tap
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}