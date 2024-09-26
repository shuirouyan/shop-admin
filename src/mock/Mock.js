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
    },
    getGoods(type) {
        let arr = []
        for (let i = 0; i < Random.integer(5, 10); i++) {
            arr.push(mock({
                'name': (type == 0 ? '普通商品' : type == 1 ? '秒杀商品' : '今日推荐') + i,
                'img': Random.dataImage('300x250', '商品示例图片'),
                'price': Random.integer(20, 500) + '元',
                'count': Random.integer(10, 100),
                'sellCount': Random.integer(10, 100),
                'back': Random.integer(10, 100),
                'backPrice': Random.integer(0, 5000) + '元',
                'owner': Random.cname(),
                'time': Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'state': Random.boolean()
            }))
        }
        return arr
    }
}




export default Mock