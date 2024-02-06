import React, { useEffect, useState } from "react";
import { Badge } from "primereact/badge";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { findResource } from "../application/find/find-data-colors";
import { resourceRepository } from "../infrastructure/fetch-resources-repository";
import { appConfig } from "../../config";
import "/node_modules/primeflex/primeflex.css";

export const ReqResPage = () => {
  const [colors, setColors] = useState("");

  const saludar = () => {
    console.log("Hola....");
  };

  const findData = async () => {
    //debugger;
    //usando un caso de uso > infrastructure > domain
    const useCase = findResource(
      //resourceRepository(appConfig.REQ_RES_PATH)
      resourceRepository(appConfig.REQ_RES_PATH_COLORS)
    );

    const myListResources = await useCase();

    console.log(myListResources);
    setColors(myListResources);
  };

  return (
    <PrimeReactProvider>
      <div className="container w-screen m-0 p-0">
        <div className="row d-flex justify-content-center w-screen p-0 m-0">
          <div className="col-xl-12 col-lg-10 col-md-9  d-flex justify-content-center w-screen p-0 m-0">
            <Button label="Saludar" onClick={saludar} />
            <Button label="Get Data Table" onClick={findData} />
          </div>

          {!colors ? (
            <h2>No Hay colores </h2>
          ) : (
           <>
            <div className="col-lg-12 col-md-9  d-flex justify-content-center flex-wrap w-screen p-0 m-0">
            {colors.map((color, index) => {
                return (
                  <div key={index} className=" col-lg-3 col-md-4  mt-3 m-0">
                    <Badge
                      value={color.name}
                      size="xlarge"
                      style={{
                        backgroundColor: `#${color.hex}`,
                        height: "60px",
                        width: "250px",
                      }}
                    ></Badge>
                  </div>
                );
              })}
          </div>
             
           </>
          )}

         
        </div>
      </div>
    </PrimeReactProvider>
  );
};
