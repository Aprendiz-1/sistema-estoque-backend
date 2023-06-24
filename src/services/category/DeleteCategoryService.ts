import { Category } from "../../models/Category";

class DeleteCategoryService {
    async execute(category_id: string) {
        const category = await Category.findByIdAndDelete(category_id);
        return category;
    }
}

export { DeleteCategoryService };