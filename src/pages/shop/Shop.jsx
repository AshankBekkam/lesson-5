import React from 'react'

import SHOP_DATA from "./shopdata"
import Previewcollection from '../../components/preview-collection/Previewcollection';

class Shop extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            collections:SHOP_DATA
            
        }

        
    }
    render(){
        const {collections} = this.state;
        return(
            <div className = 'shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) =>
                    (
                        <Previewcollection 
                        key = {id} {...otherCollectionProps}/>

                    )
                )
                }
            </div>
        )
    }

}

export default Shop