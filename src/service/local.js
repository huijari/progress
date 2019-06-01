import uuid from 'uuid/v4'

class Local {
  static get(key, ids) {
    const all = JSON.parse(localStorage.getItem(key)) || []
    if (ids === undefined) return all
    if (Array.isArray(ids)) return all.filter(({ id }) => ids.includes(id))
    return all.find(({ id }) => id === ids)
  }

  static save(key, item) {
    const all = Local.get(key)
    if (item.id === undefined) {
      item.id = uuid()
      all.push(item)
    } else {
      const target = all.findIndex(({ id }) => id === item.id)
      all[target] = item
    }
    localStorage.setItem(key, JSON.stringify(all))
  }

  static remove(key, id) {
    const all = Local.get(key)
    const target = all.findIndex(item => item.id === id)
    all.splice(target, 1)
    localStorage.setItem(key, JSON.stringify(all))
  }
}

export default Local
