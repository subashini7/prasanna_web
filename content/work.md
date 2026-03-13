---
title: "Work"
metaTitle: "Prasanna Pavani"
metaDescription: "Work"
---
export const workItems = [
  {
    company: 'Meta',
    companyUrl: 'https://about.meta.com/',
    title: 'Ranking AI',
    summary:
      'Leading a team to launch next gen multi-domain ML models for ads ranking. Unifying the modeling of diverse surface, conversion and consent types. Maximizing knowledge transfer from foundation to vertical models through online and offline embeddings. As the core of the strategic model space redesign program, we accelerate revenue by $2B+ annually while delivering a 7x+ investment return on GPU capacity.',
  },
  {
    company: 'Wayve',
    companyUrl: 'https://wayve.ai/',
    title: 'Head · Driving Intelligence',
    summary:
      'Led a team to build generative self-driving models that generalize across hardware and geographies. Designed a lane-aware driving model to maximize safety in complex environments. Partnered with product leaders for deployment on global automaker platforms leading to $2.8B in growth funding.',
  },
  {
    company: 'Airbus',
    companyUrl: 'https://acubed.airbus.com/',
    title: 'Head · Deep Learning',
    summary:
      'Led a team to build multi-stage self-landing models by estimating aircraft position and orientation relative to runway. Built key point based pose estimators and aligned a roadmap to solve accuracy vs. latency trade-off. Learned to fly airplanes and partnered with leadership to transition advanced research into a certified solution for $110M A320 aircraft.',
  },
  {
    company: 'Dishcare',
    companyUrl: 'https://dish.care',
    title: 'Founder',
    summary:
      'Led a team to build an autonomous dishwasher. Designed 6D pose and instance segmentation models for driving a robotic arm to handle a variety of dish types. Secured 7 patents, raised funding to target a $94B market opportunity and developed a licensing model for adoption by leaders in consumer appliances.',
  },
  {
    company: 'Osmo',
    companyUrl: 'https://www.amazon.com/stores/Osmo/page/AD044F53-1905-455C-9154-2A964D5ED5B2',
    title: 'Head of Engineering',
    summary:
      'Led a team to build vision models for mobile learning games. Enabled apps to understand the physical world to create immersive mixed-reality learning experiences for millions of users. Grew a global org across five countries to scale 20 iOS/android apps and backend services for accelerating a $120M business amid covid-induced remote learning growth.',
  },
  {
    company: 'Orbital Insight',
    companyUrl: 'https://en.wikipedia.org/wiki/Orbital_Insight',
    title: 'Head of Data',
    summary:
      'Led a team to build geospatial analytics to monitor the world. Developed a geolocation search model and time-series based monitoring to extract actionable intelligence from satellite data. Partnered with global enterprises to deliver value from raw global imagery leading to $132M in funding.',
  },
  {
    company: 'Exnodes',
    companyUrl: 'https://exnodes.com',
    title: 'Founder',
    summary:
      'Led a team to build computational wafer inspection for chips. Achieved a breakthrough 8.9 nm sensitivity and introduced AI models for defect classification. Secured 10 patents, raised funding to target a $4B market opportunity and developed a licensing model for adoption by world’s leading semiconductor fabs.',
  },
  {
    company: 'AV Costar',
    companyUrl: 'http://www.arecontvision.com/',
    title: 'Head of Engineering',
    summary:
      'Led a team to build video streaming algos for security cameras. Pioneered H.265 compression on FPGAs, ultra low-light imaging and streamed the first HD video from space. Partnered with product leaders to scale a $80M business amid rapid commoditization of cameras.',
  },
  {
    company: 'Ricoh Innovations',
    companyUrl: 'https://www.ricoh.com/technology/',
    title: 'Senior Research Scientist',
    summary:
      'Designed multi-view 3D imaging and holographic target detection at 1000+ fps. Secured 3 patents and collaborated with next gen product leaders in the U.S. and Japan.',
  },
  {
    company: 'KLA',
    companyUrl: 'https://www.kla.com/products/chip-manufacturing/defect-inspection-review',
    title: 'Research Scientist',
    summary:
      "Designed mission-critical defect detection systems used by world's leading chipmakers.",
  },
  {
    company: 'Caltech',
    companyUrl: 'http://www.caltech.edu/',
    title: 'Postdoctoral Fellow',
    summary: 'Solved a critical field vs. resolution trade-off in 3D with holograms.',
    professors: [
      { name: 'Prof. Changhuei Yang', url: 'https://www.eas.caltech.edu/people/chyang' },
    ],
  },
  {
    company: 'University of Colorado Boulder',
    companyUrl: 'http://www.colorado.edu/',
    title: 'Omnivision Fellow',
    summary:
      'Outstanding PhD award for formulating the double helix point spread function.',
    professors: [
      { name: 'Prof. Rafael Piestun', url: 'https://www.colorado.edu/ecee/rafael-piestun' },
      { name: 'Prof. Carol Cogswell', url: 'http://moislcu.wixsite.com/moisl/people' },
    ],
  },
  {
    company: 'Stanford University',
    companyUrl: 'http://www.stanford.edu/',
    title: 'Omnivision Fellow',
    summary:
      'Resolved molecules in 3D, broke diffraction limit and contributed to the 2014 Nobel Prize.',
    professors: [
      {
        name: 'Prof. W. E. Moerner',
        url: 'http://www.nobelprize.org/nobel_prizes/chemistry/laureates/2014/moerner-facts.html',
      },
    ],
  },
  {
    company: 'Omnivision',
    companyUrl: 'http://www.ovt.com/',
    title: 'Research Scholar',
    summary: 'Developed wavefront coding for extended depth.',
  },
  {
    company: 'National University of Singapore',
    companyUrl: 'http://www.nus.edu.sg/',
    title: 'Research Scholar',
    summary: 'Decoded insights from images.',
    professors: [
      {
        name: 'Prof. Surendra Ranganath',
        url: 'https://ieeexplore.ieee.org/author/37271854600',
      },
    ],
  },
  {
    company: 'D. E. Shaw',
    companyUrl: 'http://www.deshaw.com/',
    title: 'Senior Software Engineer',
    summary:
      'Developed market maker, trade monitor apps for a quant strategy trusted with $60B capital.',
  },
  {
    company: 'GCT Coimbatore',
    companyUrl: 'https://www.linkedin.com/school/gctcoimbatore/',
    title: 'Bachelor of Engineering',
    summary: 'Gold medal for accelerating sorting with multilayer perceptrons.',
    professors: [{ name: 'Prof. C. Vasanthanayaki', url: 'https://www.gcebodi.ac.in' }],
  },
];

<WorkHero
  title="Work"
  imageUrl="https://prashub.com/prasanna/images/Prasanna_Ricoh_Innovations.jpg"
  imageAlt="Prasanna at Ricoh Innovations"
/>

<WorkTimeline items={workItems} />
