import { progects } from "@/data/progects";
import Image from "next/image";
import Link from "next/link";

function PageProgects() {
  return (
    <div className="flex flex-col gap-7">
      <h2 className="text-3xl font-bold"> My progects</h2>
      <ul className="flex flex-col gap-4">
        {progects.map(({ id, image, name }) => (
          <li key={id} className="flex items-center gap-2">
            <Image src={image} alt={name} width={50} height={50} />
            <h3>{name}</h3>
            <Link href={`/progect/${id}`}>Details progect</Link>
            <button type="button" className="text-red-700">
              Delete progect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageProgects;
