import React , {useEffect } from 'react'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { IRandomState } from '../../interface/IRandom';
import { AppDispatch } from '../../store/store';
import { getRandom } from '../../store/randomSlice';


const GetRandom = () => {
    const random = useSelector((state: IRandomState) => state.random, shallowEqual);
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandom())
    }, [dispatch ])
    console.log(random, 989898)
    return (
        <div>
            Hello
        </div>
    )
}

export default GetRandom