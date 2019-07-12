var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  delete object[key];
  return object
}