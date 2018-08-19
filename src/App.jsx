import React from 'react'
import sty from './app.scss'

class App extends React.Component{
	constructor() {
		super()
	}
	render(){
		return (
			<section className={sty.product}>
				<a href="">
					<img src="https://via.placeholder.com/100x150" alt="img" />
					<p>
						名称描述
					</p>
					<p>
						<span className={sty.price}>¥99</span>
						<span className={sty.original}>¥99</span>
					</p>
					<p className="btn">立即购买</p>
				</a>
				<a href="">
					<img src="https://via.placeholder.com/100x150" alt="img" />
					<p>
						名称描述
					</p>
					<p>
						<span className={sty.price}>¥99</span>
						<span className={sty.original}>¥99</span>
					</p>
					<p className="btn">立即购买</p>
				</a>
			</section>
		)
	}
}

export default App