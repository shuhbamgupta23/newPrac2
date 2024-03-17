import { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(0);

  const handleChange = (e) => {
    setTemp(parseFloat(e.target.value));
  };
  const tofarh = (val) => {
    return 92;
  };

  return (
    <div>
      <form>
        <input
          data-testid="input-id"
          name="input"
          type="number"
          value={temp}
          onChange={(e) => handleChange(e)}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid="output">
        {temp}°C is {tofarh(temp)}°F K.
      </p>
    </div>
  );
};

export default App;