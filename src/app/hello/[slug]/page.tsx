export default async function Page(): Promise<JSX.Element> {
  const { data } = await import("data.json");

  return <h1>{data}</h1>;
}
