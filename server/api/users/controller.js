import { getUser } from '../shared/service/user.js';

const getUserByID = async (req, res) => {
    const find = {_id: req.params.id}
    const user = await getUser({find});
    res.json(user);
}

export default {
    getUserByID,
}
