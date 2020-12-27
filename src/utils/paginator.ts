import { IUser } from "../interfaces/IUser";

export const paginator = (data: IUser[], itemsPerPage: number, currentPage: number): IUser[] => {
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  return data.slice(indexOfFirstItem, indexOfLastItem);
}