interface ListPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ListPage({ params }: ListPageProps) {
  const { id } = await params;
  return <div> tasks in your {id} list</div>;
}
