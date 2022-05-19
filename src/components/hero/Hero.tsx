interface IProps {
    title: string
    description: string
}

const Hero = ({ title, description }: IProps) => {
    return (
        <div className="mx-auto md:w-2/3 hero-bg md:my-16">
            <div className="p-3">
                <h1 className="">{title}</h1>
                <p className='py-4'>{description}</p>
            </div>
        </div>
    )
}

export default Hero

