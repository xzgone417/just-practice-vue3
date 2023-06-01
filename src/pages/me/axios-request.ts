import axios from '~/request/axios'

export const helloRequest = async () => {
    let hello = await axios.getRequest('/hello', '')
    console.log(hello);
    return hello
}
export const hellosRequest = async () => {
    let hello = await axios.postRequest('/hello', '')
    console.log(hello);
    return hello
}