var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, object, {[key]:value})
}