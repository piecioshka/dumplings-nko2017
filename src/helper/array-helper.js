export function uniqueElements(list, testFunction) {
  return list.reduce((list, item) => {

    const is = list.some((element) => {
      return testFunction(element) === testFunction(item);
    });

    if (!is) {
      list.push(item);
    }

    return list;
  }, [])
}
