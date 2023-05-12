import type { User } from '@/models/User'

export default function <T extends User>(obj: T): object {
  let temp = {}
  get_prop(obj)

  function get_prop(o: any) {
    for (const prop in o) {
      if (typeof o[prop] === 'object') {
        get_prop(o[prop])
      } else {
        temp = {
          ...temp,
          [prop]: o[prop],
          person: obj.name
        }
      }
    }
  }

  console.log('t', temp)
  return temp
}
