import Router from './router';

require('./base.scss');

class Base extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
        
        global.toggleMenu = () => {
            this.setState({hideMenu: !this.state.hideMenu});
        };
    }
    
    render() {
        return(
            <div className='MainArea'>
                <Router />
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);