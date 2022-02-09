import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Jon S.', salary: 800, increase: false, id: 1},
                {name:'Semion G.', salary: 4600, increase: true, id: 2},
                {name:'Mick D.', salary: 2100, increase: false, id: 3},
                {name:'Garry N.', salary: 1700, increase: false, id: 4},
            ]
        }
        this.maxId = 5;
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex((elem) => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index +1)
            // const newData = [...before, ...after]
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        })
    }

    render() {
        return (
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>   
            </div>
            <EmployeesList 
                data={this.state.data}
                onDelete={this.deletItem}/>
            <EmployeesAddForm
                onAdd={this.addItem}/>
        </div>
        )
    }
}

export default App;