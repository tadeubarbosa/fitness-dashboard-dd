import { BmrModel } from '../models'

export interface CalculateBmrModel {
  weight: number
  height: string
}

export interface CalculateBmr {
  calculate: (account: CalculateBmrModel) => Promise<BmrModel>
}
