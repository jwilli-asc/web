import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Atom } from "@/components/doodles";
import { Annotation, PageIntro } from "@/components/notebook";
import { facilities } from "@/lib/data/facilities";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Six real spaces under one roof: FIRST Robotics arena, wood shop with a 4×8 CNC router, metal shop, electronics lab, makerspace, and teaching kitchen.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageIntro
        note="field notes — the building"
        title={
          <>
            Six real spaces, one{" "}
            <span className="hl-purple">connected ecosystem.</span>
          </>
        }
        doodle={<Atom className="h-14 rotate-12 text-ring-teal/60" />}
      >
        <p className="mt-5 max-w-[56ch] text-[17px] text-ink-soft">
          The ASC facility is a connected learning ecosystem designed to
          support robotics, engineering, and hands-on learning at every stage.
        </p>
      </PageIntro>

      <div className="mt-14 space-y-16">
        {facilities.map((f, i) => (
          <section
            key={f.slug}
            id={f.slug}
            className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start gap-x-10 gap-y-5 max-md:grid-cols-1"
          >
            <figure
              className={`photo max-w-[420px] ${i % 2 ? "rotate-[0.8deg] md:order-2 md:justify-self-end" : "-rotate-[0.7deg]"}`}
            >
              <Image
                src={f.image}
                alt={f.name}
                width={840}
                height={560}
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-2 text-center font-hand text-[16px] text-brand-blue">
                {f.note}
              </figcaption>
            </figure>
            <div className={i % 2 ? "md:order-1" : ""}>
              <h2 className="text-[24px] font-bold">{f.name}</h2>
              <div className="prose-note mt-3 text-[16px]">
                {f.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="pt-16 pb-4">
        <Annotation>
          ↳ want to see it in person?{" "}
          <Link href="/programs/field-trips" className="underline">
            book a field trip
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="underline">
            come say hi
          </Link>
        </Annotation>
      </div>
    </>
  );
}
