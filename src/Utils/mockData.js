import cardImage from '../Assests/Images/business-card.png';
import bookletImage from '../Assests/Images/booklet-image.png';
import posterImage from '../Assests/Images/poster-image.png';
import leafletImage from '../Assests/Images/flyers&leaflet-image.png';
import stickerImage from '../Assests/Images/stickers&label-image.png';
import envelopImage from '../Assests/Images/envelope-image.png';
import letterheadImage from '../Assests/Images/letterhead-image.png';


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
    images:[
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    ],
    title: "Order your next print in just new taps",
  }
  
]

export const productSliderImages = [
  {
    heading: 'Premium(Thick) Business Card',
    price: '68',
    images:['https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water'],
    feature1: 'Think, smooth and premium',
    feature2: 'Perfect for professionals',
    paper_type: 'woodfree Card(350g)',
    Lead_time: '2-3 business days',
    colour:'CYMK',
    sizes: '3 sizes',
    choose_size: [{standard:'standard' , height:'90mm' , width:'54mm'}, {shortend:'shortend' , height:'90mm' , width:'54mm'},{sqaure:'sqaure' , height:'90mm' , width:'54mm'}],
    choose_corner:{sqaure:'tranditional', Round:'Smooth'},
    table:[
      {quantity:'100' , Price:'$68', unit_price:'$0.5'},
      {quantity:'200' , Price:'$108', unit_price:'$0.5'},
      {quantity:'300' , Price:'$158', unit_price:'$0.5'},
      {quantity:'400' , Price:'$210', unit_price:'$0.5'},
     ]
  },
]
