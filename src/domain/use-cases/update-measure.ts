import { MeasureModel } from '../models'

export interface UpdateMeasureModel {
  acccount_id: number
  weight: number
  height: number
}

export interface UpdateMeasure {
  update: (account: UpdateMeasureModel) => Promise<MeasureModel>
}
