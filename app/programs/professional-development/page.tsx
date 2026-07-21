import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { getProgram } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Professional Development",
  description:
    "Hands-on professional development for educators, corporate teams, and organizations at the Austin STEM Center.",
};

export default function ProfessionalDevelopmentPage() {
  return <ProgramPage program={getProgram("professional-development")!} />;
}
