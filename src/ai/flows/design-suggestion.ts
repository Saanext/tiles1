'use server';

/**
 * @fileOverview AI-powered design suggestion flow using STYLEON ART FACTORY products.
 *
 * - designSuggestion - A function that provides design suggestions based on a user-uploaded photo.
 * - DesignSuggestionInput - The input type for the designSuggestion function.
 * - DesignSuggestionOutput - The return type for the designSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignSuggestionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a room, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().optional().describe('Optional description of the room and desired design style.'),
});
export type DesignSuggestionInput = z.infer<typeof DesignSuggestionInputSchema>;

const DesignSuggestionOutputSchema = z.object({
  designSuggestion: z.string().describe('A description of design suggestions incorporating STYLEON ART FACTORY products.'),
});
export type DesignSuggestionOutput = z.infer<typeof DesignSuggestionOutputSchema>;

export async function designSuggestion(input: DesignSuggestionInput): Promise<DesignSuggestionOutput> {
  return designSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designSuggestionPrompt',
  input: {schema: DesignSuggestionInputSchema},
  output: {schema: DesignSuggestionOutputSchema},
  prompt: `You are a professional interior designer specializing in using STYLEON ART FACTORY products.

  A user has uploaded a photo of their room and may have provided a description of their desired design style.
  Based on the photo and description, provide design suggestions incorporating STYLEON ART FACTORY products.

  Photo: {{media url=photoDataUri}}
  Description: {{{description}}}

  Consider the existing style of the room and suggest how to enhance it with STYLEON ART FACTORY products like Crystal glass mosaics, Glass tiles, Glass wash basin counters & bowls and bathroom furnishing products. Provide specific product recommendations where possible.
  Return a detailed suggestion on the design.
`,
});

const designSuggestionFlow = ai.defineFlow(
  {
    name: 'designSuggestionFlow',
    inputSchema: DesignSuggestionInputSchema,
    outputSchema: DesignSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
