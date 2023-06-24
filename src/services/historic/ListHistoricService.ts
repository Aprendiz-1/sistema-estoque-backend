import { Historic } from "../../models/Historic";

class ListHistoricService {
    async execute() {
        const historic = await Historic.find().populate('product');
        return historic;
    }
}

export { ListHistoricService };