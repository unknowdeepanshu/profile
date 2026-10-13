import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandDiscord,
} from "@tabler/icons-react";
function SocialLinks() {
  const myAccountsLinks = [
    {
      SocialLinks: <IconBrandGithub />,
    },
    {
      SocialLinks: <IconBrandLinkedin />,
    },
    {
      SocialLinks: <IconBrandX />,
    },
    {
      SocialLinks: <IconBrandDiscord />,
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
            <a href="#">{social.SocialLinks}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;
