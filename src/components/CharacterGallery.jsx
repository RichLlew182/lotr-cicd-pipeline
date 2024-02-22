import Character from './Character'
import characterData from '../data/characterData.json'

function CharacterGallery() {

  return (
    <>
     
      <div>
          {

characterData.map((char, i) => (
  <Character
    key={i}
    {...char}
    />
            ))
          }
        </div>
    </>
  )
}

export default CharacterGallery