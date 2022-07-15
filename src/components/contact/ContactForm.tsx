import React from "react";
import { Message } from '../../models/Message';
import { toastMessage } from './../../utils/toastMessage';


interface Props {
  cancel?: boolean,
  setShowModal?: any,
  data?: {
    message?: string,
    subject?: string
  }
}

const Contactform = (props: Props) => {

  const defaultMessage = {
    name: "",
    email: "",
    messageBody: "",
    subject: ""
  }

  const [message, setMessage] = React.useState<Message>(defaultMessage)
  const [sending, setSending] = React.useState<boolean>(false)

  React.useEffect(()=>{
    if(props.cancel&&props.data){
      setMessage((prev)=>({
        ...prev,
        messageBody: props.data?.message,
        subject: props.data?.subject
      }))
    }
  }, [])

  const handleInput = (e: any)=>{
    const { name, value } = e.target
    setMessage(prev=>({
      ...prev,
      [name]: value
    }))

  }

  const validate = ()=>{
    if(message.name === ""){
      return false
    }
    if(message.email === ""){
      return false
    }
    if(message.messageBody === ""){
      return false
    }
    if(message.subject === ""){
      return false
    }
    return true
  }

  const handleSubmit = async( e: any )=>{
    e.preventDefault();
    const isValid = await validate()

    if(!isValid){
      return toastMessage(
        "error",
        "All fields MUST be provided."
      )
    }

    setSending(true)
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(message)
    })
    .then(async(res: any)=>{
      setSending(false)
      let response = await res.json()
      if(res.status === 200){
        toastMessage("success", response.message)
        return
      }
      if(!response){
        return toastMessage('error', res.statusText?.toString())
      }

      toastMessage('error', response.message)
    })
  }

  return (
    <div className="p-5 mt-2 rounded-md border shadow-lg w-[480px] md:absolute md:z-10 bg-white">
      <div className="flex flex-col my-2 ">
        <h4 className="font">Reach out to Us</h4>
      </div>
      <div className="flex flex-col ">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                name="name"
                onChange={handleInput}
                value={message.name}
                required
                placeholder="Your Name"
              />

              {/* <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                name="email"
                onChange={handleInput}
                required
                value={message.email}
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-subject"
              >
                Subject
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="subject"
                onChange={handleInput}
                value={message.subject}
                required
                placeholder="Subject"
              />
              {/* <p className="text-xs italic text-gray-600">
                Make it as long and as crazy as you`d like
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-content"
              >
                How can we help?
              </label>
              <textarea
                id="grid-content"
                required
                name="messageBody"
                onChange={handleInput}
                value={message.messageBody}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell us more about your project"
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center px-3 mb-4 -mx-3 ">
            <div className="w-full mb-2">
              <p className="text-xs">
                By proceeding, I agree to DIL&apos;s <a href="/terms" className="underline cursor-pointer "> Terms of Use</a> and acknowledge
                that I have read the <span className="underline cursor-pointer">Privacy Policy</span> .
              </p>
            </div>
            <div className="w-full md:mb-0">
              <p className="text-xs">
                I also agree that DIL or its representatives may contact me by
                email, phone, or SMS (including by automated means) at the email
                address or number I provide, including for marketing purposes.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 md:mb-0 flex gap-3 justify-end">
              {
                props.cancel&&
                <button
                  onClick={(e)=>(e.preventDefault(), props.setShowModal(false), setMessage(defaultMessage), setSending(false))}
                  className="px-4 py-2 font-bold  opacity-70 bg-primary rounded hover:opacity-100 focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              }
              <button
                className="px-4 py-2 font-bold flex items-center justify-center text-white bg-secondary rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={sending}
                onClick={handleSubmit}
              >
                {
                  sending ? 
                  (
                    <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                   )
                  : 'Submit'
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
