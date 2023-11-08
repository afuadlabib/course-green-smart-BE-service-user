import IHistory from "./history";

export interface IAuthor extends IHistory {
  name: string;
  userId: bigint;
}


export const AuthorSchema = {
  name: { type: String, required: true },
  userId: { type: Number },
  isDeleted: { type: String, required: true },
  createdBy: { type: String, required: true },
  deletedBy: { type: Boolean, required: true },
}
