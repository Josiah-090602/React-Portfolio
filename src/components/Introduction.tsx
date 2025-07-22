import { FlipWords } from "./ui/flip-words";

export type flipWordsType = {
  words: string[];
  duration?: number;
  className?: string;
};

export function Introduction(props: flipWordsType) {
  return (
    <div className=" flex justify-center items-center px-4">
      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={props.words} /> <br />
      </div>
    </div>
  );
}
