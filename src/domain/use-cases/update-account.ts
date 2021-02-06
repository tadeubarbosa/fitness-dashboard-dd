import { AccountModel } from '../models'

export interface UpdateAccountModel {
  id: string
  name: string
  email: string
  password: string
}

export interface UpdateAccount {
  update: (account: UpdateAccountModel) => Promise<AccountModel>
}
