"use client";

import Image from "next/image";
import { Building2, GraduationCap, BookOpenCheck, BadgeCheck } from "lucide-react";

const partnershipPoints = [
  "Curriculum-aligned publishing support",
  "Custom editions for institutions",
  "Bulk academic distribution programs",
  "Long-term publishing collaborations",
];

const stats = [
  { number: "85+", label: "institutional partners" },
  { number: "140+", label: "custom publishing projects" },
  { number: "320K+", label: "academic copies distributed" },
  { number: "22", label: "subject verticals covered" },
];

export default function InstitutionalPartnerships() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] pt-20 md:pt-28">
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-[#2f7d6b]">
              Institutional Partnerships
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#24463d] sm:text-5xl md:text-6xl">
              Publishing partnerships
              <span className="block">built for academic impact</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#66707b] md:text-lg">
              We collaborate with universities, colleges, schools, libraries,
              and academic bodies to deliver reliable publishing solutions that
              strengthen curriculum delivery, support faculty needs, and expand
              access to high-quality educational content.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {partnershipPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#fff7ea]">
                    <BadgeCheck className="h-4 w-4 text-[#c98d2c]" />
                  </span>
                  <p className="text-[15px] leading-7 text-[#4f5b67]">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#2f7d6b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,125,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#256757]">
                Partner With Us
              </button>

              <button className="rounded-full border border-[#d8c9ab] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#c1943e] hover:bg-white">
                View Partnership Models
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[610px]">
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.10)]">
                <div className="relative h-[300px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/partnership-main.jpg"
                    alt="Institutional partnership meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:w-[72%] rounded-[1.5rem] border border-[#eadfcb] bg-[#fcfaf6]/95 p-5 shadow-[0_18px_50px_rgba(40,40,40,0.08)] backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a6b1f]">
                  Strategic Collaboration
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-[#1f2937]">
                  Flexible publishing support for schools and universities
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#66707b]">
                  From custom academic titles to institutional distribution,
                  our partnerships are designed to scale with learning needs.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#eef6f3] px-3 py-1 text-xs font-medium text-[#2f7d6b]">
                    Custom Editions
                  </span>
                  <span className="rounded-full bg-[#fff7ea] px-3 py-1 text-xs font-medium text-[#b07b24]">
                    Bulk Licensing
                  </span>
                  <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-[#475569]">
                    Faculty Support
                  </span>
                </div>
              </div>

              {/* decorative leaf-ish accent */}
              <div className="absolute -top-6 right-4">
                <div className="relative h-28 w-28">
                  <div className="absolute right-0 top-0 h-20 w-12 rounded-full bg-[#8aaa43]" />
                  <div className="absolute left-5 top-2 h-24 w-14 rounded-full bg-[#8aaa43]" />
                  <div className="absolute left-0 top-8 grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="h-3 w-3 rounded-full bg-[#d7a13f]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="relative mt-24 overflow-hidden rounded-t-[2rem] bg-[#efe1b4] px-6 py-12 md:px-10">
          <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_left,#d8b869_0,transparent_30%),radial-gradient(circle_at_right,#d8b869_0,transparent_28%)]" />
          <div className="relative grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-5xl text-[#34414d] md:text-6xl">
                  {item.number}
                </p>
                <p className="mt-3 text-base text-[#4b5563]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}