import type { ReactNode } from "react";

interface RowLineContenProps {
    children: ReactNode
}
function RowLineConten({ children }: RowLineContenProps) {
    return (<div className="flex absolute inset-x-0  w-full justify-between flex-col">
        <svg className="w-full flex-1" height="1" viewBox="0 0 1439 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0.5H0" stroke="black" stroke-opacity="0.2" stroke-dasharray="10 10" />
        </svg>
        <div className="xl:px-[25%] md:px-[10%] ">
            <div className="px-5 py-2">
                {children}
            </div>
        </div>
        <svg className="w-full flex-1" height="1" viewBox="0 0 1439 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0.5H0" stroke="black" stroke-opacity="0.2" stroke-dasharray="10 10" />
        </svg>

    </div>);
}

export default RowLineConten;