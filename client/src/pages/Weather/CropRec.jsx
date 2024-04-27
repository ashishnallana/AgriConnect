import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

const CropRec = () => {

    const [N, setN] = useState(68);
    const [P, setP] = useState(57);
    const [K, setK] = useState(36);
    const [temperature, setTemperature] = useState(23);
    const [humidity, setHumidity] = useState(85);
    const [ph, setPh] = useState(7);
    const [rainfall, setRainfall] = useState(230);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(import.meta.env.ML_API);
            const res = await axios.post(`http://localhost:5000/predict`, {
                N, P, K, temperature, humidity, ph, rainfall
              });

            if(res)
            {
                console.log(res.data.suggestion);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div>CropRec</div>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-3 pb-10 rounded-lg flex flex-col px-10"
      >
        <div>
          <input
            value={P}
            type="number"
            placeholder="Phosphorous"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setP(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={K}
            type="number"
            placeholder="Potassium"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setK(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={N}
            type="number"
            placeholder="Nitrogen"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setN(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={temperature}
            type="number"
            placeholder="Temperature"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setTemperature(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={humidity}
            type="number"
            placeholder="Humidity"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setHumidity(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={ph}
            type="number"
            placeholder="pH"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setPh(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            value={rainfall}
            type="number"
            placeholder="Rainfall"
            className="bg-transparent outline-none placeholder:text-black text-xl py-2 border-b-2 my-2"
            onChange={(e) => setRainfall(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-[#00BF63] text-white px-3 py-2 rounded-md mt-5 mb-3"
        >
          Predict
        </button>
      </form>
    </div>
  );
};

export default CropRec;