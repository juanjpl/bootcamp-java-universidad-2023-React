import { entity } from "../domain/resource-entity-character"


export const toResourceEntity = (externalData)=>{

    //aca retorna algo del dominio
    //console.log(externalData)

   return externalData.results.map( x =>
    entity(x.id, x.name, x.status, x.species,x.type,x.gender,x.image)
    )
   
}

