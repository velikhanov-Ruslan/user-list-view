import { ref } from 'vue'
import type { UserContent } from '@/models/user-model'

export const sections = ref<UserContent[]>([
  {
    title: 'Address',
    items: [
      {
        name: 'Street'
      },
      {
        name: 'Suite'
      },
      {
        name: 'City'
      },
      {
        name: 'Zipcode'
      }
    ]
  },
  {
    title: 'company',
    items: [
      {
        name: 'Name'
      },
      {
        name: 'CatchPhrase'
      },
      {
        name: 'Bs'
      }
    ]
  },
  {
    title: 'BASIC INFO',
    items: [
      {
        name: 'Name'
      },
      {
        name: 'Username'
      },
      {
        name: 'Email'
      },
      {
        name: 'Phone'
      },
      {
        name: 'Website'
      }
    ]
  }
])
