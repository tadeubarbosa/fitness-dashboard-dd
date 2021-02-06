import { AccountModel } from '../../domain/models/account'
import { CreateAccountModel } from '../../domain/use-cases/create-account'

export interface CreateAccountRepository {
  create: (account: CreateAccountModel) => Promise<AccountModel>;
}
