import { request } from '@umijs/max';

export function queryUserList({ flag=0,offset=0,limit=10,type=1,key="046b6a2a43dc6ff6e770255f57328f89" }) {
    return request(`/fm/forum-thread-list.json?flag=${flag}&offset=${offset}&limit=${limit}&type=${type}&key=${key}`)
}

// export function queryCommentList(){
//     return request(`/fm/post-forum-comment.json`,{flag,post_id,reply_user_id,key ,content  ,token})
// }
// {flag=0,
//     post_id=697,
//     reply_user_id=0,
//     key="046b6a2a43dc6ff6e770255f57328f89",
//     content="不错",
//     token="b845588abcf58804c99d289584cd6068"}
export function queryUserById(id: number) {
    return request(`/fm/forum-thread-list.json/${id}`);
}

// export function deleteUserById(id: number, { current = 1, pageSize = 5 }) {
//     // return request(`/api/users/delete/${id}?current=${current}&pageSize=${pageSize}`);
//     return request(`/fm/forum-thread-list.json/delete/${id}`, {
//         params: { current: current, pageSize: pageSize },
//     })
// }

// export function createUser(user: any) {
//     return request(`/api/users/create`, {
//         method: "POST",
//         data: user,
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         }
//     });
// }