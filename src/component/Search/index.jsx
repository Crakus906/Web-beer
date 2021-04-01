import React from 'react';

export default function Search(props) {
    const {
        type,
        className,
        onChange,
        onKeyPress
    } = props
    return (
        <input onChange={onChange} className={className} type={type} onKeyPress={onKeyPress} />
    )
}