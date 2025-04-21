import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "./helper";

const Answers = ({ answer, key }) => {
  const [heading, setHeading] = useState(false);
  const [answers, setAnswers] = useState(answer);
  console.log(answer, checkHeading(answer));

  useEffect(() => {
    if (checkHeading(answer)) {
      console.log(answer);
      setHeading(true);
      setAnswers(replaceHeadingStarts(answer));
    }
  }, []);
  return (
    <>
      {heading ? (
        <span className="pt-2 text-lg block">{answer}</span>
      ) : (
        <span className="text-sm">{answer}</span>
      )}
    </>
  );
};
export default Answers;
