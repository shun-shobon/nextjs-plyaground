import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export default async function Page({ params }: Props): Promise<JSX.Element> {
  if (!["foo", "bar", "baz"].includes(params.slug)) {
    notFound();
  }

  const { data } = await import(`data/${params.slug}.json`);

  return <h1>{data}</h1>;
}

// export async function generateStaticParams(): Promise<Params[]> {
//   return [{ slug: "foo" }, { slug: "bar" }, { slug: "baz" }];
// }
