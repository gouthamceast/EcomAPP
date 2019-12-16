import React from 'react'
import './shop-page.styles.scss'
import SHOP_DATA from './shopPage.data'
import ContentPreview from '../../../components/contentsPreview/contents.component'


class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {collections : SHOP_DATA}
    }

    render(){
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...collectionitems}) => (
                        <ContentPreview key = {id} {...collectionitems} />
                    ))
                }
            </div>
        )
    }   
}


export default ShopPage