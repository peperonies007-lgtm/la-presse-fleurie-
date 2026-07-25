import CommandeClient from "@/components/CommandeClient";
import { getPieces } from "@/lib/pieces";

export default async function CommandePage() {
  const pieces = await getPieces();
  return <CommandeClient pieces={pieces} />;
}
