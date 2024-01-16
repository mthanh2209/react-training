import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export const CatFriends = () => {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleScrollCat = () => {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    selectedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <nav className="navbar">
        <button onClick={handleScrollCat}>Next</button>
      </nav>
      <div className="cat-container">
        <ul className="list-cat">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
            >
              <img
                className={`cat-img ${index === i ? "active" : ""}`}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
