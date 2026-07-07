import ananyaIyerImg from './assets/ananya_iyer.png';
import rohanKapoorImg from './assets/rohan_kapoor.png';
import meeraBanerjeeImg from './assets/meera_banerjee.png';
import vikramDesaiImg from './assets/vikram_desai.png';
import italianDinnerPartyImg from './assets/italian_dinner_party.png';
import indianKitchenSocialImg from './assets/indian_kitchen_social.png';
import rooftopPartyImg from './assets/rooftop_party.png';
import appScreenImg from './assets/app_screen.png';
import heroChefImg from './assets/hero_chef.png';
import heroDishMainImg from './assets/hero_dish_main.png';
import heroDishSecondImg from './assets/hero_dish_second.png';
import heroDishThirdImg from './assets/hero_dish_third.png';

export const chefs = [
  { name: 'Ananya Iyer', area: 'Indiranagar · 0.8 km', cuisine: 'South Indian', rating: '4.9', meals: 6, src: ananyaIyerImg },
  { name: 'Rohan Kapoor', area: 'Bandra West · 1.2 km', cuisine: 'North Indian', rating: '4.8', meals: 4, src: rohanKapoorImg },
  { name: 'Meera Banerjee', area: 'Salt Lake · 1.5 km', cuisine: 'Bengali', rating: '5.0', meals: 8, src: meeraBanerjeeImg },
  { name: 'Vikram Desai', area: 'Satellite · 2.1 km', cuisine: 'Gujarati', rating: '4.9', meals: 5, src: vikramDesaiImg },
];

export const fuelDays = [
  { label: 'M', active: false },
  { label: 'T', active: false },
  { label: 'W', active: true },
  { label: 'T', active: false },
  { label: 'F', active: false },
  { label: 'S', active: false },
  { label: 'S', active: false },
];

export const fuelMeals = [
  { meal: 'Breakfast', dish: 'Green oats & berries', time: '7:30 AM', status: 'Delivered ✓', src: 'https://foodish-api.com/images/idly/idly20.jpg' },
  { meal: 'Lunch', dish: 'Grilled chicken bowl', time: '12:30 PM', status: 'On the way', src: 'https://foodish-api.com/images/butter-chicken/butter-chicken5.jpg' },
  { meal: 'Dinner', dish: 'Miso salmon & greens', time: '7:00 PM', status: 'Scheduled', src: 'https://foodish-api.com/images/rice/rice15.jpg' },
];

export const events = [
  { day: '18', mon: 'OCT', tag: 'In-House Party · 8 tickets max', title: 'Coastal Italian Dinner Party', seats: '3 tickets left', price: '$42', src: italianDinnerPartyImg },
  { day: '22', mon: 'OCT', tag: 'Home Kitchen Social · 6 tickets max', title: 'South Indian Thali & Beats', seats: 'Sold out soon', price: '$36', src: indianKitchenSocialImg },
  { day: '25', mon: 'OCT', tag: 'Rooftop Party · 12 tickets max', title: 'West African Feast & Music', seats: '7 tickets left', price: '$48', src: rooftopPartyImg },
];

export const reviews = [
  { quote: '"My fridge is empty and I\'ve never eaten better. The Fuel plan just shows up, hot, every day."', name: 'Lena M.', role: 'Fuel subscriber', src: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { quote: '"Found a home chef two streets away. Her dal tastes exactly like my grandmother\'s kitchen."', name: 'Arjun M.', role: 'Weekly customer', src: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { quote: '"The social tables are my favourite night out. Great food, new friends, zero effort."', name: 'Sofia R.', role: 'Social diner', src: 'https://randomuser.me/api/portraits/women/29.jpg' },
];

export const heroDishes = {
  main: heroDishMainImg,
  second: heroDishSecondImg,
  third: heroDishThirdImg,
  chef: heroChefImg,
};

export const pantryImages = {
  jar: 'https://foodish-api.com/images/samosa/samosa15.jpg',
  kit: 'https://foodish-api.com/images/biryani/biryani22.jpg',
};

export const appScreen = appScreenImg;
