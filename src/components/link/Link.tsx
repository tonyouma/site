import { useRouter } from 'next/router';

type Props = {
  url: string,
  name: string,
  blank?: boolean,
  image?: string,
  id?: any,
  className?: string
}

const Link: React.FC<Props> = (props: Props): JSX.Element => {
  const router = useRouter();
  return (
    <a href={props.url}
      target={props.blank ? `_blank` : ''}

      className={`className text-textPrimary ${!props.blank && router.pathname === props.url ? 'text-[#EE3D4E] font-bold' : 'font-normal'}`}>
      {!props.image && props.name}
      {props.image && <img id={props.id ? props.id : null} className='md:w-48 w-36 transition-300' src={`${props.image}`} alt={`${props.name}`} />}
    </a>
  )
}

export default Link
