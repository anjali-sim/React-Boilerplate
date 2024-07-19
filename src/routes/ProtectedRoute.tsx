import React from 'react'
import { Navigate } from 'react-router-dom'
import { getCookie } from '@/lib/getCookie'
import { RootState, useAppSelector } from '@/store';

interface ProtectedRouteProps {
    children: React.ReactNode
  }

// const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//     const token = getCookie('access_token')
//     if (location.pathname === '/' && token) {
//       return <Navigate to="/chat" />
//     }
//     // eslint-disable-next-line react/jsx-no-useless-fragment
//     return token ? <>{children}</> : <Navigate to="/login" />
// }

// export default ProtectedRoute

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);
  
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;