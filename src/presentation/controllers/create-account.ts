import { CreateAccount } from '../../domain/use-cases/create-account'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest, ok } from '../helper/http'

export class CreateAccountController implements Controller {
  private readonly createAccount: CreateAccount

  constructor (createAccount: CreateAccount) {
    this.createAccount = createAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new Error(`Invalid param ${field}`))
      }
    }
    const { name, email, password, passwordConfirmation } = httpRequest.body
    if (password !== passwordConfirmation) {
      return badRequest(new Error('The password doesn\'t match!'))
    }
    const account = await this.createAccount.create({
      name,
      email,
      password
    })
    return ok(account)
  }
}
