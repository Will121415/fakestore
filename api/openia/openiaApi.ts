import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const generateText = async(prompt: string): Promise<string> => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0,
    max_tokens: 1000,
  });

  const message = response.data.choices[0].text
  // convertit \n en <br>
  return message!!;
}

export default generateText;