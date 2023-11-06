import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Creation({ creation }) {
    return (
        <Link to={creation.link} className="po_item">
            <img src={creation.img} alt="" />
            <div className="content">
                <p>{creation.description}</p>
                <button to={creation.link}>view project</button>
            </div>
        </Link>
    )
}

Creation.propTypes = {
    creation: PropTypes.object,
};