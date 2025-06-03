import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/app/dashboard"!</div>;
}
