"use server";

import { designSuggestion } from '@/ai/flows/design-suggestion';
import { designSuggestionText } from '@/ai/flows/design-suggestion-text';
import { z } from 'zod';

const imageSchema = z.object({
  photoDataUri: z.string().min(1, { message: 'Image is required.' }),
  description: z.string().optional(),
});

type ImageFormState = {
  data?: { designSuggestion: string };
  error?: string | { photoDataUri?: string[], description?: string[] };
} | null;

export async function getSuggestionForImage(prevState: ImageFormState, formData: FormData): Promise<ImageFormState> {
  const validatedFields = imageSchema.safeParse({
    photoDataUri: formData.get('photoDataUri'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const result = await designSuggestion(validatedFields.data);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}

const textSchema = z.object({
  roomDescription: z.string().min(10, { message: 'Please provide a more detailed description.' }),
});


type TextFormState = {
  data?: { designSuggestion: string };
  error?: string | { roomDescription?: string[] };
} | null;

export async function getSuggestionForText(prevState: TextFormState, formData: FormData): Promise<TextFormState> {
    const validatedFields = textSchema.safeParse({
        roomDescription: formData.get('roomDescription'),
    });

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }
    
    try {
        const result = await designSuggestionText(validatedFields.data);
        return { data: result };
    } catch (e) {
      console.error(e);
      return { error: 'An unexpected error occurred. Please try again.' };
    }
}
