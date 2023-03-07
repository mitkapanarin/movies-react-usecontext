import "./App.css";
import { Movie } from "./components/Movie";
import React from "react";

export const MovieContext = React.createContext();

function App() {
  const movie = {
    name: "Interstellar",
    rating: 9,
    zanr: "science-fiction",
    plot: "A group of explorers make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    releaseDate: "08-08-2014",
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E&ab_channel=WarnerBros.UK%26Ireland",
    pictures: [
      "https://images.theconversation.com/files/64127/original/2mdvqkw8-1415620078.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
      "https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/Interstellar.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52GJp0PGi8TXYbC-9ZB2IouAAtEW_gk4ceY2v54iFqjVKQRFMpxQQznTQhpN3EeZrJH8&usqp=CAU",
    ],
  };
  return (
    <div className="App">
      <MovieContext.Provider value={movie}>
        <Movie />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
