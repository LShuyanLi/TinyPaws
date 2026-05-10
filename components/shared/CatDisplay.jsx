// CatDisplay.jsx: Displays the selected cat image on the play screen.

import { useEffect } from "react";



export default function CatDisplay({ selectedCat }) {

    // const {emotion} = useCatContext();
    // const [catfaceimg, setCatfaceimg] = useState("/sad.png");

    // useEffect(() => {
    //     // This effect runs whenever the selected cat changes, allowing us to trigger any necessary updates or animations based on the new cat selection.
    //     // For example, we could add a simple animation or sound effect here when the cat changes.
    //     console.log("Selected cat changed:", selectedCat);
    //     if(emotion === "happy"){   
    //         setCatfaceimg("/happy.png");
    //     }

    // }, [emotion]);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "0",
        transform: "translateX(-50%)",
        zIndex: 10,
      }}
    >
        {/* <img src={catfaceimg} style={{
            position: "absolute",
            zIndex: 15,
        }} /> */}
      <img
        src={selectedCat}
        style={{
          width: "18vw",
          minWidth: "180px",
          maxWidth: "280px",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}