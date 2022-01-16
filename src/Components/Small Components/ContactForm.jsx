import React from 'react'

const ContactForm = ( { 
        handleSubmit, 
        handleInputChanges, 
        formValues, 
        formTitle 
    } 
    ) => {

    const { name, phone, email, address, relationship } = formValues;

    return (
        <form className='flex flex-col mt-20 w-3/5'>
        <h1 className='text-center text font-bold text-4xl font-mukta'> { formTitle } </h1>
      <div>
          <input 
              type="text"
              autoComplete='off'
              placeholder='Contact Name'
              name="name"
              onChange = { handleInputChanges }
              value = { name }
              required
              className='outline-none bg-input-color w-full pl-2 py-3 mt-2 font-mukta text-xl'
          />
      </div>
      <div>
          <input 
              type="number"
              autoComplete='off'
              placeholder='Phone Number'
              name="phone"
              onChange = { handleInputChanges }
              value = { phone }
              required
              className='outline-none bg-input-color w-full pl-2 py-3 mt-2 font-mukta text-xl'
          />
      </div>
      <div>
          <input 
              type="email"
              autoComplete='off'
              placeholder='Email'
              value = { email }
              onChange = { handleInputChanges }
              name = "email"
              className='outline-none bg-input-color w-full pl-2 py-3 mt-2 font-mukta text-xl'
          />
      </div>
      <div>
          <input 
              type="text"
              autoComplete='off'
              placeholder='Contact Address'
              name = "address" 
              onChange = { handleInputChanges }
              value = { address }
              className='outline-none bg-input-color w-full pl-2 py-3 mt-2 font-mukta text-xl'
          />
      </div>
      <div>
          <select 
              name='relationship'
              onChange = { handleInputChanges }
              value= { relationship }
              className='bg-input-color w-full pl-2 py-3 mt-2 font-mukta  text-xl'
            >
              <option value="">Relationship</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Friend">Friend</option>
              <option value="Relative">Relative</option>
              <option value="Partner">Partner</option>
              <option value="Manager">Manager</option>
              <option value="Assistant">Assistant</option>
          </select>
      </div>
      <button 
          type='submit'
          className='bg-green rounded h-10 text-white text-xl mt-2 font-mukta'
          onClick={ handleSubmit }
      >
          Save Changes
          </button>
  </form>
    )
}

export default ContactForm