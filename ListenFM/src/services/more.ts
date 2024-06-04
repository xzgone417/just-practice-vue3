import { request } from '@umijs/max';

// 更多心理课  http://yiapi.xinli001.com/fm/newlesson-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89
    export function getKEList({offset=0,limit="10",key="046b6a2a43dc6ff6e770255f57328f89"}){
    return request(`/fm/newlesson-list.json?offset=${offset}&limit=${limit}&key=${key}`)
}




//更多FM  http://yiapi.xinli001.com/fm/newfm-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89
export function getFMList({offset=0,limit="10",key="046b6a2a43dc6ff6e770255f57328f89"}){
    return request(`/fm/newfm-list.json?offset=${offset}&limit=${limit}&key=${key}`)
}


//更多电台  http://yiapi.xinli001.com/fm/diantai-page.json?key=046b6a2a43dc6ff6e770255f57328f89

export function getDTList({key="046b6a2a43dc6ff6e770255f57328f89"}){
    return request(`/fm/diantai-page.json?key=${key}`)
}

//更多主播  http://yiapi.xinli001.com/fm/diantai-new-list.json?offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89

export function getZBList({offset=0,limit="10",key="046b6a2a43dc6ff6e770255f57328f89"}){
    return request(`/fm/diantai-new-list.json?offset=${offset}&limit=${limit}&key=${key}`)
}



//分类话题   http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=1&offset=0&limit=10&key=046b6a2a43dc6ff6e770255f57328f89
export function getFenlei({category_id=1,offset=0,limit=10,key="046b6a2a43dc6ff6e770255f57328f89"}){
    return request(`/fm/category-jiemu-list.json?category_id=${category_id}&offset=${offset}&limit=${limit}&key=${key}`)
}



//获取参数方法https://www.ab62.cn/article/9464.html