import { cn } from "@/lib/utils";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
function Buttons({ className, children, ...props }: ButtonsProps) {
  return (
    <>
      <button
        className={cn(
          "txet-[20px] flex gap-2 rounded-[10px] border-4 border-[#707070] bg-black p-2 text-center text-white",
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
