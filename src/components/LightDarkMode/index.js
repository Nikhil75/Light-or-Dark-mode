import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    changeToDarkMode: false,
    darkBackground: false,
  }

  onClickChangeMode = () => {
    this.setState(prevState => ({
      changeToDarkMode: !prevState.changeToDarkMode,
    }))
    this.setState(blackState => ({darkBackground: !blackState.darkBackground}))
  }

  darkMode = () => {
    const {changeToDarkMode} = this.state
    return changeToDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  darkBg = () => {
    const {darkBackground} = this.state
    return darkBackground ? 'dark' : 'box-container'
  }

  render() {
    const buttonText = this.darkMode()
    const darkColor = this.darkBg()
    return (
      <div className="lightDarkmodeContainer">
        <div className={darkColor}>
          <div className="text-content">
            <h1 className="text">Click To Change Mode </h1>
            <button className="modes" onClick={this.onClickChangeMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
