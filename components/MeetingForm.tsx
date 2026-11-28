"use client";

import { useActionState } from "react";
import type { SacramentMeeting } from "@/lib/types";
import type { State } from "@/lib/actions";

type MeetingFormAction = (
  prevState: State,
  formData: FormData,
) => Promise<State>;

type Props = {
  action: MeetingFormAction;
  initialData?: SacramentMeeting;
};

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  return (
    <p id={id} aria-live="polite" className="mt-1 text-sm text-red-700">
      {errors?.join(" ") ?? ""}
    </p>
  );
}

export default function MeetingForm({ action, initialData }: Props) {
  const initialState: State = {};
  const [state, formAction, isPending] = useActionState(action, initialState);

  const speakersValue =
    initialData?.speakers
      .map((speaker) => `${speaker.name}|${speaker.topic}|${speaker.type}`)
      .join("\n") ?? "";

  return (
    <form action={formAction} className="space-y-6">
      <p aria-live="polite" className="text-sm text-red-700">
        {state.message ?? ""}
      </p>

      <div>
        <label htmlFor="date" className="mb-1 block font-medium">
          Meeting Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          defaultValue={initialData?.date ?? ""}
          aria-describedby="date-error"
          className="w-full rounded border p-2"
        />
        <FieldError id="date-error" errors={state.errors?.date} />
      </div>

      <div>
        <label htmlFor="meetingType" className="mb-1 block font-medium">
          Meeting Type
        </label>
        <select
          id="meetingType"
          name="meetingType"
          required
          defaultValue={initialData?.meetingType ?? "regular"}
          aria-describedby="meetingType-error"
          className="w-full rounded border p-2"
        >
          <option value="testimony">Testimony</option>
          <option value="regular">Regular</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
          <option value="special">Special</option>
        </select>
        <FieldError id="meetingType-error" errors={state.errors?.meetingType} />
      </div>

      <div>
        <label htmlFor="presiding" className="mb-1 block font-medium">
          Presiding
        </label>
        <input
          id="presiding"
          name="presiding"
          required
          defaultValue={initialData?.presiding ?? ""}
          aria-describedby="presiding-error"
          className="w-full rounded border p-2"
        />
        <FieldError id="presiding-error" errors={state.errors?.presiding} />
      </div>

      <div>
        <label htmlFor="conducting" className="mb-1 block font-medium">
          Conducting
        </label>
        <input
          id="conducting"
          name="conducting"
          required
          defaultValue={initialData?.conducting ?? ""}
          aria-describedby="conducting-error"
          className="w-full rounded border p-2"
        />
        <FieldError id="conducting-error" errors={state.errors?.conducting} />
      </div>

      <div>
        <label htmlFor="announcements" className="mb-1 block font-medium">
          Announcements (one per line)
        </label>
        <textarea
          id="announcements"
          name="announcements"
          rows={3}
          defaultValue={initialData?.announcements?.join("\n") ?? ""}
          aria-describedby="announcements-error"
          className="w-full rounded border p-2"
        />
        <FieldError
          id="announcements-error"
          errors={state.errors?.announcements}
        />
      </div>

      <fieldset className="space-y-3 rounded border p-4">
        <legend className="px-2 font-semibold">Opening Hymn</legend>

        <div>
          <label htmlFor="openingHymnNumber" className="mb-1 block">
            Hymn Number
          </label>
          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            min="1"
            required
            defaultValue={initialData?.openingHymn.number ?? ""}
            aria-describedby="openingHymnNumber-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="openingHymnNumber-error"
            errors={state.errors?.openingHymnNumber}
          />
        </div>

        <div>
          <label htmlFor="openingHymnTitle" className="mb-1 block">
            Hymn Title
          </label>
          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            required
            defaultValue={initialData?.openingHymn.title ?? ""}
            aria-describedby="openingHymnTitle-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="openingHymnTitle-error"
            errors={state.errors?.openingHymnTitle}
          />
        </div>
      </fieldset>

      <div>
        <label htmlFor="openingPrayer" className="mb-1 block font-medium">
          Opening Prayer
        </label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          required
          defaultValue={initialData?.openingPrayer ?? ""}
          aria-describedby="openingPrayer-error"
          className="w-full rounded border p-2"
        />
        <FieldError
          id="openingPrayer-error"
          errors={state.errors?.openingPrayer}
        />
      </div>

      <div>
        <label htmlFor="wardBusiness" className="mb-1 block font-medium">
          Ward Business (one per line)
        </label>
        <textarea
          id="wardBusiness"
          name="wardBusiness"
          rows={3}
          defaultValue={
            initialData?.wardBusiness
              .map((item) => item.description)
              .join("\n") ?? ""
          }
          aria-describedby="wardBusiness-error"
          className="w-full rounded border p-2"
        />
        <FieldError
          id="wardBusiness-error"
          errors={state.errors?.wardBusiness}
        />
      </div>

      <div>
        <label className="flex items-center gap-2" htmlFor="stakeBusiness">
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            defaultChecked={initialData?.stakeBusiness ?? false}
          />
          Stake Business
        </label>
        <FieldError
          id="stakeBusiness-error"
          errors={state.errors?.stakeBusiness}
        />
      </div>

      <fieldset className="space-y-3 rounded border p-4">
        <legend className="px-2 font-semibold">Sacrament Hymn</legend>

        <div>
          <label htmlFor="sacramentHymnNumber" className="mb-1 block">
            Hymn Number
          </label>
          <input
            id="sacramentHymnNumber"
            name="sacramentHymnNumber"
            type="number"
            min="1"
            required
            defaultValue={initialData?.sacramentHymn.number ?? ""}
            aria-describedby="sacramentHymnNumber-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="sacramentHymnNumber-error"
            errors={state.errors?.sacramentHymnNumber}
          />
        </div>

        <div>
          <label htmlFor="sacramentHymnTitle" className="mb-1 block">
            Hymn Title
          </label>
          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            required
            defaultValue={initialData?.sacramentHymn.title ?? ""}
            aria-describedby="sacramentHymnTitle-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="sacramentHymnTitle-error"
            errors={state.errors?.sacramentHymnTitle}
          />
        </div>
      </fieldset>

      <div>
        <label htmlFor="speakers" className="mb-1 block font-medium">
          Speakers (one per line: name|topic|type)
        </label>
        <textarea
          id="speakers"
          name="speakers"
          rows={4}
          defaultValue={speakersValue}
          aria-describedby="speakers-error"
          className="w-full rounded border p-2"
          placeholder={
            "John Smith|Faith in Christ|speaker\nJane Doe|Musical Selection|musical-number"
          }
        />
        <FieldError id="speakers-error" errors={state.errors?.speakers} />
      </div>

      <fieldset className="space-y-3 rounded border p-4">
        <legend className="px-2 font-semibold">Closing Hymn</legend>

        <div>
          <label htmlFor="closingHymnNumber" className="mb-1 block">
            Hymn Number
          </label>
          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            min="1"
            required
            defaultValue={initialData?.closingHymn.number ?? ""}
            aria-describedby="closingHymnNumber-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="closingHymnNumber-error"
            errors={state.errors?.closingHymnNumber}
          />
        </div>

        <div>
          <label htmlFor="closingHymnTitle" className="mb-1 block">
            Hymn Title
          </label>
          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            required
            defaultValue={initialData?.closingHymn.title ?? ""}
            aria-describedby="closingHymnTitle-error"
            className="w-full rounded border p-2"
          />
          <FieldError
            id="closingHymnTitle-error"
            errors={state.errors?.closingHymnTitle}
          />
        </div>
      </fieldset>

      <div>
        <label htmlFor="closingPrayer" className="mb-1 block font-medium">
          Closing Prayer
        </label>
        <input
          id="closingPrayer"
          name="closingPrayer"
          required
          defaultValue={initialData?.closingPrayer ?? ""}
          aria-describedby="closingPrayer-error"
          className="w-full rounded border p-2"
        />
        <FieldError
          id="closingPrayer-error"
          errors={state.errors?.closingPrayer}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-800 px-5 py-2 font-semibold text-white hover:bg-blue-900 disabled:opacity-50"
      >
        {isPending
          ? "Saving..."
          : initialData
            ? "Update Meeting"
            : "Create Meeting"}
      </button>
    </form>
  );
}
