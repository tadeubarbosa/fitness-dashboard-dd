export interface DeleteAccountModel {
  id: string
}

export interface DeleteAccount {
  delete: (account: DeleteAccountModel) => void
}
