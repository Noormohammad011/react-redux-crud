import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../actions/contactActions'
import shortid from 'shortid'
const AddContact = ({ history }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const hadleSubmit = (e) => {
    e.preventDefault()
    dispatch(addContact({ id: shortid.generate(), name, phone, email }))
    history.push('/')
  }

  return (
    <div className='card'>
      <div className='card-header'>Contact Create</div>
      <div className='card-body'>
        <form action='' onSubmit={hadleSubmit}>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='input-group mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddContact
