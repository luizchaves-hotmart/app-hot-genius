import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IProps {
  link: string;
  name: string;
  icon: IconProp;
}

export function StructureMenuItem(props: IProps) {
  const location = useLocation()

  return (
    <Link to={props.link}>
      <hot-menu-item {...(location.pathname === props.link && { active: 'true' })}>
        <div className="hot-application-menu__icon">
          <FontAwesomeIcon icon={props.icon}/>
        </div>
        <span>{props.name}</span>
      </hot-menu-item>
    </Link>
  )
}
