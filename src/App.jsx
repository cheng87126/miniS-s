import React from 'react'
import sty from './app.scss'

class App extends React.Component{
	constructor() {
		super()
		this.state = {
			prodList:[]
		}
		fetch('https://easy-mock.com/mock/5b7984a3bcb2ab748b0c2559/product')
			.then((res)=>res.json())
			.then((data)=>{
				this.setState({
					prodList:data.data
				})
			})
	}
	render(){
		let {prodList} = this.state
		return (
			<section className={sty.product}>
				{
					prodList.map((item,idx)=>{
						return (
							<a href="" key={idx}>
								<img src={item.img} alt="img" />
								<p>
									{item.name}{item.detail}
								</p>
								<p>
									<span className={sty.price}>¥{item.price}</span>
									<span className={sty.original}>¥{item.original}</span>
								</p>
								<p className="btn">立即购买</p>
							</a>
						)
					})
				}
			</section>
		)
	}
}

export default App