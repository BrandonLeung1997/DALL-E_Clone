import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prmopt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prmopt) return getRandomPrompt(prmopt);
  return randomPrompt;
}
