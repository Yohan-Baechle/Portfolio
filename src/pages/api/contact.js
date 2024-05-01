import nodemailer from 'nodemailer'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    // Configurer le transporteur Nodemailer avec vos paramètres SMTP
    const transporter = nodemailer.createTransport({
      host: 'node159-eu.n0c.com',
      port: 465, // Utilisez 587 si vous préférez utiliser StartTLS
      secure: true, // true pour 465, false pour les autres ports
      auth: {
        user: 'contact@yohanbaechle.dev',
        pass: 'pj)Xja^B)@47@2p/@7', // Remplacez par votre mot de passe réel
      },
    })

    try {
      // Envoyer l'email
      await transporter.sendMail({
        from: '"Yohan Baechlé" <contact@yohanbaechle.dev>', // Expéditeur
        to: 'contact@yohanbaechle.dev', // Vous pouvez également ajouter d'autres destinataires ici
        subject: 'Nouveau message du formulaire de contact', // Sujet de l'email
        text: `De : ${name} (${email})\nMessage : ${message}`, // Corps du message en texte brut
        html: `<p>De : ${name} (${email})</p><p>Message : ${message}</p>`, // Corps du message en HTML
      })

      res.status(200).json({ message: 'Email envoyé avec succès.' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." })
    }
  } else {
    // Gérer les requêtes non POST
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
