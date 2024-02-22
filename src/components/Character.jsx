

function Character(props) {

  return (
    <>
      <img href={props.wikiUrl} src={props.imgUrl}></img>
      <h2>{props.name}</h2>
      <ul>
      <li>Date of Birth: {props.birth}</li>
      <li>Date of Death: {props.death}</li>
      <li>Race: {props.race}</li>
      <li>Realm: {props.realm}</li>
      <li>Spouse: {props.spouse}</li>
      {/* <li>Gender: {props.gender}</li>
      <li>Height: {props.height}</li>
      <li>Hair: {props.hair}</li> */}
        </ul>
    </>
  )
}

export default Character