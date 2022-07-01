import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import shortid from 'shortid';


function Listing(props) {

    let items = [...data];

    items = items.map((item) => {
        if (item.title && item.title.length > 50) {
            item['titleCut'] = item.title.substring(0, 50).concat('...');
        }

        if (item.quantity > 20) {
            item['level'] = 'level-high'
        } else if (item.quantity >= 20) {
            item['level'] = 'level-medium'
        } else if (item.quantity >= 10) {
            item['level'] = 'level-low';
        }
        item['id'] = shortid.generate();
        return item;
    })


    const codeCurrency = {
        USD: '$',
        EUR: '€',
    }


    const currency = (code) => codeCurrency[code] ? codeCurrency[code] : 'GBP';


    return (
        <div className="item-list">
            {items.map((item) => {
                return (
                    item.title && item.MainImage ? 
                    <div className="item" key={item.id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage ? item.MainImage.url_570xN : '#'} alt="#" />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.titleCut || item.title || 'no-name'}</p>
                            <p className="item-price">{currency(item.currency_code).concat(item.price)}</p>
                            <p className={`item-quantity  ${item.level}`}>{item.quantity} left</p>
                        </div>
                    </div> : null
                )
            })}
        </div>

    )
}


Listing.propTypes = {}



export default Listing
