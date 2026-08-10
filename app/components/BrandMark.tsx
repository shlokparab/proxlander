import Image from "next/image";

export default function BrandMark() {
  return (
    <span className="brand-logo-mark" aria-hidden="true">
      <Image src="/brand/proxima.png" alt="" fill sizes="30px" />
    </span>
  );
}
