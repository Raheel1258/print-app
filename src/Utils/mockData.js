import cardImage from '../Assests/Images/business-card.png';
import bookletImage from '../Assests/Images/booklet-image.png';
import posterImage from '../Assests/Images/poster-image.png';
import leafletImage from '../Assests/Images/flyers&leaflet-image.png';
import stickerImage from '../Assests/Images/stickers&label-image.png';
import envelopImage from '../Assests/Images/envelope-image.png';
import letterheadImage from '../Assests/Images/letterhead-image.png';
import roundImage from '../Assests/Images/round-image.png';
import squareImage from '../Assests/Images/square-image.png';


export const CategoriesData =
  [
    {
      id: '1',
      image: cardImage,
      title: 'Business Card',
      days: '2-5 business days',
      price: '100 cards from $68'
    },
    {
      id: '2',
      image: bookletImage,
      title: 'Booklet',
      days: '4-7 business days',
      price: '10 booklets from $184'
    },
    {
      id: '3',
      image: posterImage,
      title: 'Poster',
      days: '3-4 business days',
      price: '5 posters from $48'
    },
    {
      id: '4',
      image: leafletImage,
      title: 'Flyers & Leaflet',
      days: '3-4 business days',
      price: '100 flyers from $58'
    },
    {
      id: '5',
      image: stickerImage,
      title: 'Stickers & Label',
      days: '3-5 business days',
      price: '100 stickers from $178'
    },
    {
      id: '6',
      image: envelopImage,
      title: 'Envelope',
      days: '4-6 business days',
      price: '100 envelops from $128'
    },
    {
      id: '7',
      image: letterheadImage,
      title: 'Letterhead',
      days: '4-6 business days ',
      price: '100 units from $120'
    },

    // {
    //   id: '7',
    //   productImage: letterheadImage,
    //   productTitle: 'Letterhead',
    //   deliveryDays: '4-6 business days ',
    //   priceDescription: '100 units from $120',
    //   category: {BUSINESS_CARDS, LETTER_HEAD, ENVELOP,.....}
    // },
  ];


export const sliderImagesHome = [
  {
    images: [
      require('../Assests/Images/businesscard-header-image.png'),
      require('../Assests/Images/poster-image.png'),
      require('../Assests/Images/booklet-image.png'),
    ],
  }

]

export const productListBusinessCardData = [
  {
    id: 111,
    heading: 'Premium(Thick) Business Card',
    price: '68',
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Think, smooth and premium',
    feature2: 'Perfect for professionals',
    description: 'Think, smooth and premium. The Premium Business card is a popular choice for professionals',
    paper_type: 'woodfree Card(350g)',
    lead_time: '2-3 business days',
    colour: 'CYMK',
    sizes: '3 sizes',
    choose_size: [
      { size_name: 'Standard', height: '90mm', width: '54mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage },
      { size_name: 'Shortend', height: '84mm', width: '55mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage},
      { size_name: 'Sqaure', height: '56mm', width: '56mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage}],
    choose_corner: [
      { corner: 'Saqure', variation: 'Traditional', image: squareImage },
      { corner: 'Round', variation: 'Smooth', image: roundImage },
    ],
    choose_finishing: ['Matte', 'xyz', 'xzy'],
    spot_vu_effect: ['1 side' , '2 side'],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.5 },
      { id:2, quantity: '200', price: 108, unit_price: 0.5 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.5 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.5 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.5 },
      { id:6, quantity: '600', price: 410, unit_price: 0.5 },
      { id:7, quantity: '500', price: 558, unit_price: 0.5 },
      { id:8 ,quantity: '600', price: 610, unit_price: 0.5 },
    ]
  },

  {
    id: 112,
    heading: 'Blod(Extra Thick) Business Card',
    price: 128,
    images: ['https://source.unsplash.com/1024x768/?nature'],
    feature1: 'Think, smooth and premium',
    feature2: 'Perfect for professionals',
    description: 'Think, smooth and premium. The Premium Business card is a popular choice for professionals',
    paper_type: 'woodfree Card(350g)',
    lead_time: '3-4 business days',
    colour: 'CYMK',
    sizes: '3 sizes',
    choose_size: [
      { size_name: 'Standard', height: '90mm', width: '54mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'Shortend', height: '84mm', width: '55mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage},
      { size_name: 'Sqaure', height: '56mm', width: '56mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage}],
    choose_corner: [
      { corner: 'Saqure', variation: 'Traditional', image: squareImage },
      { corner: 'Round', variation: 'Smooth', image: roundImage },
    ],
    choose_finishing: ['Matte', 'xyz', 'xzy'],
    spot_vu_effect: ['1 side' , '2 side'],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.5 },
      { id:2 ,quantity: '200', price: 108, unit_price: 0.5 },
      { id:3 ,quantity: '300', price: 158, unit_price: 0.5 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.5 },
      { id:5 ,quantity: '500', price: 358, unit_price: 0.5 },
      { id:6 ,quantity: '600', price: 410, unit_price: 0.5 },
      { id:7 ,quantity: '500', price: 558, unit_price: 0.5 },
      { id:8 ,quantity: '600', price: 610, unit_price: 0.5 },
    ]
  },

  {
    id: 113,
    heading: 'Style(Texture Paper) Business Card',
    price: 158,
    images: ['https://source.unsplash.com/1024x768/?nature'],
    feature1: 'Think, smooth and premium',
    feature2: 'Perfect for professionals',
    description: 'Think, smooth and premium. The Premium Business card is a popular choice for professionals',
    paper_type: 'woodfree Card(350g)',
    lead_time: '3-4 business days',
    colour: 'CYMK',
    sizes: '3 sizes',
    choose_size: [
      { size_name: 'Standard', height: '90mm', width: '54mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage},
      { size_name: 'Shortend', height: '84mm', width: '55mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage},
      { size_name: 'Sqaure', height: '56mm', width: '56mm', name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' , image:squareImage}],
    choose_corner: [
      { corner: 'Saqure', variation: 'Traditional', image: squareImage },
      { corner: 'Round', variation: 'Smooth', image: roundImage },
    ],
    choose_finishing: ['Matte', 'xyz', 'xzy'],
    spot_vu_effect: ['1 side' , '2 side'],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.5 },
      { id:2 ,quantity: '200', price: 108, unit_price: 0.5 },
      { id:3 ,quantity: '300', price: 158, unit_price: 0.5 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.5 },
      { id:5 ,quantity: '500', price: 358, unit_price: 0.5 },
      { id:6 ,quantity: '600', price: 410, unit_price: 0.5 },
      { id:7 ,quantity: '500', price: 558, unit_price: 0.5 },
      { id:8 ,quantity: '600', price: 610, unit_price: 0.5 },
    ]
  },

]
//Booklet Data

export const productListBookletData = [
  {
    id: 222,
    heading: 'Stapled Binding Booklet',
    price: 184,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Pages are binding together with stapled',
    feature2: 'Ideal for brochures, magazines, price list, etc',
    description: 'Beautiful booklets with pages binded by stape, ideal for multi-pages promotional products, magazine, etc',
    paper_type: 'Art Card(157gsm)/Woodree paper(140gsm) ',
    lead_time: '4-7 business days',
    colour: 'CYMK',
    sizes: 'A4 /A5 /A6',
    choose_size: [
      { size_name: 'A6', height: '105mm', width: '148mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'A5', height: '148mm', width: '210mm', image:squareImage, name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'A4', height: '210mm', width: '297mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' ,image:squareImage }, ,
    ],
    choose_paper_type : [
      {coverpages:['xyz' , 'xyz' , 'xyz']},
      {innerpages:['xyz' , 'xyz' , 'xyz']}

    ],
    choose_page_number : [
      {
        coverpages:[10 , 12 , 12]
      },
      {
        innerpages:[36 ,13 , 67]
      }

    ],
    choose_finishing: ['Matte', 'xyz', 'xzy'],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 223,
    heading: 'Perfect Binding Booklet',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Pages are binding together with stapled',
    feature2: 'Perfect for luxury look-books, catalogues, etc',
    description: 'luxury booklet with paper binded together using strong adhesive, ideal for thicker booklets with a high-end look.',
    paper_type: 'Art Card(157gsm)/Woodree paper(140gsm) ',
    lead_time: '4-7 business days',
    colour: 'CYMK',
    sizes: 'A4 /A5 /A6',
    choose_size: [
      { size_name: 'A6', height: '105mm', width: '148mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'A5', height: '148mm', width: '210mm', image:squareImage, name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'A4', height: '210mm', width: '297mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' ,image:squareImage }, ,
    ],
    choose_paper_type : [
      {coverpages:['xyz' , 'xyz' , 'xyz']},
      {innerpages:['xyz' , 'xyz' , 'xyz']}

    ],
    choose_page_number : [
      {
        coverpages:[10 , 12 , 12]
      },
      {
        innerpages:[36 ,13 , 67]
      }

    ],
    choose_finishing: ['Matte', 'xyz', 'xzy'],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },
]

//Poster
export const productListPosterData = [
  {
    id: 333,
    heading: 'Rectangular Poater',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Create impactful poster in the size of A3 or A4',
    feature2: 'High quality paper to make your design stand out',
    description: 'Create impactful poster in the size of A3 or A4. Choose between two high quality paper to make your design stand out',
    paper_type: 'Glossy paper(157 gsm)/Glossy card(400 gsm)',
    lead_time: '3-4 business days',
    colour: 'CYMK',
    sizes: 'A3 / A4 ',
    choose_size: [
      { size_name: 'A4', height: '210mm', width: '297mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
      { size_name: 'A3', height: '297mm', width: '420mm', image:squareImage, name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    numberSide : {sides: ['single side' , 'double side']},
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },
]

//sticker

export const productListStickerData = [
  {
    id: 444,
    heading: 'Round sticker',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for logos, branding and packaging',
    description: 'All stickers are printed on durable and tear-proof material. Ideal for logos, branding and packaging',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '25mm', width: '25mm', image:squareImage , },
      { size_name: 'Small', height: '65mm', width: '65mm', image:squareImage,  },
      { size_name: 'Standard', height: '100mm', width: '100mm', image:squareImage ,  },
      { size_name: 'Large', height: '125mm', width: '125mm', image:squareImage ,  },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 445,
    heading: 'Rectangular sticker',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for packaging, products and labels',
    description: 'All stickers are printed on durable and tear-proof material. Perfect for packaging, products and labels.',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '50mm', width: '25mm',  image:squareImage },
      { size_name: 'Small', height: '75mm', width: '50mm',  image:squareImage },
      { size_name: 'Standard', height: '100mm', width: '50mm',  image:squareImage },
      { size_name: 'Large', height: '125mm', width: '50mm',  image:squareImage },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 446,
    heading: 'Saqure sticker',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for events, branding and packaging',
    description: 'All stickers are printed on durable and tear-proof material. Perfect for events, branding and packaging.',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '50mm', width: '50mm',  image:squareImage },
      { size_name: 'Small', height: '75mm', width: '75mm',  image:squareImage },
      { size_name: 'Standard', height: '100mm', width: '100mm',  image:squareImage },
      { size_name: 'Large', height: '125mm', width: '125mm',  image:squareImage },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },
]

//Flyer

export const productListFlyerData = [
  {
    id: 555,
    heading: 'Rectangular Flyer',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for logos, branding and packaging',
    description: 'All stickers are printed on durable and tear-proof material. Ideal for logos, branding and packaging',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '25mm', width: '25mm', image:squareImage , },
      { size_name: 'Small', height: '65mm', width: '65mm', image:squareImage,  },
      { size_name: 'Standard', height: '100mm', width: '100mm', image:squareImage ,  },
      { size_name: 'Large', height: '125mm', width: '125mm', image:squareImage ,  },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 556,
    heading: 'Saqure Flyer',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for packaging, products and labels',
    description: 'All stickers are printed on durable and tear-proof material. Perfect for packaging, products and labels.',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '50mm', width: '25mm',  image:squareImage },
      { size_name: 'Small', height: '75mm', width: '50mm',  image:squareImage },
      { size_name: 'Standard', height: '100mm', width: '50mm',  image:squareImage },
      { size_name: 'Large', height: '125mm', width: '50mm',  image:squareImage },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 557,
    heading: 'Foldable Flyer',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for events, branding and packaging',
    description: 'All stickers are printed on durable and tear-proof material. Perfect for events, branding and packaging.',
    paper_type: 'glossy/Clear',
    lead_time: '3-5 business days',
    colour: 'CYMK',
    sizes: '4 sizes',
    choose_size: [
      { size_name: 'Tiny', height: '50mm', width: '50mm',  image:squareImage },
      { size_name: 'Small', height: '75mm', width: '75mm',  image:squareImage },
      { size_name: 'Standard', height: '100mm', width: '100mm',  image:squareImage },
      { size_name: 'Large', height: '125mm', width: '125mm',  image:squareImage },
    ],
    choose_paper_type : [
      {coverpages:['Glossy paper(157 gsm)' , 'Glossy card(400 gsm)']},
    ],
    choose_cut:[{indivial:'individual' , height:'65mm' , width:'65mm' , image:squareImage},
    {in_sheet:'In sheet' , height:'100mm' , width:'100mm' , imag:squareImage}
  ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },
]


//Envelope
export const productListEnvelopeData = [
  {
    id: 666,
    heading: 'Horizontal Opening Envelope',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'High quality envelope perfect for branding',
    feature2: 'With a choice of window or window-less',
    description: 'High quality envelope perfect for branding.With a choice of window or window-less',
    paper_type: 'Woodfree paper (100 gsm)',
    lead_time: '4-6 business days',
    colour: 'CYMK',
    sizes: '4" x 9" (101.6mm x 228.6mm)',
    choose_size: [
      { size_name: 'With window', height: '4"', width: '9"',  image:squareImage },
      { size_name: 'Without window', height: '4"', width: '9"',  image:squareImage },
    ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

  {
    id: 667,
    heading: 'Veritcal Opening Envelope',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Durable and tear-proof material',
    feature2: 'Ideal for packaging, products and labels',
    description: 'All stickers are printed on durable and tear-proof material. Perfect for packaging, products and labels.',
    paper_type: 'Woodfree paper (100 gsm)',
    lead_time: '4-6 business days',
    colour: 'CYMK',
    sizes: '4" x 9" (101.6mm x 228.6mm)',
    choose_size: [
      { size_name: 'With window', height: '4"', width: '9"',  image:squareImage },
      { size_name: 'Without window', height: '4"', width: '9"',  image:squareImage },
    ],
  
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },
]


//Letter head
export const productListLetterheadData = [
  {
    id: 777,
    heading: 'Letterhead (A4)',
    price: 68,
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Professional letterhead that carries your company brand',
    feature2: 'Permium paper suitable for all major printers',
    description: 'Professional letterhead that carries your company brand.Permium paper suitable for all major printers.',
    paper_type: 'Woodfree paper (100 gsm)',
    lead_time: '4-6 business days',
    colour: 'CYMK',
    sizes: 'A4(210mm x 297mm)',
    choose_size: [
      { size_name: 'With window', height: '4"', width: '9"',  image:squareImage },
      { size_name: 'Without window', height: '4"', width: '9"',  image:squareImage },
    ],
    quantity_table: [
      { id:1 , quantity: '100', price: 68, unit_price: 0.51 },
      { id:2 , quantity: '200', price: 108, unit_price: 0.51 },
      { id:3 , quantity: '300', price: 158, unit_price: 0.51 },
      { id:4 ,quantity: '400', price: 210, unit_price: 0.51 },
      { id:5 , quantity: '500', price: 358, unit_price: 0.51 },
      { id:6 , quantity: '600', price: 410, unit_price: 0.51 },
      { id:7 , quantity: '500', price: 558, unit_price: 0.51 },
      { id:8 , quantity: '600', price: 610, unit_price: 0.51 },
    ]
  },

]



