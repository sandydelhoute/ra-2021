import {ButtonRegular} from './buttons/ButtonRegular';
export const Paragraphe = props =>
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Magni nostrum ut qui delectus, doloremque voluptatem reprehenderit aliquam vero, 
     autem numquam hic nihil ex praesentium iste recusandae architecto quo laudantium quas! 
     <br />
   <ButtonRegular onClickHandler={props.onClickHandler} text={props.textButton} />
   </div>