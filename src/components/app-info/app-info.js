import './app-info.css';

const AppInfo = (props) => {
    const {allEmpl, incr, riced} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее число сотрудников: {allEmpl}</h2>
            <h2>Премию получат: {incr}</h2>
            <h2>Число сотрудников на повышение: {riced}</h2>
        </div>
    )
}

export default AppInfo;