import Image from "next/image";
import Link from "next/link";
import { getProgects } from "./action";

async function PageProgects() {
  const progects = await getProgects();

  return (
    <div className="flex flex-col gap-7">
      <h2 className="text-3xl font-bold"> My progects</h2>
      <ul className="flex flex-col gap-4">
        {progects.map(({ id, image_src, title }) => (
          <li
            key={id}
            className="flex items-center gap-2 rounded-4xl border border-gray-500 p-4"
          >
            <Image src={image_src} alt={title} width={100} height={100} />
            <h3 className="ml-8 text-3xl font-bold">{title}</h3>
            <div className="ml-auto">
              <Link
                href={`/progect/${id}`}
                className="mr-3 rounded-3xl border border-green-600 bg-green-300 px-4 py-2 hover:bg-green-500"
              >
                Details progect
              </Link>
              <button
                type="button"
                className="mr-3 rounded-3xl border border-red-600 bg-red-300 px-4 py-2 hover:bg-red-500"
              >
                Delete progect
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageProgects;
