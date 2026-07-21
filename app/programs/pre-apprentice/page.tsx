import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { getProgram } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Pre-Apprentice Program",
  description:
    "Pre-apprenticeship programs for high school students and young adults exploring careers in robotics, automation, and advanced manufacturing.",
};

export default function PreApprenticePage() {
  return <ProgramPage program={getProgram("pre-apprentice")!} />;
}
