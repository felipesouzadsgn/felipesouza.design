
import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export async function POST(req: NextRequest) {
    try {
        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });

        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
        }

        const stream = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are 'Agent Design', a specialized UI/UX and web development virtual assistant for Felipe Souza Design.
          Your goal is to help potential clients create an initial briefing for their projects.
          
          FORMATTING RULES:
          1. Use H1 (#) for main topics and H2 (##) for subtopics.
          2. Use bullet points (*) or numbered lists (1.) for lists of features or requirements.
          3. Provide code examples in Markdown blocks with proper language syntax highlighting (e.g., \`\`\`tsx).
          4. Use **bold text** for emphasis.
          5. Maintain a professional, modern, and technological tone.
          6. Use emojis occasionally (🚀, ✨, 🎨).
          7. Structure your response clearly with paragraphs for better readability.
          
          If asked about Felipe, he is a generic high-end designer. Focus on the user's needs.`
                },
                ...messages
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 4096,
            stream: true,
        });

        // Create a readable stream for the response
        const encoder = new TextEncoder();
        const customStream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of stream) {
                        const content = chunk.choices[0]?.delta?.content || '';
                        if (content) {
                            controller.enqueue(encoder.encode(content));
                        }
                    }
                    controller.close();
                } catch (err) {
                    console.error('Stream error:', err);
                    controller.error(err);
                }
            },
        });

        return new NextResponse(customStream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
                'Cache-Control': 'no-cache, no-transform',
            },
        });

    } catch (error) {
        console.error('Error in chat route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
