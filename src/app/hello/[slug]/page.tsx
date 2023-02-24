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

  return (
    <main>
      <h1>{data}</h1>
      <p>
        Page generated at{" "}
        <time dateTime={new Date().toISOString()}>
          {new Date().toISOString()}
        </time>
        .
      </p>
    </main>
  );
}

export const revalidate = 10;

export async function generateStaticParams(): Promise<Params[]> {
  return [{ slug: "foo" }, { slug: "bar" }, { slug: "baz" }];
}
