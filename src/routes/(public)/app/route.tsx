import { ROUTER_NAME } from '@/shared/constants';
import {
  createFileRoute,
  Link,
  linkOptions,
  Outlet,
  // redirect,
} from '@tanstack/react-router';

const dashboardLinkOptions = linkOptions({
  to: ROUTER_NAME.DASHBOARD,
  search: { search: '' },
});
console.log('🚀 ~ dashboardLinkOptions:', dashboardLinkOptions);

export const Route = createFileRoute('/(public)/app')({
  component: RouteComponent,
  // beforeLoad: () => {
  //   throw redirect(dashboardLinkOptions);
  // },
});

function RouteComponent() {
  return (
    <div>
      app layout
      <div className="p-2 flex gap-2">
        <Link to="/app/dashboard" className="[&.active]:font-bold">
          Dashboard
        </Link>{' '}
        <Link to="/app/settings" className="[&.active]:font-bold">
          Settings
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
