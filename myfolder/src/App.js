import { useState } from "react";

const App = () => {
  const [temp, setTemp12312] = useState(0);

  const [te1mp, setT1emp] = useState(0);
  const [tem2p, setTe2mp] = useState(0);

  const [te3mp, setTe3mp] = useState(0);

  const [tem4p, setT5emp] = useState(0);

  const [t5emp, setTedmp] = useState(0);

  const handleChange = (e) => {
    setTemp12312(parseFloat(e.target.value));
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
