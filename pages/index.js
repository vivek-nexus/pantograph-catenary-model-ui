import Head from "next/head";
import Image from "../components/Image";
import InputField from "../components/InputFIeld";
import ClickHint from "../components/ClickHint";
import SuspensionSpringsParameters from "../components/SuspensionSpringsParameters";
import ContactWireParameters from "../components/ContactWireParameters";
import CatenaryCableParameters from "../components/CatenaryCableParameters";
import DropperParameters from "../components/DropperParameters";
import DropperScheduleParameters from "../components/DropperScheduleParameters";
import PantographParameters from "../components/PantographParameters";
import { useState } from "react";
import defaultValues from "../constants/defaultsValues";

function Home() {

  const [parametersObject, setParametersObject] = useState(defaultValues)


  return (
    <div>
      <Head>
        <title>Pantograph catenary model UI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Head>



      <div className="h-[95vh] relative w-fit mx-auto">
        <div
          className="h-full w-fit mx-auto border-2 rounded-[28px] overflow-clip"
        // style={{ boxShadow: "0px 0px 32px 8px grey" }}
        >
          <Image className="h-full" src="scene.svg" />
        </div>
        <div className="absolute right-4 bottom-4 p-6"
          style={{
            borderRadius: "16px",
            background: "rgba(87, 87, 87, 0.80)",
            backdropFilter: "blur(8px)"
          }}
        >
          <h1
            className="text-center text-white"
          >Pantograph catenary model <br /> simulation</h1>
        </div>
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
          <DropperScheduleParameters />
        </ClickHint>
        <ClickHint
          colour="green"
          percentageFromLeft="32%"
          percentageFromTop="50%"
          id="pantograph-parameters"
        >
          <PantographParameters />
        </ClickHint>
      </div>
    </div>

  )
}

export default Home;