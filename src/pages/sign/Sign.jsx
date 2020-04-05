import React from 'react'

import './Sign.scss'
import Signin from  '../../components/sign-in/Signin'
import Signup from '../../components/sign-up/Signup'

const Sign=()=>(

    <div className = 'sign-in-and-sign-up'>
        <Signin/>
        <Signup/>
    </div>
)

export default Sign