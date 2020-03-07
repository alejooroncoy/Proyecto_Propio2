const reducer = (state, action) => {
    const exist = state.shopping_cart.find(item => item.id === action.payload.id);
    switch(action.type)
    {
        case 'GET_TO_CAR':
        return{
            ...state,
            shopping_cart: [...state.shopping_cart, action.payload],
        };
        case 'REMOVE_TO_CAR':
            return{
                ...state,
            shopping_cart: state.shopping_cart.filter(items => items.id !== action.payload)   
            };
        case "IS_DB":
            return{
                    ...state,
                     isDB: action.payload,
            };
        case 'QUITAR':
            return{
                ...state,
                shopping_cart: [...state.shopping_cart, action.payload],
            }
        case "GET_VIDEOS":
                return {
                    ...state,
                    searching: state.products.filter(item =>
                        item.title.toLowerCase().includes(action.payload.toLowerCase())
                        ),
                };
        default:
            return state;
    }
};
export default reducer;