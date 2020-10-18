// https://2ality.com/2015/08/es6-map-json.html

export default class Tools {

  static MapToObject(map) {
    
    let object = Object.create(null)
    
    for (let [key, value] of map)
      object[key] = value

    return object
  }

  static ObjectToMap(object) {
    
    let map = new Map()
    
    for (let key of Object.keys(object))
      map.set(key, object[key])

    return map
  }

  static MapToJSON(map) {
    return JSON.stringify(Tools.MapToObject(map))
  }

  static JSONToMap(json) {
    return Tools.ObjectToMap(JSON.parse(json))
  }

}