import questionService from "../services/questions.js";

const getAllCategories = async (req, res) => {
    const allCategories = await questionService.getUniqValuesOfField({fieldName: 'category'});
    res.json({allCategories});
}

export default {
    getAllCategories,
}
