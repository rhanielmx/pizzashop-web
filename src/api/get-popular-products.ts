import { api } from '@/lib/axios'

export type GetPopularProdutsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProduts() {
  const response = await api.get<GetPopularProdutsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
