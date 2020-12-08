import request from '../utils/request'

const icode = '13926EAFCAA16CC3'
export function wordCloud() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}
