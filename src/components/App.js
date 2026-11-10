
function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  // Get selected data
  const selectedState = states[stateIndex];
  const selectedCity = selectedState.city[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  // State change
  function handleState(e) {
    setStateIndex(Number(e.target.value));

    // Reset dependent dropdowns
    setCityIndex(0);
    setLandmarkIndex(0);
  }

  // City change
  function handleCity(e) {
    setCityIndex(Number(e.target.value));

    // Reset landmark
    setLandmarkIndex(0);
  }

  // Landmark change
  function handleLandmark(e) {
    setLandmarkIndex(Number(e.target.value));
  }

  return (
    <div id="main">

      {/* STATE DROPDOWN */}
      <select
        id="state"
        value={stateIndex}
        onChange={handleState}
      >
        {states.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>


      {/* CITY DROPDOWN */}
      <select
        id="city"
        value={cityIndex}
        onChange={handleCity}
      >
        {selectedState.city.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>


      {/* LANDMARK DROPDOWN */}
      <select
        id="landmark"
        value={landmarkIndex}
        onChange={handleLandmark}
      >
        {selectedCity.landmarks.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id="landmark-name">{selectedLandmark.name}</div>
      <div id="landmark-description">
        {selectedLandmark.description}
      </div>

    </div>
  );
}
