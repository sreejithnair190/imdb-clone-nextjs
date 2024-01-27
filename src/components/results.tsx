import { MovieDetails } from "@/app/types";
import Card from "./card";

interface ResultProp {
  results: MovieDetails[];
}

const Results = ({ results }: ResultProp) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full sm:space-x-3 sm:space-y-5">
      {results && results.map((result) => <Card key={result.id} movie={result} />)}
    </div>
  );
};

export default Results;