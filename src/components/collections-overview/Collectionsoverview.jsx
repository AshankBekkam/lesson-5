import React from "react";
import {selectShopSections,selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import { connect } from "react-redux";
import Previewcollection from "../preview-collection/Previewcollection";

import "./Collectionsoverview.scss";

const Collectionsoverview = ({ sections }) => {

  console.log(sections)
  
  
  return(
  <div className="collections-overview">
  {
    sections.map(({ id, ...otherCollectionProps }) => (
    <Previewcollection key={id} {...otherCollectionProps} />
  ))
}
   
  </div>
)};


const mapStateToProps = (state)=>({
    sections:selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(Collectionsoverview)
