import PanierClient from "@/components/PanierClient";
import { getPieces } from "@/lib/pieces";

export default async function PanierPage() {
  const pieces = await getPieces();
  return <PanierClient pieces={pieces} />;
}
