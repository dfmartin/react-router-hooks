import { Context, useContext } from 'react'

import { RouteComponentProps } from 'react-router-dom'

import ReactRouterDom from 'react-router-dom'

declare module 'react-router-dom' {
  export const __RouterContext: Context<RouteComponentProps<{}>>
}
