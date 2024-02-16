
import { resourceRepository } from "../../infrastructure/fetch-resources-repository";
import { toResourceEntity } from "../../infrastructure/resource-character-adapter";

export const findResource = (repository) => {
  //por medio de un repository que esta application

  const exec = async () => {
    let respuesta = [];

    const response = await repository();

    //console.log(response.info.next);

    //adapto la respuesta
    const list = toResourceEntity(response);
    respuesta = [...respuesta,...list];
/*
    

    if (response.info.next) {
      const res = findResource(resourceRepository(undefined,response.info.next));
    console.log(res)
      //respuesta = [...list, ...list2];
    }
    */

    return [respuesta, response.info];
  };

  return exec;
};
