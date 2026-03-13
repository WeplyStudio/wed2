'use server';
/**
 * @fileOverview An AI assistant that helps guests compose culturally-inspired Batak blessings or messages for a wedding guestbook.
 *
 * - guestBlessingGenerator - A function that handles the generation of a Batak-inspired blessing message.
 * - GuestBlessingGeneratorInput - The input type for the guestBlessingGenerator function.
 * - GuestBlessingGeneratorOutput - The return type for the guestBlessingGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GuestBlessingGeneratorInputSchema = z.object({
  coupleNames: z
    .string()
    .describe("The names of the couple getting married (e.g., 'Raja and Putri')."),
  guestName: z.string().describe("The name of the guest composing the blessing."),
  relationship: z
    .string()
    .describe("The guest's relationship to the couple (e.g., 'close friend', 'family member', 'colleague')."),
  sentimentKeywords: z
    .string()
    .optional()
    .describe(
      "Keywords or a short phrase describing the desired sentiment or theme for the blessing (e.g., 'love and prosperity', 'happy future', 'traditional Batak wishes')."
    ),
  context: z
    .string()
    .optional()
    .describe("Any additional context or specific requests for the blessing."),
});
export type GuestBlessingGeneratorInput = z.infer<
  typeof GuestBlessingGeneratorInputSchema
>;

const GuestBlessingGeneratorOutputSchema = z.object({
  blessingMessage: z
    .string()
    .describe("The generated culturally-inspired Batak blessing message."),
});
export type GuestBlessingGeneratorOutput = z.infer<
  typeof GuestBlessingGeneratorOutputSchema
>;

export async function guestBlessingGenerator(
  input: GuestBlessingGeneratorInput
): Promise<GuestBlessingGeneratorOutput> {
  return guestBlessingGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'guestBlessingGeneratorPrompt',
  input: {schema: GuestBlessingGeneratorInputSchema},
  output: {schema: GuestBlessingGeneratorOutputSchema},
  prompt: `You are an AI assistant specialized in composing thoughtful and culturally-inspired Batak wedding blessings.
Your task is to generate a personalized blessing message for a wedding guestbook.

The couple's names are: {{{coupleNames}}}
The guest's name is: {{{guestName}}}
The guest's relationship to the couple is: {{{relationship}}}
{{#if sentimentKeywords}}The desired sentiment or keywords for the blessing are: {{{sentimentKeywords}}}{{/if}}

{{#if context}}Consider the following additional context or specific requests: {{{context}}}{{/if}}

Please compose a heartfelt and traditional Batak-inspired blessing message.
The message should be warm, respectful, and convey good wishes for the couple's future together, drawing upon common Batak wedding sentiments like prosperity, harmony, and long life.
Do not include any conversational text, just the blessing message.`,
});

const guestBlessingGeneratorFlow = ai.defineFlow(
  {
    name: 'guestBlessingGeneratorFlow',
    inputSchema: GuestBlessingGeneratorInputSchema,
    outputSchema: GuestBlessingGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
