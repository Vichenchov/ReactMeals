import MenuItem from "../MenuItem/MenuItem";
import './Menu.css';

const Dishes = [{
    Name: 'Sushi',
    Description: 'The whole ocean on your fucking table',
    Price: '22.99'
},
{
    Name: 'Schnitzel',
    Description: 'With a loooottt of oil',
    Price: '16.50'
},
{
    Name: 'Barbecue Burger',
    Description: 'Bread with protein on the middle',
    Price: '33.33'
},
{
    Name: 'Green Bowl',
    Description: "Don't take it",
    Price: '18.99'
},];

function Menu(props) {
    return (
        <div className="MenuDiv">
            {
                Dishes.map((key, index) => (
                    <MenuItem
                        name={Dishes[index].Name}
                        des={Dishes[index].Description}
                        price={Dishes[index].Price} />

                ))
            }
        </div>)
}

export default Menu;