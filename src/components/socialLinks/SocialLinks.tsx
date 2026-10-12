import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconBrandDiscord } from '@tabler/icons-react';
function SocialLinks() {
    const myAccountsLinks = [
        {
            SocialLinks: <IconBrandGithub />
        }, {
            SocialLinks: <IconBrandLinkedin />
        }, {
            SocialLinks: <IconBrandX />
        }, {
            SocialLinks: <IconBrandDiscord />
        }
    ]
    return (<>
        <div className='flex gap-2'>
            {myAccountsLinks.map((social, index) => (
                <div key={index} className='w-10 h-10 border border-black rounded-[50%] flex justify-center items-center'>
                    <a href='#'>
                        {social.SocialLinks}
                    </a>
                </div>
            ))
            }
        </div>

    </>);
}

export default SocialLinks;