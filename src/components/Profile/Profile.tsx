import { IconMapPin } from '@tabler/icons-react';
import Dipanshu from "@/assets/Dipanshu.png"
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
                    <div className='flex gap-2 '>
                        <h4 id='BoldJetBrains' className='text-[20px]'>Social links</h4>
                    </div>
                </div>
            </div>
        </>);
}

export default Profile;