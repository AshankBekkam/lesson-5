import React from 'react'

import './Previewcollection.scss'
import Collectionitem from "../collection-item/Collectionitem"

const Previewcollection = ({title,items})=>(
    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
        {
            items
            .filter((item,index)=>index<4)
            .map(({id,...otherItemProps})=>
            (
                <Collectionitem key = {id} {...otherItemProps}/>

            ))
        }

        </div>
    </div>
)

export default Previewcollection