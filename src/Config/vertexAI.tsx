import {GoogleGenAI} from '@google/genai';

// const PROJECT_ID="massive-amulet-453608-p7";

const GEMINI_API_KEY = "AIzaSyBrq5-q1tkT6wIe31sXduYy8sFSq1lKZdU";

export const client = new GoogleGenAI({apiKey: GEMINI_API_KEY});