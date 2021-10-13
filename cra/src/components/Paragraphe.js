import { Button } from './buttons';
import propsType from 'prop-types';

//export const Paragraphe = ({text='defaultText',onClickHandler}) =>
export const Paragraphe = ({text,onClickHandler}) =>
{
    //destructuration
    //const {text,onClickHandler} = props;
return <p>
    Edit <code>src/App.js</code> and save to reload.
    <br />
    <Button onClickHandler={onClickHandler}>
        ❤️ {text}
    </Button>

</p>;
}
Paragraphe.defaultProps = {
    text:'defaultText'
}
Paragraphe.propsType = {
    text:propsType.string.isRequired
}