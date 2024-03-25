let initialState = {
    friends:[
    {id: "1", name: "Alex"},
    {id: "2", name: "John"},
    {id: "3", name: "Jack"},
    {id: "4", name: "Miranda"},
    {id: "5", name: "Jenifer"},
    {id: "6", name: "Alex"},
    {id: "7", name: "John"},
    {id: "8", name: "Jack"},
]};
const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;