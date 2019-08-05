import gun from '../data';

export const asList = (thing: any[]) => {
  if (!Array.isArray(thing)) {
    throw new Error(`\`asList\` takes only array type as input. Received ${typeof thing} instead.`);
  }
  return Object.assign({}, thing);
}

export const fromList = Object.values;

export const dbAppend = (parentId: string, childId: string) => {
  const parent = fromPath(parentId);
  parent.open((data: any) => {
    if (fromList(data.order).length) {
      const newList = asList(fromList(data.order).concat(childId));
      parent.get('items').put(newList);
    }
  })
};

export const fromPath = (pathStr: string) => {
  if (!pathStr.includes('.')) {
    return (gun.get as any)(pathStr);
  }
  const [parent, ...keys] = pathStr.split('.');
  return keys.reduce((curr, next) => curr.get(next), (gun.get as any)(parent));
};

(window as any).dbAppend = dbAppend;
(window as any).fromPath = fromPath;
