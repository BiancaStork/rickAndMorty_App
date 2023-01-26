import  Card  from '../card/Card.jsx';
import s from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return <div className={s.div}>
       {characters.map(character=> 
         < Card key={character.name}
           // id={char.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            //onClose={props.onClose}---> la linea de abajo se puede escribir asi tambien
            onClose={() => onClose(character.id) }
         />)}
   </div>;
}
