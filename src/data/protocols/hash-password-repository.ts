export interface HashPasswordRepository {
  hash: (password: string) => Promise<string>;
}
