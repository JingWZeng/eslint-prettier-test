import request from '@/axios/index.js'

export function login(data){
    console.log(data)
    // data 就是账号密码，给后端（可以进行加密，最好不要以明文传给后端）
    return request({
        url:'login',
        method:'POST',
        data
    })
}