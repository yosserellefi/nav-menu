import React from 'react'

function Navmennu(props) {
    return (
       <nav className="navmen">
       { props.navBar.map(el => <div className="dropdown"> <a className="dropdown-item">{ el.title}</a>
       {
           !el.tab ? null : el.tab.map(x=>
                                            <div className="dropdown-content">
                                                <a>{x}</a>
                                            </div>
            )
       }

       </div>)
    }
       </nav>
    )
}

export default Navmennu ;