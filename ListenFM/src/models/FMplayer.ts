import { queryFMplayer } from '@/services/FMplayer';

export default {
  namespace: "FMplayer",
  state: {
    FMsong: {},
    id: 99406398,
    FMlist: [],
    play: true,
    single:true,
  },
  //纯函数
  reducers: {
    // 数据保存到state
    FMsave(state: any, { payload }) {
      const { FMsong, id } = payload;
      // console.log(payload,"mmmmmmmmmmpppppppppp");   
      return { ...state, FMsong, id };
    },
    FMjump(state: any, { payload }) {
      // console.log(payload, "mmmmmmmmmmpppppppppp");
      const FMsong = payload;
      const id = parseInt(FMsong.id);
      // console.log( { ...state, FMsong, id },"ccccccccccc");  
      return { ...state, FMsong, id };

    },
    FMListOK(state: any, { payload }) {
      const FMlist = payload;
      return { ...state, FMlist }
    },
    MyFMList(state: any, { payload }) {
      const FMlist = payload;
      return { ...state, FMlist }
    },
    PlayOrNot(state: any,) {
      const play = !state.play
      return { ...state, play }
    },
    SingleOrNot(state: any,) {
      const single = !state.single
      return { ...state, single }
    },
  },

  effects: {
    *fetchFMplayer({ payload: { id } }, { call, put }) {
      // 在这里解构声明后就可以直接使用id了，而不是{id}，{id}还是对象，而id是number    
      const ALL = yield call(queryFMplayer, id);
      yield put({
        type: 'FMsave',
        payload: {
          FMsong: ALL.data,
          id: ALL.data.id
        },
      });
    },
  }
}

