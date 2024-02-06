import { entity } from "../domain/resource-entity"


export const toResourceEntity = (externalData)=>{

    //aca retorna algo del dominio

   return externalData.data.map( x =>
    entity(x.id, x.name, x.year, x.color,x.pantone_value)
    )
   
}