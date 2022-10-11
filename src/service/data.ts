import { CoffeeProps, CoffeeTags } from '../pages/Home/components/CoffeeCard'

import expresso from '../assets/coffees/expresso.png'
import americano from '../assets/coffees/americano.png'
import creamy from '../assets/coffees/creamy.png'
import iced from '../assets/coffees/iced.png'
import withMilk from '../assets/coffees/with-milk.png'
import latte from '../assets/coffees/latte.png'
import capuccino from '../assets/coffees/capuccino.png'
import mocaccino from '../assets/coffees/mocaccino.png'
import hotChocolate from '../assets/coffees/hot-chocolate.png'
import cuban from '../assets/coffees/cuban.png'
import hawaiian from '../assets/coffees/hawaiian.png'
import arabic from '../assets/coffees/arabic.png'
import irish from '../assets/coffees/irish.png'
import macchiato from '../assets/coffees/macchiato.png'

export const coffeeData: CoffeeProps[] = [
	{
		id: '1',
		imgUrl: expresso,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Traditional Expresso',
		description: 'Traditional coffee made with hot water and ground beans',
		price: 9.99,
	},
	{
		id: '2',
		imgUrl: americano,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Expresso Americano',
		description: 'Diluted espresso, less intense than traditional',
		price: 9.99,
	},
	{
		id: '3',
		imgUrl: creamy,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Creamy Espresso',
		description: 'Traditional espresso with creamy foam',
		price: 9.99,
	},
	{
		id: '4',
		imgUrl: iced,
		tag: CoffeeTags.ICED,
		title: 'Iced Espresso',
		description: 'Drink prepared with espresso coffee and ice cubes',
		price: 9.99,
	},
	{
		id: '5',
		imgUrl: withMilk,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Coffee with milk',
		description: 'Half and half traditional espresso with steamed milk',
		price: 9.99,
	},
	{
		id: '6',
		imgUrl: latte,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Latte',
		description: 'A shot of espresso with twice the milk and creamy foam',
		price: 9.99,
	},
	{
		id: '7',
		imgUrl: capuccino,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Capuccino',
		description:
			'Cinnamon drink made from equal doses of coffee, milk and foam',
		price: 9.99,
	},
	{
		id: '8',
		imgUrl: mocaccino,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Mocaccino',
		description:
			'Espresso coffee with chocolate syrup, little milk and foam',
		price: 9.99,
	},
	{
		id: '9',
		imgUrl: hotChocolate,
		tag: CoffeeTags.TRADITIONAL,
		title: 'Hot Chocolate',
		description:
			'Drink made with chocolate dissolved in hot milk and coffee',
		price: 9.99,
	},
	{
		id: '10',
		imgUrl: cuban,
		tag: CoffeeTags.ALCOHOLIC,
		title: 'Cuban',
		description: 'Iced espresso drink with rum, cream and mint',
		price: 9.99,
	},
	{
		id: '11',
		imgUrl: hawaiian,
		tag: CoffeeTags.SPECIAL,
		title: 'Hawaiian',
		description: 'Sweet drink prepared with coffee and coconut milk',
		price: 9.99,
	},
	{
		id: '12',
		imgUrl: arabic,
		tag: CoffeeTags.SPECIAL,
		title: 'Arabic',
		description: 'Drink prepared with Arabic coffee beans and spices',
		price: 9.99,
	},
	{
		id: '13',
		imgUrl: irish,
		tag: CoffeeTags.ALCOHOLIC,
		title: 'Irish',
		description:
			'Drink made from coffee, Irish whiskey, sugar and whipped cream',
		price: 9.99,
	},
	{
		id: '14',
		imgUrl: macchiato,
		tag: CoffeeTags.WITH_MILK,
		title: 'Macchiato',
		description: 'Espresso coffee mixed with some hot milk and foam',
		price: 9.99,
	},
]
