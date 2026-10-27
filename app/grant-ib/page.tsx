import { ArchiveProject } from "@/components/ArchiveProject";
import { archive } from "@/lib/archive";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Грант ИБ", archive["grant-ib"].description, "/grant-ib/");
export default function Page() { return <ArchiveProject slug="grant-ib" />; }
