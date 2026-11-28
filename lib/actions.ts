"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  addMeeting,
  updateMeeting as updateMeetingInDb,
  deleteMeeting as deleteMeetingInDb,
} from "@/lib/meetings-db";

export type State = {
  message?: string;
  errors?: Record<string, string[]>;
};

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Please select a meeting date."),
  meetingType: z.enum(["testimony", "regular", "stake", "general", "special"]),
  presiding: z.string().trim().min(1, "Presiding is required."),
  conducting: z.string().trim().min(1, "Conducting is required."),
  announcements: z.string().optional(),
  openingHymnNumber: z.coerce.number().int().positive(),
  openingHymnTitle: z.string().trim().min(1, "Opening hymn title is required."),
  openingPrayer: z.string().trim().min(1, "Opening prayer is required."),
  wardBusiness: z.string().optional(),
  stakeBusiness: z.boolean(),
  sacramentHymnNumber: z.coerce.number().int().positive(),
  sacramentHymnTitle: z
    .string()
    .trim()
    .min(1, "Sacrament hymn title is required."),
  speakers: z.string().optional(),
  closingHymnNumber: z.coerce.number().int().positive(),
  closingHymnTitle: z.string().trim().min(1, "Closing hymn title is required."),
  closingPrayer: z.string().trim().min(1, "Closing prayer is required."),
});

function getFormValues(formData: FormData) {
  return {
    date: String(formData.get("date") ?? ""),
    meetingType: String(formData.get("meetingType") ?? ""),
    presiding: String(formData.get("presiding") ?? ""),
    conducting: String(formData.get("conducting") ?? ""),
    announcements: String(formData.get("announcements") ?? ""),
    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: String(formData.get("openingHymnTitle") ?? ""),
    openingPrayer: String(formData.get("openingPrayer") ?? ""),
    wardBusiness: String(formData.get("wardBusiness") ?? ""),
    stakeBusiness: formData.get("stakeBusiness") === "on",
    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: String(formData.get("sacramentHymnTitle") ?? ""),
    speakers: String(formData.get("speakers") ?? ""),
    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: String(formData.get("closingHymnTitle") ?? ""),
    closingPrayer: String(formData.get("closingPrayer") ?? ""),
  };
}

function toMeetingData(data: z.infer<typeof MeetingFormSchema>) {
  const speakers =
    data.speakers
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [name = "", topic = "", type = "speaker"] = line.split("|");
        return {
          name: name.trim(),
          topic: topic.trim(),
          type: type.trim() as "speaker" | "musical-number",
        };
      }) ?? [];

  return {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,
    announcements:
      data.announcements
        ?.split("\n")
        .map((item) => item.trim())
        .filter(Boolean) ?? [],
    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },
    openingPrayer: data.openingPrayer,
    wardBusiness:
      data.wardBusiness
        ?.split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((description) => ({ description })) ?? [],
    stakeBusiness: data.stakeBusiness,
    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },
    speakers,
    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },
    closingPrayer: data.closingPrayer,
  };
}

export async function createMeeting(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(getFormValues(formData));

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  try {
    await addMeeting(toMeetingData(validatedFields.data));
  } catch (error) {
    console.error("Create meeting error:", error);
    throw new Error("Unable to create the meeting. Please try again.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(getFormValues(formData));

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  try {
    const updated = await updateMeetingInDb(
      id,
      toMeetingData(validatedFields.data),
    );

    if (!updated) {
      throw new Error("Meeting not found.");
    }
  } catch (error) {
    console.error("Update meeting error:", error);
    throw new Error("Unable to update the meeting. Please try again.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function deleteMeeting(formData: FormData): Promise<void> {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid meeting ID.");
  }

  try {
    const deleted = await deleteMeetingInDb(id);

    if (!deleted) {
      throw new Error("Meeting not found.");
    }
  } catch (error) {
    console.error("Delete meeting error:", error);
    throw new Error("Unable to delete the meeting. Please try again.");
  }

  revalidatePath("/meetings");
}
