import { ArchiveProject } from "@/components/ArchiveProject";
import { archive } from "@/lib/archive";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("LADA 500K", archive["boevaya-classica"].description, "/boevaya-classica/");
export default function Page() { return <ArchiveProject slug="boevaya-classica" />; }
