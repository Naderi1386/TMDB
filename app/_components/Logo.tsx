import Image from "next/image"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'}>
    <Image
    width={165}
    height={50}
    alt="TMDB-LOGO"
      src={
        "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
      }
    />
    </Link>
  );
}

export default Logo