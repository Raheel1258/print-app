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
  ];


export const sliderImagesHome = [
  {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
    ],
    title: "Order your next print in just new taps",
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
      { size_name: 'A6', height: '105mm', width: '148mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage},
      { size_name: 'A5', height: '148mm', width: '210mm', image:squareImage, name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio', image:squareImage},
      { size_name: 'A4', height: '210mm', width: '297mm', image:squareImage , name: 'Julia Halvorsen', designation: "Creative Director", studio: 'Halvorsen Studio' ,image:squareImage}, ,
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



