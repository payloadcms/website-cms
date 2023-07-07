import React from 'react'
import { NavLink } from 'react-router-dom'
import { useConfig } from 'payload/components/utilities'

import './index.scss'

const baseClass = 'after-nav-links'

const AfterNavLinks: React.FC = () => {
  const {
    routes: { api },
  } = useConfig()

  return (
    <div className={baseClass}>
      <a href={`${api}/sync/docs`}>Sync Docs</a>
    </div>
  )
}

export default AfterNavLinks
