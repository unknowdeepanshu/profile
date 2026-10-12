import { IconMapPin } from '@tabler/icons-react';
import Dipanshu from "@/assets/Dipanshu.png"
import SocialLinks from '../socialLinks/SocialLinks';
import Buttons from '@/ui/Button';
import { IconCalendarMonth, IconMail } from '@tabler/icons-react';
function Profile() {
    return (<>
        <div className="h-fit py-5 w-full flex gap-4">
            <div className="border-2 border-black rounded-3xl p-4">
                <img src={Dipanshu} alt="Dipanshu" className="h-full rounded-3xl w-full" />
            </div>
            <div className="flex flex-col justify-end pb-2 gap-2">
                <h1 id="rowdies-bold" className="text-4xl">Dipanshu Vishwakarma</h1>
                <h2 id="tourney" className="text-[20px]">Creative Coding</h2>
                <h2 className="flex items-center gap-2 text-[20px]">
                    <IconMapPin />
                    <span>
                        mumbai,maharashtra
                    </span>
                </h2>
            </div>

        </div>
        <Bio />
    </>);
}

function Bio() {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <p className='text-[22px]'>I build complete websites and web apps, from designing how they look to building how they work. I focus on the small details that make websites look great and feel easy to use.</p>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2 '>
                        <h4 id='BoldJetBrains' className='text-[20px]'>Social links</h4>
                        <SocialLinks />
                    </div>
                    <div className='flex justify-center items-center gap-2 '>
                        <Buttons>
                            <IconCalendarMonth />   Book call
                        </Buttons>
                        <Buttons className='text-black bg-white border-[#616161]/25 '>
                            <IconMail />   Send email
                        </Buttons>
                    </div>
                </div>
            </div>
        </>);
}

export default Profile;