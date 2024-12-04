import axios from "axios";
import { useEffect, useState } from "react";

const url = "/data.json";

const Carousel = () => {
  const [city, setCity] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response);
    setCity(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" container mx-auto">
      <div className="carousel">
        {city.length > 0 && (
          <>
            {city.map((el, index) => {
              const { id, img, name, description } = el;
              return (
                <div
                  key={id}
                  id={`id${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <img src={img} alt={name} className="w-full" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-xl font-bold">{name}</p>
                    <p>{description}</p>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    {/* Pulsante precedente */}
                    <a
                      href={`#id${index === 0 ? city.length : index}`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    {/* Pulsante successivo */}
                    <a
                      href={`#id${index === city.length - 1 ? 1 : index + 2}`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
