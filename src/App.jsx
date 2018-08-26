import React from 'react'
import axios from 'axios'
import sty from './app.scss'

import Carousel from 'antd-mobile/lib/carousel'
import 'antd-mobile/lib/carousel/style/css'

class App extends React.Component{
	constructor() {
		super()
		this.state = {
			bannerList:[],
			prodList:[]
		}
		axios.get('/product')
			.then((data)=>{
				this.setState({
					bannerList:data.banner,
					prodList:data.data
				})
			})
	}
	render(){
		let {bannerList,prodList} = this.state
		return (
			<section>
				<Carousel
					autoplay
					infinite
					dots
				>
					{
						bannerList.map((item,idx)=>{
							return <img src={item} key={idx} alt="banner"/>
						})
					}
				</Carousel>
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
			</section>
		)
	}
}

export default App