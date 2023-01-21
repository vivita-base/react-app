import { setGlobal } from 'reactn';
import * as stringUtil from '../utils/string';

const initStore = () => {
  setGlobal({
    conditions: (localStorage.getItem('conditions') !== null) ? stringUtil.tryJSONParse(localStorage.conditions) : null,
    header: {menuOpen:false},
    user: (localStorage.getItem('user') !== null) ? stringUtil.tryJSONParse(localStorage.user) : null,
    snsInfo: null,
    modal: "",
  });
};

export default initStore;