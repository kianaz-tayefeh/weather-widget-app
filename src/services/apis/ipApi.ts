import { ipClient } from '@/services/clients/ipClient'

export const getCityByIpApi = async (): Promise<{ city: string }> => {
  const response = await ipClient.get('json')

  return response.data
}
