import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        {" "}
        <div className="flex gap-2 p-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/app" className="[&.active]:font-bold">
            App
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/products" className="[&.active]:font-bold">
            Products
          </Link>
          <Link to={`/products/$id`} params={{ id: "3" }} className="[&.active]:font-bold">
            Products 3
          </Link>
          <Link to="/products" className="[&.active]:font-bold">
            Products
          </Link>
          <Link to="/login" className="[&.active]:font-bold">
            Login
          </Link>
        </div>
      </header>
      <Outlet />
      <footer>footer</footer>
    </>
  ),
});
