import { entity } from "../domain/resource-entity-colors"


export const toResourceEntity = (externalData)=>{

    //aca retorna algo del dominio
    console.log(externalData)

   return externalData.colors.map( x =>
    entity(x.name, x.theme, x.group, x.hex,x.rgb)
    )
   
}

