const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req: any, res: any) {
  try {
    await sgMail.send({
      to: 'timur@fold.eu',
      from: 'ursa@fold.eu',
      subject: 'Email from Ursa',
      html: `
      <div class="container" style="background-color: #f2f2f2;width: 600px;margin-left: auto;margin-right: auto;padding: 1rem 2rem;box-sizing: border-box;">
      <table style="width: 100%">
        <tr style="height: 70px">
          <td style="color: #262f5e;font-family: sans-serif;">
            <img src="https://calculator.ursa.be/images/MTQ-2.png" alt="">
          </td>

          <td style="text-align: right;color: #262f5e;font-family: sans-serif;">
            <a href="http://ursa.be" target="_blank" rel="noopener noreferrer" style="text-decoration: none;color: #262f5e;font-family: sans-serif;font-size: 12px;">TERUG NAAR URSA WEBSITE
          </a></td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">Naam:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.naam}</td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">Bedrijf:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.bedrijf}</td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">Email:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.email}</td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">GSM:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.gsm}</td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">Profile:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.profile}</td>
        </tr>
        <tr style="height: 30px">
          <td style="color: #262f5e;font-family: sans-serif;font-weight: bold;">Opmerkingen:</td>
          <td style="color: #262f5e;font-family: sans-serif;">${req.body.opmerkingen}</td>
        </tr>
      </table>
    </div>
        `
    })
  } catch (error: any) {
    return res.status(error.code || 500).json({ error: error.message })
  }

  res.status(200).json({ ok: true })
}
