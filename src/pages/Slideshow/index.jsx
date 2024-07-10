import React from "react";

import "./index.scss";

const images = import.meta.glob("/public/images/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const imageList = Object.values(images).map((image) => image.default);

function index() {
  const [index, setIndex] = React.useState(0);

  const timeoutRef = React.useRef(null);
  const moveToLastRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    async function myFunction() {
      resetTimeout();
      timeoutRef.current = await setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
          ),

        3000
      );
    }

    myFunction();

    return () => {
      resetTimeout();
    };
  }, [index]);

  const nextImgHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const backImgHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshowPage">
      <button onClick={() => backImgHandler()}>Back Image</button>
      <button onClick={() => nextImgHandler()}>Next Image</button>

      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          //   style={{ transform: `translate3d(${-1 * 100}%, 0, 0)` }}
        >
          {imageList.map((image, index) => (
            <img
              src={image}
              alt="image"
              className={`slideshowImg fakeImg_${image}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;

//   React.useEffect(() => {
//     resetTimeout();

//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
//         ),
//       2500
//     );
//
//     return () => {
//       resetTimeout();
//     };
//   }, [index]);
