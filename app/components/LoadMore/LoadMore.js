import React,{Component} from 'react';
import './LoadMore.less'
export default class LoadMore extends Component{
    loadMore(){ // 调用父级传递过来的加载更多函数
        if (this.props.isLoading){
            return ; 
        }
        this.props.loadMore();
    }
    render(){
        return (
            <div className="has-more">
                {
                    this.props.hasMore?<div onClick={this.loadMore.bind(this)}>加载更多...</div>: <div>我是有底线的</div>
                }
            </div>
        )
    }
}