import Mock from 'mockjs'

// 生成数据列表
const dataList = [];

for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    dataList.push(Mock.mock({
        'userId': '@increment',
        'username': '@name',
        'email': '@email',
        'mobile': /^1[0-9]{10}$/,
        'status': 1,
        'roleIdList': null,
        'createUserId': 1,
        'createTime': 'datetime'
    }))
}

/*获取用户列表*/
export function getAll () {
    return {
        url: 'http://localhost:8080/user/getAll',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 200,
            'page': {
                'totalCount': dataList.length,
                'pageSize': 10,
                'totalPage': 1,
                'currPage': 1,
                'list': dataList
            }
        }
    }
}
