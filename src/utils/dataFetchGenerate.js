export function dataFetchGenerate(obj = {}) {
  console.log(213123, obj)
  if (!Object.keys(obj).length === 0) {
    console.log('Нет данных');
    return
  }
  return obj.data.results.map((hero) => {
    return {
      name: hero.name,
      id: hero.id,
      description: hero.description,
      img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    }
  })
}