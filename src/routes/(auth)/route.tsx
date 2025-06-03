import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header>
        {' '}
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            User
          </Link>
          <Link to="/login" className="[&.active]:font-bold">
            Login
          </Link>
          <Link to="/sign-up" className="[&.active]:font-bold">
            Sign up
          </Link>
          <Link to="/" className="[&.active]:font-bold">
            Signout
          </Link>
        </div>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
