"use client";

import Image from "next/image";
import {
  MonitorPlay,
  FileText,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const miniResources = [
  {
    title: "Digital Study Modules",
    description:
      "Interactive learning content developed for revision, self-paced study, classroom extension, and blended academic delivery.",
    icon: MonitorPlay,
    label: "Flexible Learning",
  },
  {
    title: "Reference & Reading Sets",
    description:
      "Curated supporting readings, source material, and subject references that encourage deeper understanding and stronger academic engagement.",
    icon: FileText,
    label: "Academic Support",
  },
];

export default function EducationalResources() {
  return (
    <section
      id="educational-resources"
      className="relative overflow-hidden bg-[#fbf8f2] py-20 md:py-28 lg:py-32"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:82px_82px]" />
      <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* SECTION 1: INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c99947]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
              Educational Resources
            </p>
          </div>

          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.02] tracking-[-0.04em] text-[#17212b] sm:text-5xl md:text-6xl">
            Enrich learning beyond
            <span className="mt-2 block text-[#24463d]">
              the traditional textbook
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#4f5b67] md:text-[17px]">
            Discover premium educational resources designed for students,
            educators, and institutions — supporting deeper understanding,
            classroom continuity, and more flexible academic learning across
            disciplines.
          </p>
        </div>

        {/* SECTION 2: WHO THIS IS FOR */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Built for every academic context
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#e7dcc9] bg-white/72 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm md:grid-cols-3 md:p-6">
              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Students
                </p>
                <p className="mt-2 text-sm leading-6 text-[#56616d]">
                  Resources that support revision, concept clarity, independent
                  study, and stronger day-to-day academic confidence.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Educators
                </p>
                <p className="mt-2 text-sm leading-6 text-[#56616d]">
                  Teaching aids, companion materials, and supplementary content
                  for more engaging and structured classroom delivery.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Institutions
                </p>
                <p className="mt-2 text-sm leading-6 text-[#56616d]">
                  Flexible academic support materials for libraries, blended
                  learning, curriculum enhancement, and institutional access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: FEATURED RESOURCE STORY */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Featured collection
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2a35] md:text-4xl">
              Comprehensive learning materials for modern education
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
              A curated learning library designed to support study, revision,
              classroom teaching, and flexible academic delivery across formats.
            </p>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-[#e8dfcf] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)]">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              {/* Collage Visual */}
              <div className="relative min-h-[640px] overflow-hidden border-b border-[#eee4d5] bg-[#f7f2e8] lg:min-h-full lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(36,70,61,0.06),transparent_30%),radial-gradient(circle_at_bottom,rgba(201,153,71,0.10),transparent_30%)]" />

                <div className="absolute left-5 top-5 z-20">
                  <span className="inline-flex rounded-full border border-white/50 bg-white/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#24463d] backdrop-blur-md">
                    Featured Learning Collection
                  </span>
                </div>

                <div className="relative z-10 flex h-full flex-col gap-4 p-5">
                  <div className="relative h-[34%] min-h-[190px] overflow-hidden rounded-[1.8rem] border border-white/80 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.3rem]">
                      <Image
                        src="/digital.jpg"
                        alt="Student using laptop for digital academic learning"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.26),rgba(15,23,42,0.08),transparent_52%)]" />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#24463d] backdrop-blur-sm">
                        Digital Learning
                      </div>
                    </div>
                  </div>

                  <div className="grid flex-1 grid-cols-[1.05fr_0.95fr] gap-4">
                    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                      <div className="relative h-full min-h-[235px] w-full overflow-hidden rounded-[1.3rem]">
                        <Image
                          src="/notes.jpg"
                          alt="Books, notes, and educational study materials"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.18),transparent_55%)]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-[1.6rem] border border-[#e7dcc9] bg-[#fffdf8] p-4 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a6b1f]">
                          Resource Focus
                        </p>
                        <h4 className="mt-2 font-serif text-lg leading-snug text-[#1f2a35]">
                          Structured support for study, revision, and classroom
                          extension
                        </h4>
                      </div>

                      <div className="relative flex-1 overflow-hidden rounded-[1.6rem] border border-white/80 bg-white p-2 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
                        <div className="relative h-full min-h-[120px] w-full overflow-hidden rounded-[1.15rem]">
                          <Image
                            src="/student.jpg"
                            alt="Students collaborating with academic learning resources"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.18),transparent_55%)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[1.4rem] border border-[#e7dcc9] bg-[#fffdf8] p-4 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                      <p className="font-serif text-2xl text-[#1f2a35]">
                        Print + Digital
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#5f6874]">
                        flexible formats for institutions and independent learners
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-[#e7dcc9] bg-[#fffdf8] p-4 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                      <p className="font-serif text-2xl text-[#1f2a35]">
                        Multi-Format
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#5f6874]">
                        study guides, visual aids, references, and support tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-[#eef6f3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f7d6b]">
                    Educational Resource Library
                  </span>

                  <h3 className="mt-6 font-serif text-3xl leading-snug text-[#1f2a35] md:text-4xl">
                    Designed to make learning more structured, accessible, and
                    engaging
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#55616d]">
                    Access study guides, companion content, visual learning
                    assets, academic references, and support materials designed
                    to strengthen learning for both independent learners and
                    institutions.
                  </p>

                  <div className="mt-7 rounded-[1.5rem] border border-[#ece3d3] bg-[#fcfaf6] p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f3e8]">
                        <GraduationCap className="h-6 w-6 text-[#c98d2c]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1f2a35]">
                          Designed for students, educators, and academic systems
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f6874]">
                          A stronger support layer for classroom learning,
                          digital access, and extended academic engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* mobile interaction cue */}
                  <div className="mt-6 rounded-[1.35rem] border border-[#e6dac7] bg-white/85 p-4 shadow-sm backdrop-blur-sm lg:hidden">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f3] text-[#2f7d6b]">
                        <ArrowUpRight className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                          Explore the library
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#55616d]">
                          Tap the cards below or use the buttons to browse formats
                          and discover learning resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                    Explore Resource Library
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button className="rounded-full border border-[#d8c9ab] bg-white px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-[#fffdfa]">
                    View All Formats
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* SECTION 4: SUPPORTING RESOURCE CARDS */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Additional resource formats
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2a35] md:text-4xl">
              Supporting tools for flexible academic delivery
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
              Explore focused academic resources that help learners study more
              effectively and help educators extend learning beyond the core text.
            </p>
          </div>

          <div className="mx-auto mb-5 flex max-w-5xl items-center justify-between rounded-2xl border border-[#e3d8c5] bg-white/85 px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:px-5 lg:hidden">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                Explore Resources
              </p>
              <p className="mt-1 text-sm leading-6 text-[#55616d]">
                Tap any card below to discover more learning support tools.
              </p>
            </div>
            <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9ecdf] bg-[#eef6f3] text-[#2f7d6b]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {miniResources.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="group rounded-[1.8rem] border border-[#e8dfcf] bg-white/96 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
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

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                    {item.label}
                  </p>

                  <h4 className="mt-3 font-serif text-2xl leading-snug text-[#1f2a35]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-[15px] leading-7 text-[#55616d]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#eee5d8] pt-5">
                    <button className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-[#d39a33] transition group-hover:text-[#b57f20]">
                      Learn More
                    </button>

                    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7b8794] sm:hidden">
                      Tap
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* SECTION 5: PROOF / INFO STRIP */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#c99947]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Resource value at a glance
              </p>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-[#eadfcb] bg-[#fcfaf6] p-8 shadow-[0_18px_50px_rgba(40,40,40,0.04)] md:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white/70 p-5">
              <p className="font-serif text-4xl text-[#1f2a35]">200+</p>
              <p className="mt-2 text-sm leading-6 text-[#5f6874]">
                curated educational resources across academic categories
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/70 p-5">
              <p className="font-serif text-4xl text-[#1f2a35]">Print + Digital</p>
              <p className="mt-2 text-sm leading-6 text-[#5f6874]">
                flexible access formats for classroom teaching, libraries, and
                self-study use
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-white/70 p-5">
              <p className="font-serif text-4xl text-[#1f2a35]">
                Institution Ready
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5f6874]">
                aligned for academic delivery, learner support, and extended
                educational engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}