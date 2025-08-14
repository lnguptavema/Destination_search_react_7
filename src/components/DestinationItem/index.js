import './index.css'

const ListItem = props => {
  const {eachcard, key} = props
  const {id, name, imgUrl} = eachcard
  return (
    <li className="eachlistitem" key={id}>
      <img className="imga" src={imgUrl} alt={name} />
      <p className="listhead">{name}</p>
    </li>
  )
}

export default ListItem
