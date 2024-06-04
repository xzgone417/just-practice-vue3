import { request } from '@umijs/max';

export function queryHomeList() {
    return request("/fm/home-list.json")
}
