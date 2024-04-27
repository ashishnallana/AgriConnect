import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import DateSelector from "./DateSelector";
import WeatherReport from "./WeatherReport";
import CropRec from "./CropRec";

function Weather() {
  const [today, setToday] = useState(new Date());

  //   useEffect(() => {
  //     console.log(today);
  //   }, [today]);

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-[#7ED957] flex flex-col space-y-5 p-5 rounded-md">
          <DateSelector setToday={setToday} />
          <div className="flex">
            <WeatherReport date={today} />
            <CropRec />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Weather;
