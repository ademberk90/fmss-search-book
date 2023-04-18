import React from 'react'

const BookModal = ({book, setShowModal}) => {
  return (
    <div class="modal" id="modal">
    <h2>Modal Window</h2>
    <div class="content">{"this.props.children"}</div>
    <div class="actions">
      <button class="toggle-button" onClick={() => setShowModal(false)}>
        close
      </button>
    </div>
  </div>
  )
}

export default BookModal