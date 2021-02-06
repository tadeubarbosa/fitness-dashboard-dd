import { AccountModel } from '../../../domain/models'
import { CreateAccount, CreateAccountModel } from '../../../domain/use-cases/create-account'
import { CreateAccountRepository } from '../../protocols/create-account-repository'
import { HashPasswordRepository } from '../../protocols/hash-password-repository'

export class MemoryCreateAccount implements CreateAccount {
  private readonly encrypter: HashPasswordRepository
  private readonly createAccountRepository: CreateAccountRepository

  constructor (encrypter: HashPasswordRepository, createAccountRepository: CreateAccountRepository) {
    this.encrypter = encrypter
    this.createAccountRepository = createAccountRepository
  }

  async create (accountData: CreateAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.hash(accountData.password)
    const account = await this.createAccountRepository.create(Object.assign({}, accountData, { password: hashedPassword }))
    return await new Promise(resolve => resolve(account))
  }
}
