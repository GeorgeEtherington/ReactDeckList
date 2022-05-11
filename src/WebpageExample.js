import React from "react";
import TestJSONParser from "./TestJSONParser";
function WebpageExample() {
  return (
    <div style={{ backgroundColor: "Beige" }}>
      <div
        style={{
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
        }}
      >
        <div style={{ marginRight: 50, marginLeft: 50 }}>
          <TestJSONParser file={"./test2.json"} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vestibulum ullamcorper lectus a molestie. Proin porta, ligula in
          malesuada vestibulum, arcu elit euismod dui, non tincidunt arcu ex a
          lorem. Fusce velit velit, dignissim et felis eget, sollicitudin
          finibus ipsum. Sed nec ipsum ut ligula sagittis porta. Suspendisse
          risus arcu, fringilla finibus nunc et, euismod placerat sem. In
          blandit urna dolor, vitae aliquet sapien imperdiet non. Ut hendrerit,
          nulla ut ultrices cursus, ligula orci pretium ipsum, sed tincidunt sem
          neque vel felis. Mauris commodo gravida tortor, et luctus lectus
          iaculis malesuada. Phasellus est purus, mollis ullamcorper accumsan
          in, iaculis a nibh. Morbi a felis lacus. Aenean vel accumsan justo.
          Suspendisse potenti.
        </p>
      </div>
    </div>
  );
}
export default WebpageExample;
