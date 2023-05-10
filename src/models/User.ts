export type User = {
  name: string
  phone: string
  username: string
  website: string
  id: number
  email: string
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
  address: {
    city: string
    street: string
    zipcode: string
    suite: string
  }
}
