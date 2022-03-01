import { User } from 'oidc-client'
import { atom } from 'recoil'

export const authAtom = atom<{ user?: User, renewing: boolean }>({
  key: 'auth',
  default: { renewing: false }
})
