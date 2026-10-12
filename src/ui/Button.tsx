import { cn } from "@/lib/utils";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
function Buttons({ className, children, ...props }: ButtonsProps) {
    return (
        <>
            <button
                className={cn(
                    "text-center p-2 flex gap-2  border-4 border-[#707070] rounded-[10px] txet-[20px]  bg-black text-white",
                    className,
                )}
                id="rowdies-light"
                {...props}
            >
                {children}
            </button>
        </>
    );
}

export default Buttons;
