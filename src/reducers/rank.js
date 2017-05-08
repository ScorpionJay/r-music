import { combineReducers } from 'redux'
import { RANK_LIST,RANK_INFO } from '../actions/rank'

function list(state = [], action){
  switch(action.type) {
    case RANK_LIST:
      return action.obj;
    default:
      return state;
  }
}
let infoVo = {
  info: {
    imgurl: '',
    songinfo: [
        {
          "songname": "庄心妍 - 我不相信"
        }
      ],
  },
  songs: {
    list: []
  },
}
function info(state = infoVo, action){
  switch(action.type) {
    case RANK_INFO:
      return action.obj;
    default:
      return state;
  }
}


const Reducers = combineReducers({
  list,info
})

export default Reducers