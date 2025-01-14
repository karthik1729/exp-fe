export default function ClusterDetailPage({ params }: { params: { clusterId: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold">Cluster Details</h1>
      <p className="mt-4">Cluster ID: {params.clusterId}</p>
    </div>
  );
}
