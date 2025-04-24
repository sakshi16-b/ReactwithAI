import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "./helper";

const Answers = ({ answer, type, totalResult, index }) => {
  const [heading, setHeading] = useState(false);
  const [answers, setAnswers] = useState(answer);

  useEffect(() => {
    if (checkHeading(answer)) {
      console.log(answer);
      setHeading(true);
      setAnswers(replaceHeadingStarts(answer));
    }
  }, []);
  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="text-2xl">{answers}</span>
      ) : heading ? (
        <span className="pt-2 text-lg block">{answers}</span>
      ) : (
        <span className="pl-5">{answers}</span>
      )}
    </>
  );
};
export default Answers;
