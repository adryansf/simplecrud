import axios from 'axios';

export default axios.create({
  baseURL: 'https://app-crud-person.herokuapp.com/api/person',
});
