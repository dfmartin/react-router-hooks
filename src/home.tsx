import * as React from 'react'
import { useRouter } from './useRouter'

export const Home = () => {
  const router = useRouter()

  return (
    <div>
      <span>Welcome home</span>
      <br />
      <span>your current location: "{router.location.pathname}"</span>
    </div>
  )
}
