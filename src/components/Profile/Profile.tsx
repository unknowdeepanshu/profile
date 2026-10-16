import { IconMapPin } from "@tabler/icons-react";
import Dipanshu from "@/assets/Dipanshu.png";
import SocialLinks from "../socialLinks/SocialLinks";
import Buttons from "@/ui/Button";
import { IconCalendarMonth, IconMail } from "@tabler/icons-react";
function Profile() {
  return (
    <>
      <div className="flex h-fit w-full gap-4 py-5">
        <div className="rounded-3xl border-2 border-black p-4">
          <img
            src={Dipanshu}
            alt="Dipanshu"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-end gap-2 pb-2">
          <h1 id="rowdies-bold" className="text-4xl">
            Dipanshu Vishwakarma
          </h1>
          <h2 id="tourney" className="text-[20px]">
            <span>Creative Coding</span>
          </h2>
          <h2 className="flex items-center gap-2 text-[20px]">
            <IconMapPin />
            <span>mumbai,maharashtra</span>
          </h2>
        </div>
      </div>
      <Bio />
    </>
  );
}

function Bio() {
  return (
    <>
      <div className="flex flex-col gap-5 pb-10">
        <p className="text-[22px]">
          I build complete websites and web apps, from designing how they look
          to building how they work. I focus on the small details that make
          websites look great and feel easy to use.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h4 id="BoldJetBrains" className="text-[20px]">
              Social links
            </h4>
            <SocialLinks />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Buttons>
              <IconCalendarMonth /> Book call
            </Buttons>
            <Buttons className="border-[#616161]/25 bg-white text-black">
              <IconMail /> Send email
            </Buttons>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
