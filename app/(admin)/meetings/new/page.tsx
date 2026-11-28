import MeetingForm from "@/components/MeetingForm";
import { createMeeting } from "@/lib/actions";

export default function NewMeetingPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Create New Meeting</h1>
      <p>Enter the information for the new sacrament meeting.</p>
      <MeetingForm action={createMeeting} />
    </main>
  );
}
