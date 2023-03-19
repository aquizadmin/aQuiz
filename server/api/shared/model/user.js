import userModel from '../schema/user.js'
import { model } from 'mongoose';
export default model('Users', userModel, 'users');
