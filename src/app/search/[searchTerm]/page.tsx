import Results from "@/components/results";
import React from "react";

const SearchPage = async ({ params }: { params: { searchTerm: string } }) => {
  const searchTerm = params.searchTerm;
  // console.log(searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`
  );
  const data = await res.json();

  const results = data.results;
  // console.log(results);
  
  return (
    <div>
      {(results === undefined) ||
        !results.length(<h1 className="text-center pt-6">No Movies Found</h1>)}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
