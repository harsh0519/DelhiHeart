import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = `*[_type == "bannerSection"][0].images`;
  const bannerImages = await client.fetch(query);

  return (
    <div>
      <Navbar />
      <Banner images={bannerImages} />
    </div>
  );
}
