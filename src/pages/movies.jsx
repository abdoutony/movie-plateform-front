import React from "react";
import useFetch from "../hooks/useFetch";
import HomeLayout from "../components/layouts/home";
import SearchBar from "../components/search-bar";
import MovieItem from "../components/movie-item";
import { moviesData } from "../data";
export default function MoviesPage() {
  const { data, loading, error } = useFetch("/api/movies");
  console.log(data);
  return (
    <HomeLayout>
      <div className="search-wrapper p-4 mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 ">
            <h1 className="text-white mb-3">Find your favorite movie</h1>
            <SearchBar />
          </div>
          <div className="movies-wrapper p-4">
            {error && !loading && !data && <h1>Error</h1>}
            {!error && loading && <h1>Loading ...</h1>}

            <div className="container">
              <div className="row">
                {data && data.data && data.data.length > 0
                  ? data.data.map((movie) => {
                      return (
                        <div key={movie._id} className="col-md-3 mb-3">
                          <MovieItem item={movie} />
                        </div>
                      );
                    })
                  : "No movies to show"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
