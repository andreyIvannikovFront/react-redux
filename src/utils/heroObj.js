export default function heroObj(hero) {
  return {
    name: hero.name,
    id: hero.id,
    description: hero.description,
    img: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    comics: hero.comics
  }
}