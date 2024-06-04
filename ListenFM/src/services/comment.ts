import { request } from '@umijs/max';

export function queryCommentList({ post_id=697,offset=0,limit=10,key="046b6a2a43dc6ff6e770255f57328f89" }) {
    return request(`/fm/forum-comment-list.json?post_id=${post_id}&offset=${offset}&limit=${limit}&key=${key}`)
}
