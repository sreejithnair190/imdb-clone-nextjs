import Results from "@/components/results";


const API_KEY = process.env.API_KEY;

interface PageProps {
  searchParams: {
    genre: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const genre = searchParams.genre || "fetchTrending";
  
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
