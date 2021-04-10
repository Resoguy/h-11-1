console.log(React);

// const title = React.createElement('h1', {}, 'Hello React');

// console.log(title);

// console.log(ReactDOM);

// React Component
const App = () => {
    return <div className="container">
        <h1>Hello JSX</h1>

        <MyButton 
            text="Click!"
            clickHandler={() => console.log('Clicked Button')} />

        <MyButton 
            text="Warning!"
            clickHandler={() => alert('Warning Clicked!')} />

        <hr />

        <div className="counters-wrapper">
            <Counter />

            <Counter />

            <Counter />
        </div>

        <hr />

        <UserList />
    </div>
}

const MyButton = ({text, clickHandler}) => (
    <button className="btn" onClick={clickHandler}>
        {text}
    </button>
)


class Counter extends React.Component {
    state = {
        title: 'Hello COunter',
        count: 0
    }

    increment = () => {
        console.log('Increment');
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        console.log('Decrement');
        this.setState({count: this.state.count - 1})
    }

    reset = () => {
        console.log('Reset');
        this.setState({count: 0});
    }

    render() {
        return <div className="counter">
            <h3 className="counter-text">
                {this.state.count}
            </h3>

            <div className="counter-actions">
                <MyButton 
                    text="Decrement -"
                    clickHandler={this.decrement} />

                <MyButton 
                    text="Reset"
                    clickHandler={this.reset} />

                <MyButton 
                    text="Increment +"
                    clickHandler={this.increment} />
            </div>
        </div>
    }
}

class UserList extends React.Component {
    state = {
        users: []
    }

    // React Lifecycle method
    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        console.log(data);

        this.setState({users: data});
    }

    // Conditional rendering
    render() {
        return (
                this.state.users.length ?
                <div className="user-list">
                    {
                        this.state.users.map(user => <UserItem key={user.id} user={user} />)
                    }
                </div> :
                <Loading />
        )
    }
}

// React Fragment bos tag olarak da kullanilabilir
// Tek bir parent element olmasi icin kullanilir
const UserItem = ({user}) => {
    return (
        <React.Fragment>
            <p>{user.username}</p>
            <div className="card">
                <h3>{user.name}</h3>
            </div>
        </React.Fragment>
    )
}

const Loading = () => (
    <div className="loading">
        <h2>...Loading</h2>
    </div>
)


ReactDOM.render(<App />, document.querySelector('#app'));
