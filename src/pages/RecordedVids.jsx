import { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Loader from "../components/Loader";

function RecordedVids() {
  const [loader, setLoader] = useState(true);
  const { REACT_APP_YOUTUBE_API_KEY } = process.env;
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P&key=${REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((res) => {
        const videoitems = res.data.items;
        setVideoItems(videoitems);
        setLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : videoItems.length > 0 ? (
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          {videoItems.map((videos, id) => (
            <button
              key={id}
              onClick={() => {
                window.scrollTo(0, 0);
                var livestream = document.getElementById("youtubeLive");
                livestream.style.display = "block";
                document.getElementById("no-stream").style.display = "none";
                livestream.src =
                  "https://www.youtube.com/embed/" +
                  videos.contentDetails.videoId;
              }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={videos.snippet.thumbnails.high.url}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{videos.snippet.title}</h5>
                </div>
              </div>
            </button>
          ))}
        </Marquee>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}

export default RecordedVids;