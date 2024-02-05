import { resourceRepository } from "../../infrastructure/fetch-resources-repository";

export const findResource = (repository) => {
  //por medio de un repository que esta application
  const exec = async () => {
    const response = await resourceRepository();//[]

    //adapto la respuesta
    const list =  toResourceEntity(response);

    return list;

  };

  return exec;
};
