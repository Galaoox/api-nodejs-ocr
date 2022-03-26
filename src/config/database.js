
import { connect } from 'mongoose';
import { DB_HOST} from './env';

connect(DB_HOST)
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));