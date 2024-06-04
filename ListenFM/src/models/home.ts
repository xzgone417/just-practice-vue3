import { queryHomeList } from '@/services/home';
import { Loading } from 'antd-mobile';

export default {
    namespace: 'home',
    state: {
        category: [],
        diantai: [],
        hotfm: [],
        newfm: [],
        newlesson: [],
        tuijian: []
    },
    reducers: {
        save(state: any, { payload }) {
            const { category, diantai, hotfm, newfm, newlesson, tuijian } = payload;
            return { ...state, category, diantai, hotfm, newfm, newlesson, tuijian };
        }
    },
    effects: {
        *fetchHomeList({ payload: { } }, { call, put }) {
            const { data } = yield call(queryHomeList);
            yield put({
                type: 'save',
                payload: data
            });
        }
    }
};