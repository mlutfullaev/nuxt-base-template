import { v4 as uuidv4 } from "uuid";

export const idGenerator = (): string => {
  return uuidv4();
};
