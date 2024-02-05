

export const toResourceEntity = (externalData)=>{

    //aca retorna algo del dominio

   return externalData.data.map(
    entity(x.id, x.name, x.year, x.color,x.pantone)
    )
   
}