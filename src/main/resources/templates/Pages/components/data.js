import MemberUpdate from '../MemberUpdate/MemberUpdate';
import Enrollment from '../Enrollment/Enrollment';
import AuditReport from '../AuditReport/AuditReport';
import ErrorCategory from '../ErrorCategory/ErrorCategory';
import MemberSearch from '../MemberSearch/MemberSearch';
import Provider from '../Provider/Provider';
import Home from '../Home/Home'

export default
{
    links: [ {
      view: "",
      label: "Home",
      className: "fa fa-home fa-fw"
    },{
      view: "enrollment",
      label: "Enrollment",
      className: "fa fa-registered fa-fw"
    }, {
      view: "memberUpdate",
      label: "Member Update",
      className: "fa fa-wrench fa-fw"
    },{
      view: "provider",
      label: "Provider & Producer",
      className: "fa fa-user-md fa-fw"
    }, {
      view: "auditReport",
      label: "Audit Report",
      className: "fa fa-file fa-fw"
    },{
      view: "errorCategory",
      label: "Error Category",
      className: "fa fa-exclamation-triangle fa-fw"
    }],
    routes: [ {
        view: "",
        exact:true,
        label: Home,
      
      },{
        view: "enrollment",
        exact:false,
        label: Enrollment,
       
      }, {
        view: "memberUpdate",
        exact:false,
        label: MemberUpdate,
        
      },{
        view: "provider",
        exact:false,
        label: Provider,
        
      }, {
        view: "auditReport",
        exact:false,
        label: AuditReport,
    
      },{
        view: "errorCategory",
        exact:false,
        label: ErrorCategory,
      }]

  };