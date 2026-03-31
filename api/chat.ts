import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt?: string };

  const result = streamText({
    model: 'openai/gpt-4o',
    prompt: prompt ?? 'Invent a new holiday and describe its traditions.',
  });

  return result.toTextStreamResponse();
}
