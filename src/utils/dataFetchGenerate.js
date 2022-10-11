import heroObj from "./heroObj";

export function dataFetchGenerate(obj = {}) {
  if (!Object.keys(obj).length === 0) {
    console.log('Нет данных');
    return
  }
  return obj.data.results.map((hero) => heroObj(hero))
}