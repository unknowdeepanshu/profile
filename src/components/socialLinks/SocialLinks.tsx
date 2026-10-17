import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandDiscord,
} from "@tabler/icons-react";
function SocialLinks() {
  const myAccountsLinks = [
    {
      SocialLinks: "https://github.com/unknowdeepanshu",
      SocialIcon: <IconBrandGithub />,
    },
    {
      SocialLinks: "https://br.linkedin.com/in/dipanshu-vishwakarma-145937316",
      SocialIcon: <IconBrandLinkedin />,
    },
    {
      SocialLinks: "https://x.com/DipanshuVi6799",
      SocialIcon: <IconBrandX />,
    },
    {
      SocialLinks: "https://discord.com/users/1076176212218613830",
      SocialIcon: <IconBrandDiscord />,
    },
  ];
  return (
    <>
      <div className="flex gap-2">
        {myAccountsLinks.map((social, index) => (
          <div
            key={index}
            className="flex h-10 w-10 items-center justify-center rounded-[50%] border border-black"
          >
            <a href={social.SocialLinks}>{social.SocialIcon}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;
