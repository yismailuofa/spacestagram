import Card from "./Card";
import sync from "./sync.svg";
import { useState, useEffect } from "react";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=xWJxKjotdEwcK3nOgfgEBYZmhT5EtrfBQnYOKDQp&count=5";

const getTracks = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetTracks = () => {
    setLoading(true);
    getTracks().then((images) => {
      setImages((curr) => [...curr, ...images]);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container">
        <h1>spacestagram</h1>
        <div className="cardFlex">
          {images.length > 0 &&
            images.map(
              (img) =>
                img.media_type === "image" && (
                  <Card
                    title={img.title}
                    date={img.date}
                    url={img.url}
                    key={img.title}
                  />
                )
            )}
          {loading && <div className="load">Loading...</div>}
        </div>
        <img
          src={sync}
          alt="load more"
          className="sync"
          onClick={handleGetTracks}
        ></img>
      </div>
    </>
  );
}
