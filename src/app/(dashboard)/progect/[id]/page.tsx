import Link from "next/link";
import ProgectForm from "@/components/ProgectForm/ProgectForm";

export default async function ProgectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idNumber = Number(id);
  return (
    <div className="flex h-full flex-col p-8">
      <Link href={"/progects"} className="underline">
        Back to progects
      </Link>
      <ProgectForm type="update" id={idNumber} />
    </div>
  );
}
