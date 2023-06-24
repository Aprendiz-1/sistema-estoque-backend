import { Category } from "../../models/Category";

class ListCategoriesService {
    async execute() {
        const categories = await Category.aggregate([
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'products',
                }
            }
        ]);

        return categories;
    }
}

export { ListCategoriesService };