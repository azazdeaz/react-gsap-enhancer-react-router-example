'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

class LoginPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {register: false}
  }

  renderInput(label, name, type) {
    return <div className="input">
       <label for={name}>{label}</label>
       <input type={type} name={name} id={name}/>
       <span className="spin"/>
    </div>
  }

  handleOpenClick = () => {
    this.setState({register: !this.state.register})
  }

  componentDidMount() {
     this.addAnimation(appearAnim)
     this.switchAnim = this.addAnimation(switchAnim)
  }

  componentDidUpdate() {
     this.switchAnim.tweenTo(this.state.register ? 'register' : 'login')
  }

  render() {
    return (
      <DocumentTitle title="Login">
        <div className="materialContainer">
           <div className="box">
              <div className="title">LOGIN</div>
              {this.renderInput('Username', 'name', 'text')}
              {this.renderInput('Password', 'pass', 'password')}
              <div className="button login">
                 <button><span>GO</span> <i className="fa fa-check"></i></button>
              </div>
              <a href="" className="pass-forgot">Forgot your password?</a>
           </div>

           <div className="overbox">
              <div key="switch" className="material-button alt-2" onClick={this.handleOpenClick}>
                 <span className="shape"/>
              </div>
              <div className="register-content">
                <div className="title">REGISTER</div>
                {this.renderInput('Username', 'regname', 'text')}
                {this.renderInput('Password', 'regpass', 'password')}
                {this.renderInput('Repeat Password', 'reregpass', 'password')}
                <div className="button">
                  <button><span>NEXT</span></button>
                </div>
              </div>
           </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default LoginPage;


//Based on http://codepen.io/yusufbkr/pen/RPBQqg/
//Using React and GSAP tohether with react-gsap-enhancer
//Check out here for the API and mode demos:
//https://github.com/azazdeaz/react-gsap-enhancer

function appearAnim({target}) {
   return TweenMax.from(target, 0.53, {
      delay: 1,
      y: -34,
      opacity: 0,
      scale: 0.82,
      ease: Back.easeOut
   })
}

function switchAnim({target}) {
   const shape = target.find({className: 'shape'})
   const box = target.find({className: 'box'})
   const registerContent = target
      .find({className: 'register-content'})
      .findAllInChildren()
   const switchButton = target.find('switch')

   return new TimelineMax()
      .pause()
      .add('login')
      .to(switchButton, 0.3, {
        left: '160px',
        top: '160px',
        ease: Sine.easeInOut,
      }, 'login')
      .add('middle')
      .to(switchButton, 0.4, {
         left: '0px',
         width: '100%',
         height: '100%',
         top: '0',
         borderRadius: '10px',
         ease: Sine.easeInOut,
      })
      .to(box, 0.4, {
         scale: 0.94,
         y: '-=29',
         ease: Sine.easeInOut,
      }, 'middle')
      .staggerFromTo(registerContent, 0.32, {scale: 0.95}, {scale: 1, autoAlpha: 1}, 0.032)
      .to(shape, 0.55, {
         xPercent: 43,
         yPercent: -43,
         rotation: 45,
         ease: Sine.easeInOut,
      }, 'middle')
      .add('register')
}
