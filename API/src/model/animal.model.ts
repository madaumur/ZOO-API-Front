import { model, Schema } from 'mongoose'
import { animalInterface } from '../interface/animal.interface'
import { specieInterface } from './specie.model'

const animalSchema = new Schema<animalInterface>({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	specie: new Schema<specieInterface>({
		_id: { type: String, required: true },
		name: { type: String, required: true },
	}),
	birth_date: { type: Date, required: false },
	death_date: { type: Date, required: false },
	sex: { type: String, required: true },
	observations: { type: String, required: false },
	position: { type: String, required: true },
})

const animalModel = model<animalInterface>('animal', animalSchema)

export { animalModel, animalInterface }