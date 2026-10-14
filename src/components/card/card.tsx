import Birds from "@/assets/birds.png";
function Card() {
  return (
    <>
      <div className="col-span-1 flex h-fit w-full flex-col">
        <div className="h-1/2">
          <div className="relative flex h-full w-full p-4">
            <div className="flex w-full justify-center rounded-2xl bg-gray-200/50 px-10 pt-10">
              <img
                src={Birds}
                alt="Birds"
                className="rounded-t-2xl shadow-[0_-4px_25px_var(--color-black)]/20"
              />
            </div>
          </div>
        </div>
        <div className="flex h-1/2 flex-col">
          <div className="flex w-full justify-between">
            <h3 id="BoldJetBrains" className="text-[32px]">
              Spice Route
            </h3>
            <div className="flex w-fit items-center p-3">
              <div className="rounded-2xl border border-black">
                <div className="flex w-fit items-center justify-between gap-2 px-1.5">
                  <div className="bg-live-100 border-live-100 relative m-1 size-3 rounded-full border shadow-[0_0_6px_var(--color-live-100),0_0_14px_var(--color-live-100)]"></div>
                  <h5 id="BoldJetBrains" className="text-[1rem] text-black">
                    Live
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              A premium restaurant website for North Indian and Mughlai cuisine,
              featuring an interactive menu, chef profiles, food galleries, and
              table reservations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
