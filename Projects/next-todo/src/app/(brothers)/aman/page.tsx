import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <div >
            aman tailor
            <Image
                src='./next.svg'
                alt='vercel logo'
                height={320}
                width={320}
            />
            <Link href='/param'>hello</Link>
       </div>
    );
  }
  