import Link from "next/link";
import React from "react";

type Props = { children?: React.ReactNode; href: string };

function SectionLink({ children, href = "/" }: Props) {
  return (
    <Link
      href={href}
      className="rounded-2xl bg-blue-500 p-4 text-white uppercase hover:bg-blue-800"
    >
      {children}
    </Link>
  );
}

export default SectionLink;
