'use server';

/**
 * @fileOverview A design suggestion AI agent that provides design suggestions using STYLEON ART FACTORY products based on a text description of a room.
 *
 * - designSuggestionText - A function that handles the design suggestion process.
 * - DesignSuggestionTextInput - The input type for the designSuggestionText function.
 * - DesignSuggestionTextOutput - The return type for the designSuggestionText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignSuggestionTextInputSchema = z.object({
  roomDescription: z
    .string()
    .describe('The description of the room for which design suggestions are needed.'),
});
export type DesignSuggestionTextInput = z.infer<typeof DesignSuggestionTextInputSchema>;

const DesignSuggestionTextOutputSchema = z.object({
  designSuggestion: z.string().describe('The design suggestions for the room using STYLEON ART FACTORY products.'),
});
export type DesignSuggestionTextOutput = z.infer<typeof DesignSuggestionTextOutputSchema>;

export async function designSuggestionText(input: DesignSuggestionTextInput): Promise<DesignSuggestionTextOutput> {
  return designSuggestionTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designSuggestionTextPrompt',
  input: {schema: DesignSuggestionTextInputSchema},
  output: {schema: DesignSuggestionTextOutputSchema},
  prompt: `You are an interior design expert specializing in using STYLEON ART FACTORY products.

You will use the following information to provide design suggestions for the room. You should suggest specific STYLEON ART FACTORY products that would be suitable for the room.

Room Description: {{{roomDescription}}}`,
});

const designSuggestionTextFlow = ai.defineFlow(
  {
    name: 'designSuggestionTextFlow',
    inputSchema: DesignSuggestionTextInputSchema,
    outputSchema: DesignSuggestionTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
