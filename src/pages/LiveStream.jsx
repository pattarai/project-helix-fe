import NavBar from "../components/NavBar";
import YoutubeEmbed from "../components/YoutubeEmbed";


function LiveStream() {
  return (
    <>
      <NavBar />
      <YoutubeEmbed embedId="l3njFKX9huU" />
      <h5 className="text-center stream-text text-secondary">
                  Live Stream is Down. Check out our recorded events!
                </h5>
      
    </>
  );
}

export default LiveStream;
