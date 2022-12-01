import React from "react";
import { Helmet } from "react-helmet";

const ARComp = () => {
  return (
    <div>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Helmet>
      <div className="">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="shared-assets/models/NeilArmstrong.glb"
          ar
          environment-image="shared-assets/environments/moon_1k.hdr"
          poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
      </div>
    </div>
  );
};

export default ARComp;
