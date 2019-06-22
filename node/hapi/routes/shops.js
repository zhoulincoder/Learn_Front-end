module.exports = [
  {
    method: 'GET',
    path: '/shops',
    handler: async (Request, reply) => {
      reply()
      // 响应
    },
    config: {
      tags: ['api','shops'],
      description: '获取店铺列表'
    }
  },
  {
    method: 'GEt',
    path: '/shops/{shopId}/goods',
    handler: async(request, reply) => {
      reply()
    },
    config: {
      tags: [ 'api', 'shops'],
      description:'获取店铺的商品列表'
    }
  }
]