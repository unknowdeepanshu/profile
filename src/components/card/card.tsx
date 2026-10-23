import Birds from "@/assets/birds.png";
import { cn } from "@/lib/utils";
import TechUsed from "../techUsed/techUsed";
import { IconArrowNarrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router";
interface CardProps {
  currentstatus?: string;
  img?: string;
  description?: string;
  techstack?: string[];
  name?: string;
  className?: string;
}
function Card({
  currentstatus = "closed",
  name = " Spice Route",
  img = Birds,
  description = `   A premium restaurant website for North Indian and Mughlai cuisine,
              featuring an interactive menu, chef profiles, food galleries, and
              table reservations.`,
  className,
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
        <div className="mb-4 h-1/2">
          <div className="relative flex h-full w-full">
            <div className="flex h-fit w-full justify-center rounded-2xl bg-gray-200/50 px-10 pt-10">
              <img
                src={img}
                alt={`${img}`}
                className={cn(
                  "h-47 w-full rounded-t-2xl shadow-[0_-4px_25px_var(--color-black)]/20",
                  className,
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex h-1/2 flex-col">
          <div className="my-4 flex w-full flex-col justify-between gap-4 sm:flex-row">
            <div className="flex sm:items-center sm:justify-center">
              <h3 id="BoldJetBrains" className="text-[30px]">
                {name}
              </h3>
            </div>
            <div className="flex w-fit items-center sm:p-3">
              <div className="rounded-2xl border border-black">
                <div className="flex w-fit justify-between gap-2 px-1.5 sm:items-center">
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
          <div className="flex w-full flex-col justify-between">
            <div className="flex sm:items-center sm:justify-center">
              <TechUsed />
            </div>
            <div className="flex w-fit items-center p-3">
              <div className="rounded-2xl">
                <div className="group flex w-fit cursor-pointer justify-between gap-2 sm:items-center sm:px-5">
                  <Link
                    to={`/projects/${name}`}
                    id="BoldJetBrains"
                    className="flex gap-2 text-[1rem] text-black opacity-40 hover:opacity-100"
                  >
                    view projects{" "}
                    <div className="relative size-6">
                      <IconArrowNarrowRight className="absolute inset-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-0" />
                      <IconArrowUpRight className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
