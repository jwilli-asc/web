import Image from "next/image";
import Link from "next/link";
import { Bolt, Gear, PaperPlane } from "@/components/doodles";
import { Annotation, SectionHeading, Stamp } from "@/components/notebook";
import { camps } from "@/lib/data/camps";
import { facilities } from "@/lib/data/facilities";
import { formatDate, getPublishedPosts } from "@/lib/data/posts";
import { programs } from "@/lib/data/programs";

/* one logo-ring color per facility chip, in facilities-data order */
const chipAccents = [
  "border-l-rust/70",
  "border-l-gold",
  "border-l-brand-blue/70",
  "border-l-ring-teal",
  "border-l-ring-purple/80",
  "border-l-ring-green",
];

export default function Home() {
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <>
      <Stamp className="absolute top-[46px] right-5 z-10 rotate-[7deg] max-md:static max-md:mt-5 max-md:-rotate-2 max-md:px-2 max-md:py-1 max-md:text-[10px]">
        Grand opening · Aug 22
      </Stamp>

      <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start gap-11 pt-[58px] max-md:grid-cols-1">
        <div>
          <p className="mb-2.5 font-hand text-[18px] text-brand-blue">
            field notes — Stonehollow Dr., Austin, TX
          </p>
          <h1 className="text-[clamp(34px,5vw,58px)] leading-[1.08] font-bold tracking-[-0.01em] text-balance">
            Turning questions into <span className="hl">joyful discovery.</span>
          </h1>
          <p className="mt-5 max-w-[48ch] text-[17px] text-ink-soft">
            Hands-on experiences in science, art, engineering, and creative
            exploration — a nonprofit innovation hub where students, educators,
            and professionals all learn by making real things.
          </p>
          <Link
            href="/programs/field-trips"
            className="mt-7 inline-block rounded-[3px] bg-brand-blue px-[22px] py-3 text-[15px] text-paper shadow-[2px_2px_0_rgba(56,52,42,0.65)] transition-[transform,box-shadow] duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Book a field trip →
          </Link>
          <br />
          <Annotation className="mt-[26px]">
            ↳ ask about the <Link href="/facilities" className="underline">FIRST Arena</Link> — it&rsquo;s the good stuff!
          </Annotation>
        </div>

        <div className="tape relative max-w-[380px] rotate-[1.2deg] justify-self-end border border-ink/18 bg-card px-6 pt-[26px] pb-[22px] shadow-[3px_4px_0_rgba(56,52,42,0.12)] max-md:justify-self-start">
          <h3 className="mb-2.5 text-[15px] font-semibold italic">
            Today at the center
          </h3>
          <ul className="list-disc pl-5 text-[15px] leading-[1.8]">
            {facilities.slice(0, 4).map(({ name, slug, note }) => (
              <li key={slug}>
                <b className="font-semibold">{name}</b> — {note}
              </li>
            ))}
          </ul>
          <p className="mt-3.5 text-right font-hand text-[17px] text-brand-blue">
            — the ASC crew
          </p>
        </div>
      </div>

      {/* programs */}
      <section className="relative pt-24">
        <span
          aria-hidden
          className="pointer-events-none absolute top-20 right-6 hidden md:block"
        >
          <PaperPlane className="h-11 -rotate-6 text-brand-blue/50" />
        </span>
        <p className="mb-2 font-hand text-[18px] text-brand-blue">what we do</p>
        <SectionHeading>
          Programs for students, educators, and&nbsp;teams.
        </SectionHeading>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 max-md:grid-cols-1">
          {programs.map((p, i) => (
            <Link
              key={p.slug}
              href={p.href}
              className={`tape relative block border border-ink/18 bg-card p-5 pb-4 shadow-[3px_4px_0_rgba(56,52,42,0.12)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-0 ${
                i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.6deg]"
              }`}
            >
              <Image
                src={p.image}
                alt=""
                width={640}
                height={400}
                className="aspect-[8/5] w-full border border-ink/10 object-cover"
              />
              <h3 className="mt-4 text-[19px] font-bold">{p.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                {p.teaser}
              </p>
              <p className="mt-3 text-[15px] italic text-brand-blue">
                read more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* facilities */}
      <section className="relative pt-24">
        <span
          aria-hidden
          className="pointer-events-none absolute top-24 right-10 hidden md:block"
        >
          <Gear className="h-12 rotate-12 text-ink/25" />
        </span>
        <p className="mb-2 font-hand text-[18px] text-brand-blue">the space</p>
        <SectionHeading>A connected learning ecosystem.</SectionHeading>
        <p className="mt-4 max-w-[56ch] text-[17px] text-ink-soft">
          The ASC facility is designed to support robotics, engineering, and
          hands-on learning at every stage — six real spaces under one roof.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-3">
          {facilities.map(({ name, slug }, i) => (
            <li key={slug}>
              <Link
                href={`/facilities#${slug}`}
                className={`inline-block rounded-[3px] border border-ink/25 border-l-[3px] bg-card px-3 py-1.5 text-[14px] italic shadow-[2px_2px_0_rgba(56,52,42,0.08)] transition-transform duration-150 hover:-translate-y-0.5 ${chipAccents[i % chipAccents.length]}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <Annotation className="mt-6">
          ↳ {camps.length} summer camps ran here this year — <Link href="/programs/summer-camps" className="underline">see what we run</Link>
        </Annotation>
      </section>

      {/* blog */}
      <section className="relative pt-24">
        <span
          aria-hidden
          className="pointer-events-none absolute top-[88px] right-14 hidden md:block"
        >
          <Bolt className="h-11 rotate-6 text-gold/80" />
        </span>
        <p className="mb-2 font-hand text-[18px] text-brand-blue">
          from the notebook
        </p>
        <SectionHeading>Field notes.</SectionHeading>
        <p className="mt-4 max-w-[56ch] text-[17px] text-ink-soft">
          Practical insights, bold ideas, and behind-the-scenes stories from
          ASC&rsquo;s work with students, educators, and industry leaders.
        </p>
        <div className="mt-8 space-y-7">
          {posts.map((post) => (
            <article key={post.slug} className="max-w-[64ch]">
              <p className="font-hand text-[16px] text-brand-blue">
                {formatDate(post.date)} · {post.author}
              </p>
              <h3 className="mt-1 text-[19px] leading-snug font-bold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
        <p className="mt-7">
          <Link href="/blog" className="text-[15px] italic text-brand-blue underline decoration-brand-blue/50 underline-offset-[3px]">
            all field notes →
          </Link>
        </p>
      </section>
    </>
  );
}
