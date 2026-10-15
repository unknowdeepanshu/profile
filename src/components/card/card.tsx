import Birds from "@/assets/birds.png";
import { cn } from "@/lib/utils";
interface CardProps {
  currentstatus?: string;
  img?: string;
  description?: string;
  techstack?: string[];
  name?: string;
}
function Card({
  currentstatus = "closed",
  name = " Spice Route",
  img = Birds,
  description = `   A premium restaurant website for North Indian and Mughlai cuisine,
              featuring an interactive menu, chef profiles, food galleries, and
              table reservations.`,
}: CardProps) {
  let color;
  switch (currentstatus) {
    case "successful":
      color =
        "bg-live-100 border-live-100 shadow-[0_0_6px_var(--color-live-100),0_0_14px_var(--color-live-100)]";
      break;
    case "pending":
      color =
        "bg-live-200 border-live-200 shadow-[0_0_6px_var(--color-live-200),0_0_14px_var(--color-live-200)]";
      break;

    case "closed":
      color =
        "bg-live-300 border-live-300 shadow-[0_0_6px_var(--color-live-300),0_0_14px_var(--color-live-300)]";
      break;

    default:
      color =
        "bg-live-300 border-live-300 shadow-[0_0_6px_var(--color-live-300),0_0_14px_var(--color-live-300)]";
      break;
  }
  return (
    <>
      <div className="col-span-1 flex h-fit w-full flex-col">
        <div className="h-1/2">
          <div className="relative flex h-full w-full p-4">
            <div className="flex w-full justify-center rounded-2xl bg-gray-200/50 px-10 pt-10">
              <img
                src={img}
                alt={`${img}`}
                className="h-full w-full rounded-t-2xl shadow-[0_-4px_25px_var(--color-black)]/20"
              />
            </div>
          </div>
        </div>
        <div className="flex h-1/2 flex-col">
          <div className="flex w-full justify-between">
            <h3 id="BoldJetBrains" className="text-[32px]">
              {name}
            </h3>
            <div className="flex w-fit items-center p-3">
              <div className="rounded-2xl border border-black">
                <div className="flex w-fit items-center justify-between gap-2 px-1.5">
                  <div
                    className={cn(
                      "b relative m-1 size-3 rounded-full border",
                      color,
                    )}
                  ></div>
                  <h5 id="BoldJetBrains" className="text-[1rem] text-black">
                    Live
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
