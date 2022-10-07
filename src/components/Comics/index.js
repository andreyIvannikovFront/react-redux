import './index.scss'
const Comics = ({ comics }) => {
  return (
    <ul className="comics">
      {
        comics.map((item) =>
          <li className="comics__item">
            <h4>
              {item.name}
            </h4>
            <a href={item.resourceURI}>Перейти</a>
          </li>
        )
      }
    </ul>
  )
}

export default Comics