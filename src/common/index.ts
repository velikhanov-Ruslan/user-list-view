import { ref } from 'vue'
import type { UserContent } from '@/models/user-model'

export const sections = ref<UserContent[]>([
  {
    title: 'address',
    items: [
      {
        name: 'Street',
        value: 'street'
      },
      {
        name: 'Suite',
        value: 'suite'
      },
      {
        name: 'City',
        value: 'city'
      },
      {
        name: 'Zipcode',
        value: 'zipcode'
      }
    ]
  },
  {
    title: 'company',
    items: [
      {
        name: 'Name',
        value: 'name'
      },
      {
        name: 'CatchPhrase',
        value: 'catchPhrase'
      },
      {
        name: 'Bs',
        value: 'bs'
      }
    ]
  },
  {
    title: 'BASIC INFO',
    items: [
      {
        name: 'Name',
        value: 'person'
      },
      {
        name: 'Username',
        value: 'username'
      },
      {
        name: 'email',
        value: 'email'
      },
      {
        name: 'Website',
        value: 'website'
      }
    ]
  }
])
