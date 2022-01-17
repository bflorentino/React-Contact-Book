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
        <form className='flex flex-col mt-20 w-4/5 sm:w-3/5'>
        <h1 className='text-center text font-bold text-3xl sm:text-4xl font-mukta dark:text-white dark:font-normal mt-12'> { formTitle } </h1>
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
              border-b border-gray dark:text-white'
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
              border-b border-gray dark:text-white'
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
              border-b border-gray dark:text-white'
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
              border-b border-gray dark:text-white'
          />
      </div>
      <div>
          <select 
              name='relationship'
              onChange = { handleInputChanges }
              value= { relationship }
              className='w-full pl-2 py-3 mt-2 font-mukta text-xl bg-transparent 
              border-b border-gray dark:text-white'
            >
              <option value="">Relationship</option>
              <option value="Mother" className='dark:text-black'>Mother</option>
              <option value="Father" className='dark:text-black' >Father</option>
              <option value="Brother" className='dark:text-black'>Brother</option>
              <option value="Sister" className='dark:text-black'>Sister</option>
              <option value="Spouse" className='dark:text-black'>Spouse</option>
              <option value="Child" className='dark:text-black'>Child</option>
              <option value="Friend" className='dark:text-black'>Friend</option>
              <option value="Relative" className='dark:text-black'>Relative</option>
              <option value="Partner" className='dark:text-black'>Partner</option>
              <option value="Manager" className='dark:text-black'>Manager</option>
              <option value="Assistant" className='dark:text-black'>Assistant</option>
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