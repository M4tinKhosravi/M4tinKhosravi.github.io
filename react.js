class Block extends React.Component 
{
	constructor(props)
	{
		super(props)
		this.state = {
			hover: false,
			key: this.props.handler
		}
				
	}
	
	getStyle = (hover)  => {
			if(hover)
				return "hover-block"
			else
				return "unhover-block"
	}
	
	onHover = (hover) =>
	{
		this.setState ({hover: hover})
	}
	
	onClick = (id) =>
	{
		[...document.getElementsByClassName("content")].forEach( (e) => e.style.display = "none");
		document.getElementById(id).style.display = "block";
	}
	
	render() {
		
		return <div className={this.getStyle(this.state.hover)}
		onMouseEnter={() => this.onHover(true)}
		onMouseLeave={() => this.onHover(false)}
		onClick={() => this.onClick(this.props.handler)}>{this.props.children}</div>
	}
}

class Navbar extends React.Component 
{
	constructor(props)
	{
		super(props)
		this.state = {
			sections: [
			{id: "section-about", title: "About Me"}, 
			{id: "section-skills", title: "My Skills"}, 
			{id: "section-contact", title: "Contact Me"}
			]
		}
	}
	
	showSection = (block) => {
		return (<Block handler={block.id}>{block.title}</Block>)
	}
	
	render () {
		return (<div id="navbar">
		{this.state.sections.map(this.showSection)}
		</div>)
	}
}



const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Navbar />);