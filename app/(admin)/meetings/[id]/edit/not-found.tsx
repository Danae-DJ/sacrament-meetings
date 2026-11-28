import Link from "next/link";

export default function MeetingNotFound() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-olive">Meeting Not Found</h1>

      <p>
        The meeting you are trying to edit does not exist or may have been
        removed.
      </p>

      <Link
        href="/meetings"
        className="inline-block bg-olive text-white px-4 py-2 rounded hover:opacity-90 transition"
      >
        Back to Meetings
      </Link>
    </main>
  );
}
