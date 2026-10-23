import { IconMapPin } from "@tabler/icons-react";
import Dipanshu from "@/assets/Dipanshu.png";
import SocialLinks from "../socialLinks/SocialLinks";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router";

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
          <h1 id="rowdies-bold" className="text-2xl sm:text-4xl">
            Dipanshu Vishwakarma
          </h1>
          <h2 id="tourney" className="sm:text-[20px]">
            <span>Creative Coding</span>
          </h2>
          <h2 className="flex items-center gap-2 sm:text-[20px]">
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
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h4 id="BoldJetBrains" className="text-[20px]">
              Social links
            </h4>
            <SocialLinks />
          </div>
          <div className="flex gap-2 sm:items-center sm:justify-center">
            <ContactButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
function ContactButton() {
  const email = "vishwakrmadipasnshu@gmail.com";

  const subject = "Let's work together";

  const body = `Hi,

I came across your portfolio and would like to discuss a project.

Project details:
- Project:
- Budget:
- Timeline:

Looking forward to hearing from you.

Thanks!`;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Link
      to={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-80"
    >
      {" "}
      <IconMail />
      Send me an email
    </Link>
  );
}
