import * as React from 'react'
import { useRouter } from './useRouter'

export const PageOne = () => {
  const router = useRouter()

  const goHome = React.useCallback(() => {
    router.history.push('/')
  }, [])

  return (
    <div>
      <span>Welcome To Page One</span>
      <br />
      <span>your current location: "{router.location.pathname}"</span>
    </div>
  )
}
