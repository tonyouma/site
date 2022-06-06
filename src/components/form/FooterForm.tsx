import React from 'react'

function FooterForm() {
  const [email, setEmail] = React.useState('');

  const requestDemo = () => {
    console.log("Email: ", email)
  }

  return (

    <div className='min-h-[300px] flex flex-col justify-center items-center gap-y-4 p-5'>
      <h2>Become a partner in growth. Request a demo</h2>
      <p className='md:text-center md:w-1/3'>Seeing is believing. Reach out to us if you are interested to see our products in action. No obligations.</p>
      <div className="mt-3 md:mt-6">
        <form>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter you email address'
            className='min-w-[250px] md:min-w-[300px]  h-[50px] p-3 rounded-tl-lg rounded-bl-lg text-textPrimary outline-none bg-[#0D3648]'
            name="email" />
          <button
            onClick={requestDemo}
            className='md:w-[118px] min-w-[96px] h-[50px] p-3 rounded-tr-lg rounded-br-lg bg-[#EE3D4E] text-white' >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default FooterForm

