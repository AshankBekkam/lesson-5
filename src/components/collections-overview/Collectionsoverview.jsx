import React from "react";
import {selectShopSections} from '../../redux/shop/shop.selector'
import { connect } from "react-redux";
import Previewcollection from "../preview-collection/Previewcollection";

import "./Collectionsoverview.scss";

const Collectionsoverview = ({ sections }) => (
  <div className="collections-overview">
    {sections.map(({ id, ...otherCollectionProps }) => (
      <Previewcollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);


const mapStateToProps = (state)=>({
    sections:selectShopSections(state)
})

export default connect(mapStateToProps)(Collectionsoverview)
