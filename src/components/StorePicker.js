import React from "react"


class StorePicker extends React.Component {
render(){
    return (
      <>
      <form className="store-selector">
        <h2>Please enter a store name</h2>
        <input type="text" required placeholder="Please enter a store name"></input>
        <button type='submit'>Visit Store</button>
      </form>
      </>
    )
  }
}


export default StorePicker;