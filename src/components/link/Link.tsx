import { useRouter } from 'next/router';

type Props = {
  url: string,
  name: string,
  blank?:boolean,
  image?:string
}

const Link: React.FC<Props> = (props: Props): JSX.Element => {
  const router = useRouter();
  return (
    <a href={props.url} 
      target={props.blank? `_blank`: ''}
      className={`text-textPrimary ${!props.blank&&router.pathname === props.url ? 'text-secondary font-bold': 'font-normal'}`}>
      {!props.image&&props.name}
      {props.image&&<img src={`${props.image}`} alt={`${props.name}`}/>}
    </a>
  )    
}

export default Link