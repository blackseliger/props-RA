import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid';
import Star from './Star';

function Stars({count}) {
    if (count < 1 || count > 5 || isNaN(count)) {
        return null;
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({id: shortid.generate(), count: i});
    }


  return (
    <ul className="card-body-stars u-clearfix">
        {stars.map((star) => {
           return <Star key={star.id}/>
        })}
    </ul>
  )
}

Stars.propTypes = {
    count: PropTypes.number,
}

export default Stars
