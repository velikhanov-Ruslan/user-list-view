import type { User } from '@/services/users/types'
import ApiService from '@/core/services/Api_service'
import type { AxiosResponse } from 'axios'

export async function get_user_list(resource: string): Promise<AxiosResponse<User[]>> {
  return await ApiService.get<User[]>('/users')
}
