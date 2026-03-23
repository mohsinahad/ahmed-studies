export default function GeometryEmbedSim() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}maths/index.html`}
      className="w-full rounded-xl border-none"
      style={{ height: '620px' }}
      title="Geometry Explorer"
    />
  );
}
