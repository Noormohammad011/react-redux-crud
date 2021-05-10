import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Contacts from './Contacts/Contacts'
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from '../actions/contactActions'
const Contact = () => {
  const dispatch = useDispatch()
  const contact = useSelector((state) => state.contact)
  const [setAll, setSetAll] = useState(false)
  const { contacts, selectedContacts } = contact
 
  useEffect(() => {
    if (setAll) {
       dispatch(selectAllContact(contacts.map((c) => c.id)))
    } else if (!setAll) {
       dispatch(clearAllContact())
    }
    
  }, [dispatch,setAll])

  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button type='button' className='btn btn-danger' onClick={()=>{dispatch(deleteAllContact())}}>Delete All</button>
      ) : null}
      <table className='table shadow '>
        <thead>
          <tr>
            <th>
              <div className='custom-control custom-checkbox'>
                <input
                  id='selectAll'
                  type='checkbox'
                  className='custom-control-input'
                  value={setAll}
                  onClick={() => {
                    setSetAll(!setAll)
                  }}
                />
                <label
                  className='custom-control-label'
                  htmlFor='selectAll'
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contacts contact={contact} key={contact.id} selectAll={setAll} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Contact
