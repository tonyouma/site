import Image from 'next/image';

interface TeamProps {
    name: string;
    title: string;
    image: string;
}
const team: TeamProps[] = [
    {
        name: 'Mary Mwangi',
        title: 'Founder & CEO',
        image: '/assets/mary_ceo.png',
    },
    {
        name: 'Irene Ngugi',
        title: 'HR & Administration',
        image: '/assets/team2.png',
    },
    {
        name: 'Mary Mwangi',
        title: 'Founder & CEO',
        image: '/assets/mary_ceo.png',
    },

]

const Team = () => {
    return (
        <div className='p-5 md:py-16'>
            <div className="mx-auto md:text-center md:max-w-2xl md:pb-12">
                <h1 className='mb-4'>A team with conviction.</h1>
                <p>
                    We started with a conviction that every single one in Africa should have access to great and easy payment solutions.From the mama selling fruits on the street to the finance manager working on the payroll.Say hello to a team that works hard on this goal every single day.</p>
            </div>
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
                {team.map((item, index) => (
                    <div className="overflow-hidden cursor-pointer bg-[#0D3648]" key={index}>
                        <a href="#" className="block w-full h-full ">
                            <div className="cursor-pointer grayscale hover:grayscale-0">
                                <Image src={item.image} alt={item.name} width="100%" height="100%" layout="responsive" objectFit="cover" />
                            </div>
                            <div className="w-full p-5">
                                <h2 className="">
                                    {item.name}
                                </h2>
                                <p className='pt-2 text-xl text-white'>{item.title}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
