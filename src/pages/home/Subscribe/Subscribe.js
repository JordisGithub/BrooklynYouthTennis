import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <div className="subscribe">

      <h1>Subscribe to stay up to date with all news and events.</h1>
      <input className="email_input" type="text" placeholder="Enter your email address" name="mail" required></input>
      <input className="subscribe_button" type="submit" value="Subscribe"></input>
    </div>
  )
}
