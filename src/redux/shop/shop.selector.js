import {createSelector} from 'reselect'


const selectShop = state=>state.shop;


export const selectShopSections = createSelector(

    [selectShop],
    shop=>shop.sections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopSections],
    sections=>Object.keys(sections).map(key=>sections[key])
    


)

export const selectCollection = collectionUrlParam=>
    createSelector(
        [selectShopSections],
        sections=>sections[collectionUrlParam]
    )