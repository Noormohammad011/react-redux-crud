import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../actions/contactActions'
const Contacts = ({ contact, selectAll }) => {
  const { id, name, phone, email } = contact
  const dispatch = useDispatch()
  const DeleteContact = (e) => {
    e.preventDefault()
    dispatch(deleteContact(id))
  }
  return (
    <tr>
      <th scope='row'>
        <div className='custom-control custom-checkbox'>
          <input
            checked={selectAll}
            type='checkbox'
            className='custom-control-input'
          />
          <label
            className='custom-control-label'
            htmlFor='custom-control-input'
          ></label>
        </div>
      </th>
      <td>
        <Avatar name={name} size='45' round={true} />
        <span className='m-3'>{name}</span>
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='d-flex'>
        <Link to={`/contacts/add/${id}`} className='mx-2 my-3'>
          <i className='fa fa-edit' aria-hidden='true'></i>
        </Link>
        <Link className='mx-2 my-3'>
          <i
            className='fa fa-trash'
            aria-hidden='true'
            onClick={DeleteContact}
          ></i>
        </Link>
      </td>
    </tr>
  )
}

export default Contacts
