import React, { Component } from 'react';
import '../../css/header.css';

class Footer extends Component {
    render() {
      return ( <div>
<footer class="footer"  style={{backgroundColor:'#f8f8f8',borderColor: '#e7e7e7',height:'30px',bottom:'0px',width:'100%',position: 'fixed'}}>
    <div class="container">
        <p class="text-muted" style={{textAlign:'center',marginTop:'5px'}}>© 2018 HCSC. All Rights Reserved.</p>
    </div>
</footer>
</div>
);
    }
}

export default Footer;