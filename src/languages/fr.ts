const fr = {
  header: {
    cta: 'RETOURNER AU SITE URSA'
  },
  footer:
    'Calculation selon la réglementation PEB. (document de reference de transmission). Pour des calculations détaillées nous vous advisons de contacter URSA Benelux.',
  createProject: {
    title: 'Calculation de la valeur U',
    types: [{ title: 'Façade' }, { title: 'Sol' }, { title: 'Toit' }],
    about: 'Sur le projet:',
    projectName: 'Nom du projet',
    date: 'Date',
    next: 'Prochain',
    nameRequired: 'Nom du projet est obligatoire',
    dateRequired: 'Date est obligatoire'
  },
  projectInfo: {
    uValue: 'Valeur U',
    totalThickness: 'Épaisseur totale de la construction',
    error: 'Veuillez remplir tous les champs'
  },
  gevel: {
    step1: {
      title: 'Couche extérieur',
      finishing: 'Finition couche extérieur',
      material: 'Matériel',
      otherMaterial: 'Choisir un matériel pas dans la liste',
      otherMaterialClicked: 'Not Translated',
      radioButtons: {
        title: 'Mortier de ciment est utilisé',
        btn1: 'Oui',
        btn2: 'Non'
      },
      airLayer: "Couche d'air",
      airLayerOptions: [
        'Pas ventilé',
        'Moyennement ventilé',
        'Fortemment ventilé'
      ]
    },
    step2: {
      title: 'Isolation'
    },
    step3: {
      title: "2ième couche d'isolation"
    },
    step4: {
      title: 'Couche intérieur'
    },
    step5: {
      title: 'Finition couche intérieur'
    },
    summary: 'Récapitulatif',
    project: 'Projet'
  },
  modal: {
    title: 'Envoyer PDF par e-mail ',
    fields: {
      name: 'Nom',
      company: 'Entreprise',
      email: 'E-mail',
      gsm: 'Téléphone',
      comments: 'Remarques',
      privacy:
        "En cochant, vous êtes d'accord pour que nous gardons votre données personelles en sécurité. ",
      privacyLink: 'Lisez notre politique de confidentialité.',
      newsletter:
        "J'aimerais rester à la hauteur de projets et nouvelles concernant Ursa Benelux.",
      btn: 'Envoyer'
    }
  },
  common: {
    required: 'Cette étappe est obligatoire',
    dropdown: {
      material: 'Matériel',
      thickness: 'Épaisseur en cm',
      selectThickness: 'Choisir épaisseur',
      selectMaterial: 'Choisir matériel'
    },
    next: 'Prochain',
    previous: 'Précédent',
    sendEmail: 'ENVOYER PDF PAR E-MAIL',
    wood: 'La couche contient une fraction de bois?',
    fixing: {
      title: 'Quelle ancrage utilisez-vous? ',
      dropdown1: {
        title: 'Matériel de fixation'
      },
      inputPlaceholder: 'Remplis un nombre: 2,15',
      dropdown2: {
        title: 'Nombre par m2',
        default: 'Choisir nombre'
      },
      dropdown3: {
        title: 'Diamètre en mm',
        default: 'Choisir diamètre'
      }
    },
    form: {
      name: 'Nom est un champ obligatoire',
      email: 'E-mail est un champ obligatoire',
      company: 'Entreprise est un champ obligatoire',
      phone: 'Téléphone est un champ obligatoire',
      comment: 'Remarques est un champ obligatoire'
    },
    reset: 'EFFACER LA CALCULATION',
    none: 'Pas',
    beta: "Il s'agit d'une version de test bêta. ",
    betaAfter: ' pour signaler un problème.',
    stone: 'Pierre',
    disabled: 'Bientôt disponible',
    sendReport: 'Signaler un problème',
    summaryDropdown: [
      'Installateur/constructeur',
      'Architecte',
      'Gouvernement/Secteur éducatif/Municipalité',
      `Promoteur d'immobilier`,
      `Commerce des matériaux de construction/commerce de bois/commerce d'isolation`,
      'Autres'
    ]
  }
}

export default fr
