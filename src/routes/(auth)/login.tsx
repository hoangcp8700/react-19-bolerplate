import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/(auth)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const abc = 123;

  useEffect(() => {
    console.log(123, abc);
  }, []);

  return <div>Hello "/(auth)/login"!</div>;
}
