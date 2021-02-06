import { MeasureModel } from '../models'

export interface CreateMeasureModel {
  acccount_id: number
  weight: number
  height: number
}

export interface CreateMeasure {
  create: (account: CreateMeasureModel) => Promise<MeasureModel>
}
