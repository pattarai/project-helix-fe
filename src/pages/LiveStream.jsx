import React from "react";

function LiveStream() {
  return (
    <section className="live-bg full-vh">
      <div className="stream">
        <div className="stream__container">
          <div className="stream__status">
            <div className="stream__statusContainer">
              <div className="stream__statusContainerTop">
                <div className="stream__statusIndicator">LIVE!!</div>
                <h2>Check out the below streams from PATTARAI</h2>
              </div>
              <div className="stream__statusInfo">
                <i className="fas fa-bell"></i>
                <p>You will be notified when PATTARAI is Live!</p>
              </div>
            </div>
          </div>
          <div className="stream__videoEmbed">
            <iframe
              width="1280"
              height="500"
              src="https://www.youtube.com/embed/mg7FweYjasE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
     
      
      
        <div>
          <h1>Description about...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            nec ultrices dui sapien eget mi proin sed libero. Etiam sit amet
            nisl purus. Porttitor eget dolor morbi non arcu risus quis varius.
            Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
            Adipiscing tristique risus nec feugiat in fermentum posuere urna
            nec. Pretium viverra suspendisse potenti nullam. Gravida arcu ac
            tortor dignissim convallis aenean et tortor at. Morbi tristique
            senectus et netus et malesuada fames. Tellus pellentesque eu
            tincidunt tortor aliquam. Eu scelerisque felis imperdiet proin
            fermentum leo vel. Nulla at volutpat diam ut. Egestas sed tempus
            urna et pharetra. At consectetur lorem donec massa sapien faucibus
            et molestie ac. Dolor morbi non arcu risus quis. Quam pellentesque
            nec nam aliquam sem.
          </p>
        </div>
      </section>
    
  );
}

export default LiveStream;
