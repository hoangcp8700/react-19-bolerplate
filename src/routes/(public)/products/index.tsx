import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/products"!</div>;
}
