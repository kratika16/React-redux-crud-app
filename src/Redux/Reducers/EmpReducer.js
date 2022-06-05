import _ from 'lodash';

const initialState = {
    empinfo: [
        {
            empid: 0,
            name: "Kratika",
            designation: "Software Engineer",
            salary: 50000,
            department: ["Development"]
        },
        {
            empid: 1,
            name: "Mohil",
            designation: "Software Engineer",
            salary: 50000,
            department: ["Development"]
        }
    ],
};
const EmpReducer = (state = initialState,action)=>{
    switch(action.type){
        case "CREATE":
            return{
                ...state,
                empinfo: [...state.empinfo, ...[action.payload]],
            };
        
        case "EDIT":
            console.log(action.payload)
            const updateid = _.get(action.payload, "empid");
            console.log(updateid)
            const updatedata = _.map(state.empinfo, (abc)=>{
                if(abc.empid === _.toNumber(updateid)){
                    return {...abc, ...action.payload};
                }
                return abc;  
            });

         console.log("updated" , updatedata)
        //  return state;
            return {
                ...state,
                empinfo: updatedata,
            };
        
        case "DELETE":
            const id = action.payload;
            console.log(action.payload)
            return{
                ...state,
                empinfo: _.filter(
                    state.empinfo,
                    (data)=> data.empid !== id   
                ), 
            };
        default:
            return state;
    }
};
export default EmpReducer;
