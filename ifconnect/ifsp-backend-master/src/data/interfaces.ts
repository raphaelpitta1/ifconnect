export interface IUser {
  email: string,
  _id: string
}

export interface IFiles {
  image: string,
  _id: string,
  user: IUser
}
