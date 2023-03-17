import React from 'react'
import BA from './style.module.css'
import IndexImage from './indexImage.js'
const IndexBA = () => {
  return (
    <span>
     <span><IndexImage/></span>
      <span className={BA.spanX}>
      <p className={BA.container}>Business Account</p>
      <h4>Vedprakash Verma</h4>
      <div className={BA.title}>
      Password
      </div>
      <div>
      <input className={BA.passbox} type="password"  placeholder='password'/>
      </div>
      <div className={BA.button22}>
      <div className={BA.buttonToggle}>
      <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked></input>
      <label class="form-check-label" for="flexSwitchCheckChecked">Stay signed in</label>
    </div>
    <div>
    <input className={BA.buttonC} type="button" value="Countinue" />
    </div>
    <div/>
      </div>
      </div>
    <div className={BA.reset}><a href='#'>Reset password</a>
    </div>
      </span>
      </span>
  )
}

export default IndexBA
