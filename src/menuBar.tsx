import * as React from 'react'
import { useRouter } from './useRouter'

export const MenuBar = () => {
  const router = useRouter()

  const goHome = React.useCallback(() => {
    router.history.push('/')
  }, [])

  const goToPageOne = React.useCallback(() => {
    router.history.push('/pageone')
  }, [])

  return (
    <div>
      <button onClick={goHome}>home</button>
      <button onClick={goToPageOne}>pageOne</button>
    </div>
  )
}
