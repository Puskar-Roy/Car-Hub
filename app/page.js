import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-x max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue. </h1>
          <p>Explore The Cars You Might Like.</p>
        </div>

        <div className="home__filters">
          <div className="home__filter-container"> 
          
          </div>
        </div>
      </div>
    </main>
  );
}
