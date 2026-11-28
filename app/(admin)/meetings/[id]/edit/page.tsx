import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import MeetingForm from "@/components/MeetingForm";
import { updateMeeting } from "@/lib/actions";
import { getMeetingById } from "@/lib/meetings-db";

export default function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={<p className="text-center py-10">Loading meeting...</p>}
    >
      <EditMeetingContent params={params} />
    </Suspense>
  );
}

async function EditMeetingContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  await connection();

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  const updateMeetingWithId = updateMeeting.bind(null, meetingId);

  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Edit Meeting</h1>
      <p>Update the information for this sacrament meeting.</p>

      <MeetingForm action={updateMeetingWithId} initialData={meeting} />
    </main>
  );
}
