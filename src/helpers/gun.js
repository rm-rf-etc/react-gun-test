import { getData } from 'react-gun';

const gun = getData('@pp');

export const asList = (thing) => {
  if (!Array.isArray(thing)) {
    throw new Error(`\`asList\` takes only array type as input. Received ${typeof thing} instead.`);
  }
  return Object.assign({}, thing);
}

export const fromList = Object.values;

export const dbAppend = (parentId, childId) => {
  const parent = fromPath(parentId);
  parent.open((data) => {
    if (fromList(data.order).length) {
      const newList = asList(fromList(data.order).concat(childId));
      parent.get('items').put(newList);
    }
  })
};

export const fromPath = (pathStr) => {
  if (!pathStr.includes('.')) {
    return gun.get(pathStr);
  }
  const [parent, ...keys] = pathStr.split('.');

  return keys.reduce((curr, next) => curr.get(next), gun.get(parent));
};

Object.entries({
  dbAppend,
  fromPath,
  fromList,
  asList,
}).forEach(([key, value]) => {
  window[key] = value;
});
