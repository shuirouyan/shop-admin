import { mock, Random } from 'mockjs'

const Mock = {
    getOrder(type) {
        let array = []
        for (let i = 0; i < Random.integer(5, 10); i++) {
            array.push(mock({
                'name': type == 0 ? '普通商品' : '秒杀商品' + i,
                'price': Random.integer(20, 500) + '元',
                'buyer': Random.cname(),
                'time': Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role': Random.boolean(),
                'state': Random.boolean(),
                'payType': Random.boolean(),
                'source': Random.url(),
                'phone': mock(/^1[356789]\d{9}/),
            }))
        }
        return array
    }
}

export default Mock