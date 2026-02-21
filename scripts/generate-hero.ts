import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A close-up portrait of a natural, confident woman aged 35 to 45. Soft, controlled lighting subtly highlighting her jawline and skin texture. No heavy makeup, no exaggerated smile, just a calm, powerful expression. The background is minimalist warm beige with shadows that add depth. Subtle dark moss green nuances in the styling or shadows to convey authority and a high-end clinic feel. The image radiates luxury, silence, and structure, resembling a high-end skincare campaign. Photorealistic, highly detailed, editorial photography.',
          },
        ],
      },
      config: {
        // @ts-ignore
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.mkdirSync('public', { recursive: true });
        fs.writeFileSync('public/hero.jpg', Buffer.from(base64EncodeString, 'base64'));
        console.log('Successfully generated and saved public/hero.jpg');
        return;
      }
    }
    console.log('No image data found in response');
  } catch (e) {
    console.error('Failed to generate image:', e);
  }
}
main();
