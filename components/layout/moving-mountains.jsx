import React, { useState } from "react";
import { useParallax } from "react-scroll-parallax";

export default function MovingMountains(){

    return(
      <div>
          <div
              className="relative inset-10 z-0 rounded-3xl "
              style={{
                  backgroundImage: `url(/first-background-parallax.png)`,
                  backgroundSize: "cover",
              }}
              >

          </div>

          <div>


          </div>

      </div>
    );
}