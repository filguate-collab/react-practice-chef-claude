import { HfInference } from "@huggingface/inference";

const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;

const hf = new HfInference(HF_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention.
The recipe can include additional ingredients, but try not to keep them minimal.
Format your response in markdown.
`;

export async function getRecipeFromHuggingFace(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Hugging Face error:", error.response?.data || error);
    return "Sorry, I couldn't generate a recipe right now.";
  }
}
