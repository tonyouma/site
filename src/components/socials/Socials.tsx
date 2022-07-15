import React from 'react'
import { Link } from './../link'

type Props = {
    items: string,
    margin?: string,
    justify?: string
}

const Socials = (props: Props) => {
  return (
    <div className={`space-x-6 flex items-${props.items} ${props.justify} ${props.margin}`}>
        <Link blank url='https://www.linkedin.com/company/data-integrated/mycompany/' name='LinkedIn' image={'/assets/linkedin.svg'}/>
        <Link blank url='https://www.youtube.com/channel/UCjpZhDUUwjG5BJjxzjHMrdg' name='YouTube' image={'/assets/youtube.svg'}/>
        <Link blank url='https://twitter.com/dataintegrated?lang=en' name='Twitter' image={'/assets/twitter.svg'}/>
        <Link blank url='https://www.instagram.com/dataintegral/' name='Instagram' image={'/assets/instagram.svg'}/>
        <Link blank url='https://www.facebook.com/dataintegratedltd/' name='Facebook' image={'/assets/facebook.svg'}/>
    </div>
  )
}

export default Socials