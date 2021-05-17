

//1. introduction
	//React operates not directly on the browser's Document Object Model (DOM) immediately, but on a virtual DOM
	//ref work-space/day1.html

//2. React JSX
	//(JavaScript eXtension), is a React extension that allows us to write JavaScript that looks like HTML.
class HelloWorld extends React.Component {
	render() {
		return (
			<h1 className='large'>Hello World</h1>
		);
	}
}


//*3. React Components*/
	//ref work-space/day3.html
class App extends React.Component {
	render() {
		return <h1>Hello from our app</h1>
	}
}
	//*/render() function is expected to return a virtual DOM representation of the browser DOM element(s).*/

var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount) //ReactDOM.render() places our tiny React application on the page.
	//first argument to ReactDOM.render() is what to render and the second is where:
	//ReactDOM.render(<what>, <where>)
	//<App /> we can render our React app using the App class as though it is a built-in DOM component

//4. Complex Components
	//ref work-space/day4.html (build this entire UI in a single component - not a great idea)
		//can be break down into:
			//1.The title bar
class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menuIcon">
					<div className="dashTop"></div>
					<div className="dashBottom"></div>
					<div className="circle"></div>
				</div>
				<span className="title">Timeline</span>
				<input type="text" className="searchInput" placeholder="Search..." />
				<div className="fa fa-search searchIcon"></div>
			</div>
		);
	}
}

			//2. The content

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="line"></div>
				{/* Timeline item */}
				<div className="item">
					<div className="avatar">
						<img alt="Doug" src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
						Doug
					</div>
					<span className="time">An hour ago</span>
					<p>Ate lunch</p>
					<div className="commentCount">2</div>
				</div>
				{/* ... */}
			</div>
		);
	}
}


			//3. Putting it all together
class App extends React.Component {
	render() {
		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header />
					<Content />
				</div>
			</div>
		);
	}
}



//4. Data-Driven
	//React Props - used to send data to a component in the same syntax as HTML, 
		//using attributes or properties on a component.

		//this.props - used to access properties inside a component

		//Example:
class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menuIcon">
					<div className="dashTop"></div>
					<div className="dashBottom"></div>
					<div className="circle"></div>
				</div>
				<span className="title"> {this.props.title} </span>
				<input type="text" className="searchInput" placeholder="Search ..." />
				<div className="fa fa-search searchIcon"></div>
			</div>
		)
	}
}

		//our <Header /> component will display the string we pass in as the title when we call the component
<Header title="Timeline" />
<Header title="Profile" />
<Header title="Settings" />
<Header title="Chat" />


		//Example 2:
class Content extends React.Component {
	render() {
		const {activity} = this.props; // ES6 destructuring
		return (
			<div className="content">
				<div className="line"></div>
				{/* Timeline item */}
				<div className="item">
					<div className="avatar">
						<img alt={activity.text} src={activity.user.avatar} />
						{activity.user.name}
					</div>
					<span className="time"> {activity.timestamp} </span>
					<p>{activity.text}</p>
					<div className="commentCount"> {activity.comments.length} </div>
				</div>
			</div>
		)
	}
}

//js object
const activity = {
	timestamp: new Date().getTime(),
	text: "Ate lunch",
	user: {
		id: 1, name: 'Nate',
		avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
	},
	comments: [{ from: 'Ari', text: 'Me too!' }]
}
<Content activities={activity} />



//We need to first update our Content component to accept multiple activities.
class Content extends React.Component {
	render() {
		const {activities} = this.props; // ES6 destructuring
		return (
			<div className="content">
				<div className="line"></div>
				{/* Timeline item */}
				{activities.map((activity) => {
					return (
						<div className="item">
							<div className="avatar">
								<img alt={activity.text} src={activity.user.avatar} />
								{activity.user.name}
							</div>
							<span className="time"> {activity.timestamp} </span>
							<p>{activity.text}</p>
							<div className="commentCount"> {activity.comments.length} </div>
						</div>
					);
				})}
			</div>
		)
	}
}

const activities = [
	{
		timestamp: new Date().getTime(),
		text: "Ate lunch",
		user: {
			id: 1, name: 'Nate',
			avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
		},
	comments: [{ from: 'Ari', text: 'Me too!' }]
	},
	{
		timestamp: new Date().getTime(),
		text: "Woke up early for a beautiful run",
		user: {
			id: 2, name: 'Ari',
			avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
		},
		comments: [{ from: 'Nate', text: 'I am so jealous' }]
	},
]


<Content activities={activities} />


//ActivityItem
class Content extends React.Component {
	render() {
		const {activities} = this.props; // ES6 destructuring
		return (
			<div className="content">
				<div className="line"></div>
				{/* Timeline item */}
				{activities.map((activity) => (
					<ActivityItem activity={activity} />
				))}
			</div>
		)
	}
}





//5. State
	//state in a component is intended to be completely internal to the Component and its children
	//React does not allow us to modify this.props on our components
	//sometimes a component needs to be able to update its own state - updating a timer on a stopwatch



