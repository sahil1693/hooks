import React from 'react'

export default React.memo(function Button({handleClick,children}){
console.log('rendering button  - ',children)
return (
<button onClick={handleClick}>{children}</button>
)

})
