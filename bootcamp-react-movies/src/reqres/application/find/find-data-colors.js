
import { toResourceEntity } from "../../infrastructure/resource-adapter-color";

export const findResource = (repository) => {
  //por medio de un repository que esta application
  const exec = async () => {

    const response = await repository();

    //adapto la respuesta
    const list =  toResourceEntity(response);

    return list;

  };

  return exec;
};
