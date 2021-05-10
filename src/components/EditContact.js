import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from '../actions/contactActions'
import { useParams } from 'react-router-dom'

const EditContact = ({ match, history }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  let { id } = useParams()
  const contact = useSelector((state) => state.contact.contact)

  useEffect(() => {
    if (contact != null) {
      setName(contact.name)
      setPhone(contact.phone)
      setEmail(contact.email)
    }
    dispatch(getContact(id))
  }, [dispatch, id, contact])

  const EdithadleSubmit = (e) => {
    e.preventDefault()
    const update_contact = Object.assign(contact, { name, phone, email })
    dispatch(updateContact(update_contact))
    history.push('/')
  }

  return (
    <div className='card'>
      <div className='card-header'>Edit Contact</div>
      <div className='card-body'>
        <form action='' onSubmit={EdithadleSubmit}>
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
          <button type='submit' className='btn btn-danger'>
            Edit Contact
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditContact
