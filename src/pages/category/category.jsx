import React from 'react'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'


import './category.scss'

const Category = ({match})=>(
    <div className = 'category'>
        <h2>Category Page</h2>

    </div>


)

const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.colectionId)(state)
})

export default connect(mapStateToProps)(Category);