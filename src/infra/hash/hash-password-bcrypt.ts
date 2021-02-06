import bcrypt from 'bcrypt'
import { HashPasswordRepository } from '../../data/protocols/hash-password-repository'

export class HashPasswordBcryptAdapter implements HashPasswordRepository {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
