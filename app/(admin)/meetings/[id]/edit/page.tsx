import { Suspense } from 'react';

export default function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="space-y-6">
      <Suspense fallback={<p>Loading meeting...</p>}>
        <EditMeetingContent params={params} />
      </Suspense>
    </main>
  );
}

async function EditMeetingContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-3xl font-bold">
        Edit Meeting
      </h1>
      <p>Editing meeting: {id}</p>
    </>
  );
}
