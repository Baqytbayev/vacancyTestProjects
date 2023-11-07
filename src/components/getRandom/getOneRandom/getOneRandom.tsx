import  {FunctionComponent, ReactElement} from 'react';
// import './getOneRandom/css';
import IRandom from '../../../interface/IRandom';

interface IPropsItem {
    item: IRandom
};
const GetOneRandom: FunctionComponent<IPropsItem> = (props): ReactElement => {
    return (
        <div  className={'info'}>
        <div className={'oneInfo'}>
            <img className={'image'} src={props.item.picture.medium} alt={props.item.picture.medium} placeholder={props.item.picture.medium}/>
            <h2 className={'text'}>{props.item.name.first}</h2>
            <p>{props.item.gender}</p>
        </div>
    </div>

    )
}
export default GetOneRandom;