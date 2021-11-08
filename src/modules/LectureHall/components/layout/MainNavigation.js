import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


export default function MainNavigtion() {

      return (
            <header className={classes.header}>
                  <div className={classes.logo}>Lecture Hall Management</div>
                  <nav>
                        <ul>
                              <li>
                                    <Link to='/lecturehall' exact>Allocated Lecture Halls</Link>
                              </li>
                              <li>
                                    <Link to='/lecturehall/all' exact>All LT</Link>
                                    
                              </li>
                              <li>
                                    <Link to='/lecturehall/available' exact>Available LT</Link>
                                    <span className={classes.badge}></span>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}