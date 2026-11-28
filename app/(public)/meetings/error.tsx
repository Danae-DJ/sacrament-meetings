"use client";

import Link from "next/link";

export default function MeetingsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-3xl space-y-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-olive">Something Went Wrong</h1>

      <p>We could not load the meetings. Please try again.</p>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="bg-olive text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="border border-olive text-olive px-4 py-2 rounded hover:bg-sand transition"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
