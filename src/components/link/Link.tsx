import { useRouter } from 'next/router';

type Props = {
  url: string,
  name: string,
  blank?: boolean,
  image?: string,
  id?: any
}

const Link: React.FC<Props> = (props: Props): JSX.Element => {
  const router = useRouter();
  return (
    <a
      href={props.url}
      target={props.blank ? `_blank` : ""}
      className={` ${
        !props.blank && router.pathname === props.url
          ? "text-secondary font-bold"
          : "font-normal text-textPrimary"
      }`}
    >
      {!props.image && props.name}
      {props.image && (
        <img
          id={props.id ? props.id : null}
          className="transition-300"
          src={`${props.image}`}
          alt={`${props.name}`}
        />
      )}
    </a>
  );    
}

export default Link
