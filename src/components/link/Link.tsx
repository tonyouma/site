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
      className={`font-normal text-textSecondary hover:text-textPrimary hover:font-bold active:text-textPrimary active:font-bold ${!props.blank&&router.pathname === props.url && 'text-textPrimary font-bold'}`}>
      {!props.image&&props.name}
      {props.image&&<img src={`${props.image}`} alt={`${props.name}`}/>}
    </a>
  )    
}

export default Link