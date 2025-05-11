import React from "react";
import SectionLink from "./ui/SectionLink";

function AsideDshboard() {
  return (
    <aside className="flex flex-col justify-start gap-4 border-r-2 border-gray-500 p-4 md:p-8">
      <SectionLink href="/">Main</SectionLink>
      <SectionLink href="/progects">progects</SectionLink>
    </aside>
  );
}

export default AsideDshboard;
