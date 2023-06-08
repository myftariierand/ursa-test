const nl = {
  header: {
    cta: 'TERUG NAAR URSA WEBSITE'
  },
  footer:
    'Berekening volgens EPB regelgeving (Transmissiereferentiedocument). Voor gedetailleerde berekeningen adviseren we u contact op te nemen met URSA Benelux.',
  createProject: {
    title: 'U-waarde berekening',
    types: [{ title: 'Gevel' }, { title: 'Vloer' }, { title: 'Dak' }],
    about: 'Over het project:',
    projectName: 'Projectnaam',
    date: 'Datum',
    next: 'Volgende',
    nameRequired: 'Projectnaam is verplicht',
    dateRequired: 'Datum is verplicht'
  },
  projectInfo: {
    uValue: 'U-waarde',
    totalThickness: 'Totale constructie dikte',
    error: 'Gelieve alle velden in te vullen'
  },
  gevel: {
    step1: {
      title: 'Buitenmuur',
      finishing: 'Afwerking buitenblad',
      material: 'Steen',
      otherMaterial: 'Ander materiaal dan in de lijst selecteren',
      otherMaterialClicked: 'Terug naar lijst met materialen',
      radioButtons: {
        title: 'Cementmortel wordt gebruikt',
        btn1: 'Ja',
        btn2: 'Nee'
      },
      airLayer: 'Luchtlaag',
      airLayerOptions: [
        'Niet geventileerd',
        'Matig geventileerd',
        'Sterk geventileerd'
      ]
    },
    step2: {
      title: 'Isolatie'
    },
    step3: {
      title: '2e isolatielaag'
    },
    step4: {
      title: 'Binnenmuur'
    },
    step5: {
      title: 'Afwerking binnenmuur'
    },
    summary: 'Samenvatting',
    project: 'Project'
  },
  modal: {
    title: 'Verstuur pdf via e-mail',
    fields: {
      name: 'Naam',
      company: 'Bedrijf',
      email: 'E-mail',
      gsm: 'GSM',
      comments: 'Opmerkingen',
      privacy:
        'Bij het aanvinken gaat u akkoord dat wij uw persoonlijke gegevens veilig bijhouden. ',
      privacyLink: 'Lees ons privacy beleid.',
      newsletter:
        'Ik blijf graag op de hoogte van projecten en nieuws gerelateerd aan Ursa Benelux.',
      btn: 'Verstuur'
    }
  },
  common: {
    required: 'Deze stap is verplicht',
    dropdown: {
      material: 'Materiaal',
      thickness: 'Dikte in cm',
      selectThickness: 'Selecteer dikte',
      selectMaterial: 'Selecteer materiaal'
    },
    next: 'Volgende',
    previous: 'Vorige',
    sendEmail: 'Verstuur PDF via e-mail',
    wood: 'Bevat de laag een fractie hout?',
    fixing: {
      title: 'Welke verankering gebruikt u?',
      dropdown1: {
        title: 'Bevestigingsmateriaal'
      },
      dropdown2: {
        title: 'Aantal per m2',
        default: 'Selecteer aantal'
      },
      inputPlaceholder: 'Vul een getal in: 2,15',
      dropdown3: {
        title: 'Diameter anker in mm',
        default: 'Selecteer diameter'
      }
    },
    form: {
      name: 'Naam is een verplicht veld',
      email: 'E-mail is een verplicht veld',
      company: 'Bedrijf is een verplicht veld',
      phone: 'GSM is een verplicht veld',
      comment: 'Opmerkingen is een verplicht veld'
    },
    reset: 'RESET BEREKENING',
    none: 'Geen',
    beta: 'Dit is een beta test versie. ',
    betaAfter: ' om problemen te melden.',
    stone: 'Steen',
    disabled: 'Binnenkort beschikbaar',
    sendReport: 'Meld een probleem',
    summaryDropdown: [
      'Aannemer/Installateur',
      'Architect/Voorschrijver',
      'Overheid/Onderwijs/Gemeente',
      'Projectontwikkelaar/Woningbouwer',
      'Bouwmaterialenhandel/Houthandel/Isolatiehandel',
      'Andere'
    ]
  }
}

export default nl
