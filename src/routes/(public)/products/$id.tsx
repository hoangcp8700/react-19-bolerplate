// import { getProductDetail } from '@/api/products';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/products/$id')({
  component: RouteComponent,
  // loader: ({ params }) => getProductDetail(params.id),
});

function RouteComponent() {
  const { id } = Route.useParams();
  // const post = Route.useLoaderData() // get data from loader

  return <div>Hello product detail {id}</div>;
}
