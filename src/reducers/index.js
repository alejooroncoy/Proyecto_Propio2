const reducer = (state, action) => {
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
        case 'BORRAR_SAME':
            return{
                ...state,
                shopping_cart: state.shopping_cart.sort((a,b) =>{
                    return a.id - b.id
                }),
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