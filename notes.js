// makin the file in js format because I'd really like to have the syntax highlighting.


let resume =  {
  basicInfo: {
    fullName: 'Mohamed Ikhwan Ibrahim'
    countryOfOrigin: 'Maldives',
    age: 23, // would be cool if it had time till birthday on hover
    birthDate: '03-October-1994',
    isEmployed: false, // if true show more info
  },
  previousWork: [ // ordered most recent first
    {
      employer: 'ServisHero',
      placeOfWork: 'Malaysia',
      jobTitle: 'Developer',
      startDate: 'May-2018',
      endDate: 'November-2018',
      learnedAbout : [
        'ReactJS + Redux',
        'SailsJS',
        'AWS - Lambda',
        'AWS - SNS',
        'AWS - SQS',
        'Mailchimp + Mandrill',
        'HTML',
        'JavaScript',
        'SCSS',
      ],
      notableMoments: [
         'First job as a Developer!',
         'Worked as an intern for the first three months, upgraded to Dev afterwards',
         'Worked with some really fascinating and inspiring people.',
      ],
    }, // end of employmentObject

    {
      employer: 'Mooinc',
      placeOfWork: 'Maldives',
      jobTitle: 'Project Manager',
      startDate: 'late-2013',
      endDate: 'early-2014',
      learnedAbout : [
        'Negotiation',
        'Conflict resolution',
        'Tracking tasks',
        'Organising work',
        'Monitoring progress',
        'Removing obstacles for tasks',
        'Measuring Progress',
      ],
      notableMoments: [
         'the United Nations was our client. We were working on a child abuse awareness and prevention program',
      ],
    }, // end of employmentObject

    {
      employer: 'Maldives Inland Revenue Authority (MIRA)',
      placeOfWork: 'Maldives',
      jobTitle: 'Intern',
      startDate: 'mid-2013',
      endDate: 'late-2013',
      learnedAbout : [
        'SAP Taxation Software',
        'Manual data validation and entry',
      ],
      notableMoments: [
         'Seeing such a large database in action made me want to learn Software Engineering!',
         'Worked really long hours',
         'Also realized I\'m a workaholic.',
      ],
    }, // end of employmentObject
  ], // end of previousWorkArray
  education: [
    {
      educationLevel: 'Undergraduate',
      course: 'Bsc. in Software Engineering',
      awardedFrom: 'Plymouth University UK',
      studiedAt: 'National School of Business Management',
      placeOfStudy: 'SriLanka',
      startDate: 'May-2018',
      endDate: 'November-2018',
      notableMoments: [
         'Volunteered for charity projects in the Rotaract Club of NSBM',
      ],
    }, // end of educationObject
    {
      educationLevel: 'Higher Secondary',
      course: 'General Certificate of Education ( A levels )',
      awardedFrom: 'Edexcel',
      studiedAt: 'Center for Higher Secondary Education',
      placeOfStudy: 'Maldives',
      startDate: 'mid-2011',
      endDate: 'mid-2013',
      notableMoments: [
         'Held the position of Business Club Treasurer',
      ],
    }, // end of educationObject
    {
      educationLevel: 'Lower Secondary',
      course: 'General Certificate of Education ( O levels )',
      awardedFrom: 'University of Cambridge',
      studiedAt: 'Billabong High International School',
      placeOfStudy: 'Maldives',
      startDate: 'early-2009',
      endDate: 'late-2010',
      notableMoments: [
         'Held the position of School Captain',
      ],
    },// end of educationObject
  ], // end of educationArray

  contactInfo: {
    email: '1khwan.m0@gmail.com',
    phoneNumber : 'REDACTED',
    postalAddress : 'REDACTED',
  } // end of contactInfoObject
}
