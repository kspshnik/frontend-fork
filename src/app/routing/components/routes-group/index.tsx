import { Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import { UserRole } from 'entities/user/types';

interface CommonRouteProps {
  someflag?: never;
}

interface PublicRouteProps extends CommonRouteProps {
  publicRoutes: true;

  allowed?: never;
  onlyUnauthorized?: never;
}

interface OnlyUnauthorizedRouteProps extends CommonRouteProps {
  onlyUnauthorized: boolean;

  allowed?: never;
  publicRoutes?: never;
}

interface RoledRouteProps extends CommonRouteProps {
  allowed: {
    [key in UserRole]?: boolean;
  };

  publicRoutes?: never;
  onlyUnauthorized?: never;
}

type RoutesGroupProps =
  | PublicRouteProps
  | RoledRouteProps
  | OnlyUnauthorizedRouteProps;

export const RoutesGroup = ({
  publicRoutes,
  onlyUnauthorized,
  allowed,
}: RoutesGroupProps) => {
  const { isLoading, role } = useAppSelector((state) => state.user);

  if (publicRoutes) {
    return <Outlet />;
  }

  if (onlyUnauthorized) {
    if (!role) {
      return <Outlet />;
    } else {
      <Navigate to="/" replace />;
    }
  }

  if (isLoading) {
    return null;
  }

  // allowed по любому будет не undefined потому что если условие дошло до этого места, то allowed точно есть. Смотреть по интерфейсу RoledRouteProps
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (!role || !allowed![role]) {
    return <Navigate to="/register" replace />;
  }

  return <Outlet />;
};