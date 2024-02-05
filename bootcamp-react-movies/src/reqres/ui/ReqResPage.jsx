import React from "react";
import { PrimeReactProvider } from "primereact/api";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { findResource } from "../application/find/find-data";
import { resourceRepository } from "../infrastructure/fetch-resources-repository";
import { appConfig } from "../../config";

export const ReqResPage = () => {

    const saludar = ()=>{
        console.log("Hola....")
    }

    const findData= async ()=>{
        //usando un caso de uso > infrastructure > domain
        const useCase = findResource(
            resourceRepository(appConfig.REQ_RES_PATH)

        )

        const myListResources = await useCase();
        console.log(myListResources);
    }


  return (
    <PrimeReactProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 mt-3">
          <Button label="Saludar" onClick={saludar} />
          <Button label="Get Data Table" onClick={findData} />
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
};
