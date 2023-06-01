import axios from '~/request/axios'

export const helloRequest = async () => {
    let hello = await axios.getRequest('/hello', '')
    console.log(hello);
    return hello
}