import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center space-y-6 mt-8">
      <h1 className="text-3xl text-blue-950 font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block text-blue-950 underline underline-offset-4  px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
