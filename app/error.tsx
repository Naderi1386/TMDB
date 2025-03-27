"use client";

interface ErrorType {
  message: string;
}

interface ErrorPropsType {
  error: ErrorType;
  reset: () => void;
}

const error = ({ error, reset }: ErrorPropsType) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6 mt-8 text-blue-950">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block text-blue-950 underline underline-offset-4  px-6 py-3 text-lg cursor-pointer"
      >
        Try again
      </button>
    </main>
  );
};

export default error;
