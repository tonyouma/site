interface IProps {
    title: string;
    description: string;
    className?: string;
}
//[]
export const Title = ({ title, description, className }: IProps) => {
    return (
        <div className='flex flex-col p-5 md:p-0'>
            <div className='md:mx-auto md:max-w-3xl md:py-10'>
                <h1 className={`mb-4 md:text-center ${className}`}>{title}</h1>
                <p className='py-4 md:py-8 md:mx-auto md:text-center md:max-w-2xl'>{description}</p>
            </div>
        </div>
    )
}
