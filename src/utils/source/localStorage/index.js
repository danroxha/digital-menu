import Tools  from './utils/index.js'

export default class LocalStorage {
  
  static async findAll(setting){

    if(setting.localStorage.getItem(setting.storage))
      return Tools.JSONToMap(setting.localStorage.getItem(setting.storage))
    
    return new Map()
  
  }

  static async updateAll(setting, data){
    setting.localStorage.setItem(setting.storage, Tools.MapToJSON(data))
  }

  static async removeAll(setting) {
    setting.localStorage.removeItem(setting.storage)
  }
}