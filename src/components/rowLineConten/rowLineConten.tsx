import type { ReactNode } from "react";

interface RowLineContenProps {
  children: ReactNode;
}
function RowLineConten({ children }: RowLineContenProps) {
  return (
    <div className="flex w-full flex-1 flex-col justify-between">
      <svg
        className="w-full flex-1"
        height="1"
        viewBox="0 0 1439 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 0.5H0"
          stroke="black"
          stroke-opacity="0.2"
          stroke-dasharray="10 10"
        />
      </svg>
      <div>
        <div className="w-full md:px-[10%] xl:px-[25%]">
          <div className="w-full px-5 py-2">{children}</div>
        </div>
      </div>
      <svg
        className="w-full flex-1"
        height="1"
        viewBox="0 0 1439 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 0.5H0"
          stroke="black"
          stroke-opacity="0.2"
          stroke-dasharray="10 10"
        />
      </svg>
    </div>
  );
}

export default RowLineConten;
