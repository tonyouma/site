import Link from "next/link"

function CareersCard() {
    return (
        <div>
            <div className='p-5 rounded-lg bg-defaultWhite'>
                <p className='uppercase'>Administration</p>
                <div className="flex items-center justify-between">
                    <p>Customer Success Manager</p>
                    <Link href="/careers" passHref><img src="/assets/link.svg" alt="" /></Link>
                </div>

                <ul className='list-disc list-inside'>
                    <li>4-7 years of relevant experience</li>
                    <li>Project management and process simplification</li>
                </ul>

                <div className="flex">
                    <p>Nairobi, Kenya</p>
                    Full-time
                </div>
            </div>
        </div>
    )
}

export default CareersCard

