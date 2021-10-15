(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n.n(a),c=n(6),i=n(10),s=n(2),o=n(3),d=n(5),u=n(4),b=n(1),l=n(7),j=n(0),h={name:"",number:""},m=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state=Object(c.a)({},h),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(l.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.contacts.find((function(e){return e.name===t.state.name}));n?alert("Contact "+n.name+" is already in contacts."):(t.props.addContact(t.state),t.setState(Object(c.a)({},h)))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:n,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(b.Component),f=m,O=n(20),p=function(t){var e=t.name,n=t.number;return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:[e,": ",n]})})},v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).filteredNames=function(){return t.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t.props.searchName.toLowerCase())}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("ul",{children:this.filteredNames().map((function(t){var e=t.id,n=t.name,a=t.number;return Object(j.jsx)(p,{name:n,number:a},e)}))})}}]),n}(b.Component),x=v,C=function(t){var e=t.find;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:e})]})})},g=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"ros",number:"459-12-56"},{id:"id-2",name:"hermione Kline",number:"443-89-12"},{id:"id-3",name:"eden",number:"645-17-79"},{id:"id-4",name:"annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(c.a)(Object(c.a)({},e),{},{id:Object(O.a)()})])}}))},t.findContact=function(e){t.setState({filter:e.target.value})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{contacts:this.state.contacts,addContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(C,{find:this.findContact}),this.state.contacts.length>0&&Object(j.jsx)(x,{contacts:this.state.contacts,searchName:this.state.filter})]})}}]),n}(b.Component),y=g;n(16),n(17);r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.01bbbfe4.chunk.js.map