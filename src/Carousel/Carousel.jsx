import axios from "axios";
import { useEffect, useState } from "react";

const url = "/data.json";

const Carousel = () => {
  const [city, setCity] = useState([]);
  const [active, setActive] = useState(0);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setCity(response.data);
  };

  const nextSlide = () => {
    setActive((prevValue) => (prevValue + 1) % city.length);
  };

  const prevSlide = () => {
    setActive((prevValue) => (prevValue - 1 + city.length) % city.length);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <div className="container mx-auto">
      {city.length > 0 && (
        <div className="card-container relative ">
          {city.map((el, index) => {
            const { id, img, name, description } = el;
            return (
              <div
                key={id}
                className={`card card-compact bg-base-100 shadow-xl absolute top-0 left-0 w-full transition-opacity duration-500 ${
                  index === active ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <figure>
                  <img src={img} alt={name} className="w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between absolute top-52 translate-y-1/2   w-full px-2 z-30">
            <button className="btn" onClick={prevSlide}>
              Prev
            </button>
            <button className="btn" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Carousel;
