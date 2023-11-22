import React, { useEffect, useState } from "react";
import { getAllTourData } from "../ApiService/Api";
import Tour from "./Tour";

function Home() {
  const [loding, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  async function fetchTourData() {
    try {
      const response = await getAllTourData();
      console.log(response);
      setTours(response);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(tours);
  useEffect(() => {
    setTimeout(() => {
      fetchTourData();
    }, 1000);
  }, []);
  return (
    <>
      <section>
        {tours.length === 0 ? (
          <main>
            <div className="title">
              <h2>no tours left</h2>
              <button className="btn" onClick={() => fetchTourData()}>
                refresh
              </button>
            </div>
          </main>
        ) : (
          <>
            <div className="title">
              <h2>Tour App</h2>
              <div className="underline"></div>
            </div>
            <div>
              {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
              })}
              <Tour />
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Home;
