import userModel from '../schemas/users.js'
import { model } from 'mongoose';
export default model('Users', userModel, 'users');
