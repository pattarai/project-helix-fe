import { useEffect, useState } from "react";
import NoLiveStream from "../assets/images/NoStream.png";
import { ReactFlvPlayer } from "react-flv-player";
import axios from "axios";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  const [display, setDisplay] = useState({ image: "", video: "none" });

  let { REACT_APP_STREAM_KEY } = process.env;

  let streams = async () => {
    let stream = await axios
      .get("http://vpn.opencloud.pattarai.in:8000/api/streams", {
        auth: {
          username: "admin",
          password: "admin",
        },
      })
      .catch((err) => {
        setDisplay({ image: "", video: "none" });
      });

    try {
      let stream_publishers = stream.data.live[REACT_APP_STREAM_KEY].publisher;
      if (stream_publishers == null) {
        await setDisplay({ image: "", video: "none" });
      } else {
        await setDisplay({ image: "none", video: "" });
      }
    } catch (err) {
      setDisplay({ image: "", video: "none" });
    }
    // await console.log(stream_publishers);
  };
  useEffect(() => {
    streams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BaseLayout>
        <div className="card-body d-md-flex align-items-center d-block">
          <div id="no-stream" style={{ display: display.image }}>
            <img
              className="img-fluid px-md-3"
              src={NoLiveStream}
              height={400}
              alt=""
            />
            <h5 className="text-center stream-text text-secondary">
              Live Stream is Down. See You Later..
            </h5>
          </div>
          <div style={{ display: display.video }}>
            <ReactFlvPlayer
              className="col-12 col-md-8 px-md-3 pb-3 pb-md-0 iframe-height"
              url={`http://vpn.opencloud.pattarai.in:8000/live/${REACT_APP_STREAM_KEY}.flv`}
              isLive={true}
              hasAudio={true}
              hasVideo={true}
            />
          </div>
          <iframe
            title="Titan Embed"
            className="col-12 col-md-4 iframe-height"
            src="https://titanembeds.com/embed/808401706337435709?css=31"
            frameBorder="0"
          ></iframe>
        </div>
      </BaseLayout>
    </>
  );
}
