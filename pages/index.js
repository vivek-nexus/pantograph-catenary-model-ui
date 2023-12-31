import Head from "next/head";
import Image from "../components/Image";
import ClickHint from "../components/ClickHint";
import SuspensionSpringsParameters from "../components/SuspensionSpringsParameters";
import ContactWireParameters from "../components/ContactWireParameters";
import CatenaryCableParameters from "../components/CatenaryCableParameters";
import DropperParameters from "../components/DropperParameters";
import DropperScheduleParameters from "../components/DropperScheduleParameters";
import PantographParameters from "../components/PantographParameters";
import { useEffect, useState } from "react";
import defaultValues from "../constants/defaultsValues";

function Home() {

  const [parametersObject, setParametersObject] = useState(defaultValues)

  // Warn about data reset in events like user refreshes the page
  useEffect(() => {
    window.onbeforeunload = function () {
      return "";
    }
  }, [])

  // prepare JSON download data, whenever parametersObject changes
  useEffect(() => {
    let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(parametersObject))
    let a = document.querySelector("#download-as-json")
    a.href = 'data:' + data;
    a.download = 'params.json';
  }, [parametersObject])

  // analytics
  useEffect(() => {
    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/d650c614-2064-44cc-804a-54644c37dd52.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  })


  return (
    <div>
      <Head>
        <title>Pantograph catenary model UI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Head>



      <div className="h-[95vh] relative w-fit mx-auto">
        {/* Background image for scene */}
        <div
          className="h-full w-fit mx-auto border-2 rounded-[28px] overflow-clip"
        // style={{ boxShadow: "0px 0px 32px 8px grey" }}
        >
          <Image className="h-full" src="scene.svg" />
        </div>
        {/*Bottom right page title and download*/}
        <div className="absolute right-4 bottom-4 p-6 rounded-lg"
          style={{
            background: "rgba(87, 87, 87, 0.80)",
            backdropFilter: "blur(8px)"
          }}
        >
          <h1
            className="text-center text-white"
          >Pantograph catenary model <br /> simulation</h1>
          <div className="text-center mt-4">
            <a className="font-bold text-white underline underline-offset-4 cursor-pointer" id="download-as-json">Download entered values as JSON</a>
          </div>
        </div>
        {/* Dots or Click hints */}
        <ClickHint
          colour="cyan"
          percentageFromLeft="15%"
          percentageFromTop="30%"
          id="suspension-spring-parameters"
        >
          <SuspensionSpringsParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
        <ClickHint
          colour="orange"
          percentageFromLeft="60%"
          percentageFromTop="43%"
          id="contact-wire-parameters"
        >
          <ContactWireParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
        <ClickHint
          colour="royalblue"
          percentageFromLeft="58%"
          percentageFromTop="33%"
          id="dropper-parameters"
        >
          <DropperParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
        <ClickHint
          colour="red"
          percentageFromLeft="42%"
          percentageFromTop="27%"
          id="catenary-cable-parameters"
        >
          <CatenaryCableParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
        <ClickHint
          colour="royalblue"
          percentageFromLeft="30%"
          percentageFromTop="8%"
          id="dropper-schedule-parameters"
        >
          <DropperScheduleParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
        <ClickHint
          colour="green"
          percentageFromLeft="32%"
          percentageFromTop="50%"
          id="pantograph-parameters"
        >
          <PantographParameters
            parametersObject={parametersObject}
            setParametersObject={setParametersObject}
          />
        </ClickHint>
      </div>
    </div>

  )
}

export default Home;