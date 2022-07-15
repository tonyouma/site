import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  name?: string,
  email?: string,
  messageBody?: string,
  message?: string,
  subject?: string
}

const validate =(data: Data)=>{
    if(!data.name || data.name === ""){
        return { isValid: false, reason: "Name is required" }
    }
    if(!data.email || data.email === ""){
        return { isValid: false, reason: "Email is required" }
    }
    if(!data.messageBody || data.messageBody === ""){
        return { isValid: false, reason: "Message is required" }
    }
    if(!data.subject || data.subject === ""){
        return { isValid: false, reason: "Subject  is required" }
    }
    else return { isValid: true }
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const validater = await validate(body)

  if(validater.isValid){
    const content = `Dear Sales Team, \n A user by the name: ${body.name} and email address: ${body.email} has requested a demo: "${body.messageBody}"`
    try {
        const message = {
          to: 'sales@dataintegrated.co.ke',
          from: 'development@dataintegrated.co.ke',
          subject: body.subject,
          text: content,
          html: content.replace(/rn/g, '<br />'),
        }
        mail.send(message)
            .then(() => {
                res.status(200).json({ message: 'Demo requested successfully. Our agent will get back to you on email: '+body.email });
            })
            .catch((err: any)=>{
                console.log("Error: ", err)
                res.status(401).json({ message: "Unauthorized Access"}) 
            })
    } catch (error: any) {
        res.status(500).json({ message: "Server error."})     
    }
    return
  }
  res.status(401).json({ message: validater.reason })
}
