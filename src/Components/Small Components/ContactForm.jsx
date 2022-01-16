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
              className='outline-none w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray'
          />
      </div>
      <div>
          <input 
              type="text"
              autoComplete='off'
              placeholder='Phone'
              name="phone"
              onChange = { handleInputChanges }
              value = { phone }
              required
              className='outline-none w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray'
          />
      </div>
      <div>
          <input 
              type="text"
              autoComplete='off'
              placeholder='Email'
              value = { email }
              onChange = { handleInputChanges }
              name = "email"
              className='outline-none w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray'
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
              className='outline-none w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray'
          />
      </div>
      <div>
          <select 
              name='relationship'
              onChange = { handleInputChanges }
              value= { relationship }
              className='w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray'
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
          className='bg-green rounded h-10 text-white text-xl mt-8 font-mukta'
          onClick={ handleSubmit }
      >
          Save Changes
          </button>
  </form>
    )
}

export default ContactForm