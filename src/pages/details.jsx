import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import useFetch from "../hooks/useFetch";
import HomeLayout from "../components/layouts/home";
export default function DetailsPage() {
  const params = useParams();
  const { data, loading, error } = useFetch(`/api/movies/${params.id}`);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <HomeLayout>
      <div className="movie-details-wrapper p-4">
        {loading && <h1 className="text-white">Loading ...</h1>}
        {data && (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="col-md-12"
                  src={data.data.poster}
                  alt={data.data.title}
                  height="500"
                />
                <h2 className="text-white mt-4">{data.data.title}</h2>

                <p className="text-white">{data.data.description}</p>
              </div>
              <div className="col-md-6">
                <YouTube
                  videoId={data.data.trailer}
                  opts={opts}
                  onReady={_onReady}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </HomeLayout>
  );
}
