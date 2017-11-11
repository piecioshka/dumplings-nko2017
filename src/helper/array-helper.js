export function uniqueElements(list) {
  return list.reduce((list, item) => {
    if (!list.includes(item))
      list.push(item);
    return list;
  }, [])
}
