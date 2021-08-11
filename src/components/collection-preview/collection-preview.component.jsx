import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({title, history, match, routeName, items}) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4 )
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default withRouter(CollectionPreview);