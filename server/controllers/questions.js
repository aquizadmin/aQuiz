import questionService from "../services/questions.js";
import { SuccessResponseDTO } from "../DTO/index.js";

const getAllCategories = async (req, res) => {
    const allCategories = await questionService.getUniqValuesOfField({fieldName: 'category'});
    res.status(200).json(new SuccessResponseDTO(allCategories));
}

export default {
    getAllCategories,
}
