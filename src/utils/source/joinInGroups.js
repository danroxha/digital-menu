export default function joinInGroups(data){
      
  let group = new Object()
  
  for(var item of data){
    if(!Object.prototype.hasOwnProperty.call(group, item?.group)){
      group[item.group] = [item]
      continue
    }
    group[item.group].push(item)
  }

  return group
}