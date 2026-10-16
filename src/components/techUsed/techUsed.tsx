import {
  IconBrandReactNative,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramerMotion,
} from "@tabler/icons-react";
function TechUsed() {
  const myAccountsLinks = [
    {
      SocialLinks: "#",
      SocialIcon: <IconBrandFramerMotion />,
    },
    {
      SocialLinks: "#",
      SocialIcon: <IconBrandTailwind />,
    },
    {
      SocialLinks: "#",
      SocialIcon: <IconBrandTypescript />,
    },
    {
      SocialLinks: "#",
      SocialIcon: <IconBrandReactNative />,
    },
  ];
  return (
    <>
      <div className="flex opacity-50">
        {myAccountsLinks.map((social, index) => (
          <div
            key={index}
            className="flex h-10 w-10 items-center justify-center"
          >
            <a href={social.SocialLinks}>{social.SocialIcon}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechUsed;
