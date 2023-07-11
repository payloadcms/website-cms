import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useConfig } from 'payload/components/utilities'

import './index.scss'

const baseClass = 'sync-docs-button'

const SyncDocsButton: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false)
  const {
    routes: { api },
  } = useConfig()

  const syncDocs = async () => {
    try {
      setIsSyncing(true)
      const response = await fetch(`${api}/sync/docs`)
    } catch (err) {
      toast.error(`Documentation sync failed: ${err}`, { autoClose: 3000 })
    } finally {
      setIsSyncing(false)
      toast.success('Documentation synced successfully', { autoClose: 3000 })
    }
  }

  return (
    <button className={baseClass} onClick={syncDocs} disabled={isSyncing}>
      {isSyncing ? 'Syncing...' : 'Sync Docs'}
    </button>
  )
}

export default SyncDocsButton
