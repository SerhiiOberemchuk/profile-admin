import { progects } from "@/data/progects";
import Image from "next/image";
import Link from "next/link";

export default async function ProgectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const progect = progects.find((progect) => progect.id === id);
  if (!progect) {
    return <div>Progect not found</div>;
  }
  const { id: idProgect, image, name } = progect;
  return (
    <div className="flex h-full flex-col p-8">
      <Link href={"/progects"}>Back to progects</Link>
      <div className="flex-1 p-4">
        <h3>ID My Progect: {idProgect}</h3>
        <div>
          <Image src={image} alt={name} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
