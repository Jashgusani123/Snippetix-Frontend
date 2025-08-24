import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = "AIzaSyBrq5-q1tkT6wIe31sXduYy8sFSq1lKZdU";
const client = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function ASK_TO_AI({
  question,
}: {
  question: string;
}): Promise<{ title: string; content: { text: string; color: string | null }[] }[]> {
  const MODEL_ID = "gemini-1.0-pro";

  const response = await client.models.generateContent({
    model: MODEL_ID,
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `You are a JSON generator.
User can only search for coding-related topics (programming languages, frameworks, APIs, debugging, Git, Postman, etc.).
Also don't use HTML tags like <br> , <h1> if like you need to saprate that so don't use <br> make it's new line like example and also you can give same color.
Also you know about i have second page for this (AI Explanation) but that is for the user give us problem and we give solution so if that type of problem give in this so tell them accordingly.
If the question is coding-related:
  - Return ONLY a valid JSON array (no explanations, no markdown) with exactly TWO objects:
    1. A short summary card (title concise, content ~10–20 sentences max) if need then use emoji for better understanding.
    2. A detailed explanation card (title descriptive, content can be longer, broken into color-coded parts where only important points have color) if need then use emoji for better understanding.
If the question is NOT coding-related or is a generic AI-type question:
  - Return ONLY one object in a valid JSON array:
    1. A short summary card (title concise, content 1–2 sentences max) telling them that this site, Snippetix, is for coding-related queries only — make the response friendly and a little cute.
Colors allowed: "blue", "green", "orange", "purple", "red", "yellow", "pink", or null.
Question: ${question}

Example for coding-related query:
[
  {
    "title": "Quick Summary",
    "content": [
      { "text": "Short, direct answer", "color": "green" }
    ]
  },
  {
    "title": "Detailed Breakdown",
    "content": [
      { "text": "Longer answer with more details", "color": null },
      { "text": "Important points", "color": "yellow" }
    ]
  }
]

Example for non-coding query:
[
  {
    "title": "Notice",
    "content": [
      { "text": "Oops! Snippetix is here for your coding adventures only 🖥️💡 — try asking something dev-related!", "color": "purple" }
    ]
  }
]
`
          }
        ]
      }
    ]
  });

  const rawText = response.text!.trim();

  // Sometimes Gemini wraps JSON in ```json ... ```
  const cleaned = rawText
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error("JSON parse error:", err, "Raw output:", rawText);
    return [];
  }
}
