import { ReactNode } from 'react';

interface Props {
  question: string;
  children: ReactNode;
}

const LandingPageFaqItem = ({ question, children }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-lg font-bold leading-6">{question}</dt>
      <dd className="md:text-base text-gray-700 dark:text-gray-300">{children}</dd>
    </div>
  );
};
export default LandingPageFaqItem;
