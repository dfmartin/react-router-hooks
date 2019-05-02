import { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { __RouterContext } from 'react-router-dom'

export const useRouter = <TParams extends object = {}>() => {
  return useContext(__RouterContext) as RouteComponentProps<TParams>
}
