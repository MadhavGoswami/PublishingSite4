"use client";

import Image from "next/image";
import { ArrowRight, FileText, Microscope, LibraryBig } from "lucide-react";

const publications = [
  {
    title: "Peer-Reviewed Journals",
    description:
      "Access rigorously reviewed journals featuring original research, scholarly discussion, and discipline-specific insights for higher education and academic excellence.",
    image: "/peer.jpg",
    icon: FileText,
    tag: "Scholarly Access",
  },
  {
    title: "Scientific Publications",
    description:
      "Explore research-led publications developed for universities, laboratories, and advanced learners, with a focus on methodology, innovation, and evidence-based knowledge.",
    image: "/science.jpg",
    icon: Microscope,
    tag: "Research & Innovation",
  },
  {
    title: "Academic Archives",
    description:
      "Discover conference papers, institutional research materials, and reference publications that strengthen learning, citation support, and long-term academic study.",
    image: "/archi.jpg",
    icon: LibraryBig,
    tag: "Institutional Resources",
  },
];

export default function ResearchPublications() {
  return (
    <section
      id="research-publications"
      className="relative overflow-hidden bg-[#f8f5ee] py-20 md:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(36,70,61,0.07),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(201,153,71,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:78px_78px]" />

      {/* Decorative shape */}
      <div className="absolute left-8 top-24 hidden lg:block opacity-20">
        <div className="flex flex-col gap-3">
          <div className="h-6 w-48 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0" />
          <div className="ml-8 h-6 w-40 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0" />
          <div className="ml-16 h-6 w-32 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {/* SECTION 1: INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2bf] bg-white/85 px-4 py-2 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c99947]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f7d6b] sm:text-xs">
              Research Publications
            </p>
          </div>

          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.02] tracking-[-0.04em] text-[#1f2937] sm:text-5xl md:text-6xl">
            Trusted research resources
            <span className="mt-2 block text-[#24463d]">
              for students and institutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-[#55616d] md:text-[17px]">
            Support deeper learning, academic discovery, and institutional
            excellence with a refined collection of journals, scientific
            publications, and archival resources curated for modern education.
          </p>
        </div>

        {/* SECTION 2: WHO THIS IS FOR */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                Built for every academic layer
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#e7dcc9] bg-white/75 p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm md:grid-cols-3 md:p-6">
              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Students
                </p>
                <p className="mt-2 text-sm leading-6 text-[#55616d]">
                  Reliable publications that strengthen coursework, independent
                  reading, and research-based academic growth.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Faculty
                </p>
                <p className="mt-2 text-sm leading-6 text-[#55616d]">
                  Credible scholarly materials to support teaching,
                  referencing, curriculum design, and deeper subject
                  engagement.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#efe6d7] bg-[#fcfaf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6b1f]">
                  For Institutions
                </p>
                <p className="mt-2 text-sm leading-6 text-[#55616d]">
                  Curated research collections for universities, libraries, and
                  academic partners building stronger knowledge ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: PUBLICATION CATEGORIES */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
              Explore publication types
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2937] md:text-4xl">
              Research collections built for serious academic use
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#55616d]">
              Browse key publication formats designed to support scholarly
              reading, evidence-based learning, academic referencing, and
              institutional research access.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {publications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white/92 shadow-[0_20px_60px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.7),rgba(15,23,42,0.18),transparent)]" />

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 -mt-10 px-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-[#f1e6d4] bg-[#fffdf9] shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
                      <Icon className="h-8 w-8 text-[#c99947]" strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="px-6 pb-8 pt-5 md:px-8 md:pb-10">
                    <h4 className="font-serif text-2xl leading-tight text-[#24463d] md:text-[2rem]">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-[15px] leading-8 text-[#55616d]">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#eee5d8] pt-5">
                      <p className="text-sm font-medium text-[#73808c]">
                        Academic access
                      </p>

                      <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#c99947] transition hover:text-[#a8741f]">
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: CTA / INSTITUTIONAL ACCESS */}
        <div className="mt-16 md:mt-20">
          <div className="rounded-[2rem] border border-[#e7dcc9] bg-white/78 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6b1f]">
                  Institutional Research Access
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-[#1f2937] md:text-4xl">
                  Strengthen academic learning with credible publications
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-[#55616d] md:text-base">
                  Help students, educators, and universities engage with trusted
                  research materials designed to support serious study,
                  referencing quality, and long-term institutional excellence.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-[#2f7d6b] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                  View All Publications
                </button>

                <button className="rounded-full border border-[#d7c8ab] bg-[#fffdf9] px-8 py-4 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c99947] hover:bg-white">
                  Request Institutional Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}