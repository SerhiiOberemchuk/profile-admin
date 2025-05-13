import Image from "next/image";
import { FormValues } from "./ProgectForm";

export default function ProgectImage({
  id,
  image_src,
}: Pick<FormValues, "id" | "image_src">) {
  return (
    <Image
      src={image_src ? image_src : "/SO.png"}
      alt={"title"}
      width={600}
      height={600}
    />
  );
}
