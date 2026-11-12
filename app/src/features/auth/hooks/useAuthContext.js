import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error(
      "useAuthContext se debe utilizarse dentro de AuthProvider"
    );
  }

  return context
}
