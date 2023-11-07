import React , {useEffect } from 'react'
import './getRandom.css'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { IRandomState } from '../../interface/IRandom';
import { AppDispatch, AppState } from '../../store/store';
import { getRandom } from '../../store/randomSlice';
import GetOneRandom from './getOneRandom/getOneRandom';


const GetRandom = () => {
    const random = useSelector((state: AppState) => state.random.random, shallowEqual);
    const dispatch: AppDispatch = useDispatch()
    const random2 = random
    useEffect(() => {
        dispatch(getRandom())
    }, [dispatch ])
    console.log(random2, 989898)
    const refresh = () => {
        dispatch(getRandom())
    }
    return (
        <div className='green'>
            <button onClick={refresh}>Refresh</button>
            {random.length ? 
                random.map(p => {
                    return <GetOneRandom 
                        // key={p.id}
                        item={p}
                    />
                })
            : <h1>No products</h1>}

        </div>
    )
}

export default GetRandom