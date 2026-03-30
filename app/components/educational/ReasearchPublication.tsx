"use client";

import Image from "next/image";
import { FileText, Microscope, LibraryBig } from "lucide-react";

const publications = [
  {
    title: "Peer-Reviewed Journals",
    description:
      "Access carefully curated scholarly journals featuring original research, critical analysis, and academic insights across disciplines.",
    image: "/research1.jpg",
    icon: FileText,
  },
  {
    title: "Scientific Publications",
    description:
      "Explore publications designed for higher education and research communities, covering innovation, methodology, and evidence-based studies.",
    image: "/research2.jpg",
    icon: Microscope,
  },
  {
    title: "Academic Archives",
    description:
      "Discover valuable reference publications, conference papers, and institutional research materials that support advanced learning.",
    image: "/research3.jpg",
    icon: LibraryBig,
  },
];

export default function ResearchPublications() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] py-20 md:py-28">
      {/* soft decorative shape */}
      <div className="absolute left-10 top-24 hidden lg:block opacity-20">
        <div className="flex flex-col gap-3">
          <div className="h-6 w-48 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0" />
          <div className="h-6 w-40 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0 ml-8" />
          <div className="h-6 w-32 rounded-full border-[10px] border-[#cfd8c2] border-r-0 border-b-0 ml-16" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2f7d6b]">
            Research Publications
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#24463d] sm:text-5xl md:text-6xl">
            Explore Trusted
            <span className="block">Research & Scholarship</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#66707b] md:text-lg">
            A refined collection of journals, scholarly articles, and academic
            resources created to support institutions, educators, and advanced
            learners with credible research-driven content.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="group overflow-hidden bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2"
              >
                {/* image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* icon badge */}
                <div className="relative z-10 -mt-10 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                    <Icon className="h-8 w-8 text-[#d39a33]" strokeWidth={1.7} />
                  </div>
                </div>

                {/* content */}
                <div className="px-8 pb-10 pt-6 text-center">
                  <h3 className="font-serif text-3xl leading-tight text-[#24463d]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#66707b]">
                    {item.description}
                  </p>

                  <button className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-[#d39a33] transition hover:text-[#b57f20]">
                    Read More
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* bottom cta */}
        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-[#2f7d6b] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
}