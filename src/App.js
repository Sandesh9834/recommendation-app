import React, { useState } from "react";
import "./styles.css";

var recommendDirectory = {
  Forts: [
    {
      name: "Shivneri Fort",
      discription:
        "Shivneri Fort is a hill fort located at the northern side of Pune, with Junnar as its base. It is the birthplace of Chhatrapati Shivaji, the founder of the Maratha Empire",
      rating: "4.5/5"
    },
    {
      name: "Raigad Fort",
      discription:
        "Raigad is a hill fort situated at about 25 Km from Mahad in the Raigad district. Chhatrapati Shivaji renovated this fort and made it his capital in 1674 AD. The rope-way facility is available at Raigad Fort, to reach at the fort from ground in few minutes.",
      rating: "4.5/5"
    },
    {
      name: "Sindhudurg Fort",
      discription:
        "Sindhudurg Fort is a historical fort that occupies an islet in the Arabian Sea, just off the coast of Maharashtra in Western India",
      rating: "4/5"
    }
  ],

  World_Heritage_Sites: [
    {
      name: "Ajanta-Ellora Caves",
      discription:
        "Located in Maharashtra’s Aurangabad region, Ajanta and Ellora Caves are Maharashtra’s star tourist attractions.",
      rating: "5/5"
    },
    {
      name: "Kaas Plateau",
      discription:
        "The Kaas Plateau Reserved Forest, also known as the Kaas Pathar, is a plateau situated 25 kilometres west from Satara city in Maharashtra, India. It falls under the Sahyadri Sub Cluster of the Western Ghats, and it became a part of a UNESCO World Natural Heritage Site in 2012.",
      rating: "5/5"
    },
    {
      name: "Kailasa Temple",
      discription:
        "A megalith carved from a rock cliff face, it is considered one of the most remarkable cave temples in the world because of its size, architecture and sculptural treatment, and the climax of the rock-cut phase of Indian architecture",
      rating: "5/5"
    }
  ],

  Hill_Stations: [
    {
      name: "Mahabaleshwar",
      discription:
        "Mahableshwar is the best hill station of Maharashtra. It is situated about 4500 ft. above sea level on the Sahyadri spurs.",
      rating: "4.5/5"
    },
    {
      name: "Matheran",
      discription:
        "Matheran is a hill station and a municipal council in Karjat Tahsil in the Raigad district in the Indian state of Maharashtra. It is Asia's only automobile-free hill station.",
      rating: "4.5/5"
    },
    {
      name: "Pachgani",
      discription:
        "A Majestic hill station at an altitude of 4242 ft above the sea level, Panchgani is a famous destination for its natural beauty that entices the tourists from different parts of the world. It would serves as a summer retreat for British officials.",
      rating: "4/5"
    }
  ]
};
var arrDirectory = Object.keys(recommendDirectory);

export default function App() {
  const [counter, setCounter] = useState("Forts");

  function clickHandlerOne(counter) {
    setCounter(counter);
  }
  return (
    <div className="App">
      <h2>🌇 Travel Recommendation App</h2>
      <div>
        {arrDirectory.map(function (destination) {
          return (
            <button
              key={destination}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
              onClick={() => {
                clickHandlerOne(destination);
              }}
            >
              {destination}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {recommendDirectory[counter].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div style={{ fontSize: "smaller" }}>{place.discription}</div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {place.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
