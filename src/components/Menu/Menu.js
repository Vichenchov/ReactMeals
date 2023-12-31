import MenuItem from '../MenuItem/MenuItem'
import classes from './Menu.module.css'

const Dishes = [
  {
    Name: 'Sushi',
    Description: 'The whole ocean on your fucking table',
    Price: '22.99',
  },
  {
    Name: 'Schnitzel',
    Description: 'With a loooottt of oil',
    Price: '16.50',
  },
  {
    Name: 'Barbecue Burger',
    Description: 'Bread with protein on the middle',
    Price: '33.33',
  },
  {
    Name: 'Green Bowl',
    Description: "Don't take it",
    Price: '18.99',
  },
]

const Menu = (props) => {
  return (
    <div className={classes.MenuDiv}>
      {Dishes.map((key, index) => (
        <MenuItem
          key={index}
          id={index}
          name={Dishes[index].Name}
          des={Dishes[index].Description}
          price={Dishes[index].Price}
          ifLast={Dishes.length - 1 == index}
        />
      ))}
    </div>
  )
}

export default Menu
