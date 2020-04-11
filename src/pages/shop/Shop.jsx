import React from 'react'
import {Route} from 'react-router-dom'
import Category from '../category/category'

import Collectionsoverview from '../../components/collections-overview/Collectionsoverview'

const Shop =({match})=>{
    
    
        
        return(
            <div className = 'shop-page'>
                <Route exact path = {`${match.path}`} component = {Collectionsoverview}/>
                <Route path = {`${match.path}/:categoryId`} component = {Category}/>
               
            </div>
        )
    }


export default Shop
