import React from 'react'
import './contents.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const ContentPreview = ({title,items}) =>(
    <div className = 'collection-preview'>
         <h1 className = "title"> {title.toUpperCase()}</h1>
         <div className = 'preview'>
            {items.filter((items,id) => (id<4)).map(({id,...item}) =>(
                <CollectionItem key = {item.id} {...item}/>
            ))}
         </div>
    </div>
)

export default ContentPreview                     