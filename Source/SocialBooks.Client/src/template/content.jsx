import React from 'react'

export default props => (
    <div>
        <section className='page-header'>
            <h1>{props.titulo} <small>{props.subtitulo}</small></h1>
        </section>
        <section >
            {props.children}
        </section>
    </div>
)