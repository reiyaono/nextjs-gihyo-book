//typesは後ほど定義
import { ApiContent, User } from 'types'
// 先ほど定義したscr/utils/index.tsから読み込み
import { fetcher } from 'utils'

export type SigninParams = {
  username: string
  password: string
}

const signin = async (
  context: ApiContent,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }
  )
}

export default signin