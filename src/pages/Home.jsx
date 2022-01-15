import { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import PopUp from "../components/PopUpCards";
import Loader from "../components/Loader";
import BaseLayout from "../components/BaseLayout";
import NoLiveStream from "../assets/images/NoStream.png"

export default function Home() {
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
         
      <BaseLayout>
        <div className="card-body d-md-flex align-items-center d-block">
              <div id="no-stream">
                <img
                  className="img-fluid px-md-3"
                  src={NoLiveStream}
                  height={400}
                  alt=""
                />
                <h5 className="text-center stream-text text-secondary">
                  Live Stream is Down. Check out our recorded events!
                </h5>
              </div>

              <iframe
                id="youtubeLive"
                title="Youtube Live Stream"
                className="col-12 col-md-8 px-md-3 pb-3 pb-md-0 iframe-height"
                style={{ display: "none" }}
                src={NoLiveStream}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

            
            </div>
          <Marquee
            direction="left"
            speed={50}
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
                <PopUp
                  src={videos.snippet.thumbnails.high.url}
                  title={videos.snippet.title}
                />
              </button>
            ))}
          </Marquee>
          </BaseLayout>
        ) : (
          <h1>No Data</h1>
        )}
      
    </>
  );
}
