import React,{Component} from 'react';
import axios from 'axios';
import 'tachyons';
class Post extends Component{
	state={
		post:null
	}
	componentDidMount(){
		let id=this.props.match.params.post_id;
		axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
		.then(res=>{
			this.setState({
				post:res.data	
			})
			
		})
	}
	render(){
		const post=this.state.post?(
			<div className="post f4">
				<h4 className="f2 b white">{this.state.post.title}</h4>
				<p className="yellow">{this.state.post.body}</p>
			</div>
		):(
			<div className="tc f3 white">Loading post ....</div>

			)
		return(
			<div className="container">
				<h4>{post}</h4>
			</div>
			)
	}
}


export default Post;