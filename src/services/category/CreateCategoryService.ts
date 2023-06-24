import { Category } from '../../models/Category';

class CreateCategoryService {
    async execute(name: string) {
        const category = await Category.create({name});
        return category;
    }
}

export { CreateCategoryService };