import Header from '../Components/Elements/Header'
import {connect} from "react-redux";
const mapStateToProps = state=>({
  data:state.cardItems

})
const mapDispatchToProps =dispatch=>({
 
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)